function toggleTheme() {
    const body = document.body;
    const isDarkMode = body.classList.contains("dark-theme");
    const newMode = !isDarkMode;
    
    if (newMode) {
        body.classList.add("dark-theme");
    } else {
        body.classList.remove("dark-theme");
    }
    
    localStorage.setItem("darkMode", newMode);
}