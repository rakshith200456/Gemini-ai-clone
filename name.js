document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('app-sidebar');
    const toggleBtn = document.getElementById('toggle-sidebar');
    const toggleIcon = toggleBtn.querySelector('.material-symbols-outlined');

    toggleBtn.addEventListener('click', () => {
        // Toggle the 'collapsed' class on the sidebar
        sidebar.classList.toggle('collapsed');
        
        // Optionally change the icon based on state
        if (sidebar.classList.contains('collapsed')) {
            toggleIcon.textContent = 'menu'; // Change to hamburger menu when closed
        } else {
            toggleIcon.textContent = 'left_panel_close'; // Change back to close panel
        }
    });
});