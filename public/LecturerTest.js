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


// Function to simulate logout (Replace with actual logout functionality)
function logout() {
    alert("Logout clicked! Implement actual logout functionality here.");
}