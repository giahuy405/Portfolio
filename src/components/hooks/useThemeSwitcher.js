import React, { useEffect, useState } from 'react'

const useThemeSwitcher = () => {
    const preferDarkQuery = "(prefer-color-scheme: dark)";
    const [mode, setMode] = useState('');

    useEffect(() => {
        if (mode === 'dark') {
            localStorage.setItem("theme", "dark");
            document.documentElement.classList.add('dark')
        } else {
            localStorage.setItem("theme", "light");
            document.documentElement.classList.remove('dark')
        }
        localStorage.setItem("theme", mode); // add this line to save the mode to localStorage
    }, [mode]);
    useEffect(() => {
        const mediaQuery = window.matchMedia(preferDarkQuery);
        const userPref = localStorage.getItem("theme");
        const handleChange = () => {
            if (userPref) {
                let check = userPref === "dark" ? "dark" : "light";
                setMode(check);
                if (check === "dark") document.documentElement.classList.add('dark')
                else document.documentElement.classList.remove('dark')
            } else {
                let check = mediaQuery.matches ? "dark" : "light"
                setMode(check);
                localStorage.setItem("theme", check)
                if (check === 'dark') document.documentElement.classList.add('dark')
                else document.documentElement.classList.remove('dark')
            }
        }
        handleChange();
        mediaQuery.addEventListener("change", handleChange)
        return () => mediaQuery.removeEventListener("change", handleChange)
    }, [])
    return [mode, setMode]
}

export default useThemeSwitcher
