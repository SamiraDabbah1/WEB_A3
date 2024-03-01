document.getElementById("profileDropdownButton").addEventListener("click", function() {
    document.getElementById("dropdownContent").classList.toggle("hidden");
 });
document.getElementById("burgerToggleBtn").addEventListener("click", function () {
    var sidebar = document.getElementById("sidebar");
    var minimizedSidebar = document.getElementById("minimizedSidebar");
    sidebar.classList.toggle("hidden");
    minimizedSidebar.classList.toggle("hidden");
    var mainContent = document.querySelector(".flex-1");
    mainContent.classList.toggle("ml-0");
});
document.getElementById("moonToggleBtn").addEventListener("click", function () {
    var body = document.querySelector("body");
    body.classList.toggle("dark");

    var header = document.querySelector("header");
    header.classList.toggle("dark");

    var sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("dark-mode-sidebar");

    var footer = document.querySelector("footer");
    footer.classList.toggle("dark-mode-footer");

    // Toggle moon/sun icon
    var moonIcon = document.querySelector("#moonToggleBtn i");
    moonIcon.classList.toggle("fa-moon");
    moonIcon.classList.toggle("fa-sun");
});

// Function to simulate logout (Replace with actual logout functionality)
function logout() {
    alert("Logout clicked! Implement actual logout functionality here.");
}