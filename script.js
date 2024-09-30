const sidebar = document.querySelector(".sidebar");
const closeSidebar = document.querySelector(".close-icon");
const openSidebar = document.querySelector(".menubar");
const sidebarlinks = document.querySelectorAll(".sidebarlink");

sidebarlinks.forEach(function (e) {
  e.addEventListener("click", function () {
    sidebar.classList.remove("active");
  });
});
openSidebar.addEventListener("click", function () {
  sidebar.classList.add("active");
});
closeSidebar.addEventListener("click", function () {
  sidebar.classList.remove("active");
});
