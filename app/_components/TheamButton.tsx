import { Moon, Sun } from 'lucide-react'
import React, { useEffect, useState } from 'react'

function TheamButton() {

    const [darkMode, setDarkMode] = useState(false);
        
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        const isDark = savedTheme === "dark" || (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches);
        setDarkMode(isDark);
        document.documentElement.classList.toggle("dark", isDark);
    }, []);

    const toggleTheme = () => {
        const newTheme = !darkMode;
        setDarkMode(newTheme);
        localStorage.setItem("theme", newTheme ? "dark" : "light");
        document.documentElement.classList.toggle("dark", newTheme);
    };


  return (
    <div>
        <div className='flex items-center gap-6'>
            <button
                onClick={toggleTheme}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-blue-600 transition-all duration-300 ring-1 ring-transparent hover:ring-blue-500"
                title="Toggle Theme"
        >      
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
        </div>
    </div>
  )
}

export default TheamButton