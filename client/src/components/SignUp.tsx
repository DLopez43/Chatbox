import { useState } from "react";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError(null);
    setSuccess(null);

    // make sure all fields are input
    if (!username || !password) {
      setError("Please complete all fields.");
      return;
    }

    
    try {
     
      const response = await fetch("http://localhost:3000/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password}),
      });

      if (!response.ok) {
        const err = await response.json();
        setError(err.error || "Failed to create user.");
        return;
      }

      const data = await response.json();
      console.log("Created user:", data);

      setSuccess("Account created successfully!");
      setUsername("");
      setPassword("");

    } catch (error) {
      console.error("Error creating user:", error);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>

        <input
          placeholder="Enter Your Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          placeholder="Enter Your Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Sign Up</button>
      </form>
    </>
  );
};

export default Signup;
