'use strict'

const lightBtn = document.getElementById("lightBtn");
        const darkBtn = document.getElementById("darkBtn");

        const toggleMode = (mode) => {
            if (mode === 'dark') {
                document.documentElement.classList.remove("light");
                document.documentElement.classList.add("dark");
                window.localStorage.setItem('mode', 'dark');
                darkBtn.classList.add('active');
                lightBtn.classList.remove('active');
            } else {
                document.documentElement.classList.remove("dark");
                document.documentElement.classList.add("light");
                window.localStorage.setItem('mode', 'light');
                lightBtn.classList.add('active');
                darkBtn.classList.remove('active');
            }
        };

        lightBtn.onclick = () => toggleMode('light');
        darkBtn.onclick = () => toggleMode('dark');

        // On page load
        const savedMode = window.localStorage.getItem('mode');
        if (savedMode === 'light') {
            toggleMode('light');
        } else {
            // Default to dark mode if no mode is saved
            toggleMode('dark');
        }