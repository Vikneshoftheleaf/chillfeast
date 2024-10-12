'use client'
import { useTheme } from "next-themes";
export default function DarkModeToggler() {
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;

    return (
        <>
            <button  onClick={() => theme == "dark" ? setTheme('light') : setTheme("dark")} id="theme-toggle" data-tooltip-target="tooltip-toggle" type="button" class="mx-2 text-gray-500 text-xl inline-flex items-center justify-center dark:text-gray-400 hover:bg-gray-100 w-10 h-10 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg  p-2.5">
            {
                    (theme == 'dark')?<ion-icon name="moon"></ion-icon>:<ion-icon name="sunny-outline"></ion-icon>
                }
                <span class="sr-only">Toggle dark mode</span>
            </button>
        </>
    )
}