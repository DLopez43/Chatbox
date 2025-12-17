import { LuSun, LuMoon } from "react-icons/lu";
import { useState } from "react";
import MainRoom from "../../MainRoom";

export default function App() {
  const [theme, setTheme] = useState("");
  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <div className="min-h-screen bg-white text-black dark:bg-zinc-900 dark:text-white">
        {/* Your chat UI stays */}
        <MainRoom />

        {/* Your toggle UI */}
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex gap-2 bg-white dark:bg-zinc-800 p-2 rounded-xl border shadow">
          <button
            onClick={() => setTheme("")}
            className="h-9 w-9 grid place-items-center rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-700"
          >
            <LuSun />
          </button>

          <button
            onClick={() => setTheme("dark")}
            className="h-9 w-9 grid place-items-center rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-700"
          >
            <LuMoon />
          </button>
        </div>
      </div>
    </div>
  );
}
