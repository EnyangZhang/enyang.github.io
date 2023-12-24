// not used
function on() {}

//close sidebar
function off() {
    let sidebar = document.querySelector("#sidebar");
    sidebar.classList.toggle("active");
    document.getElementById("overlay").style.display = "none";
}

function toggleSidebar() {
    let sidebar = document.querySelector("#sidebar");
    sidebar.classList.toggle("active");
    if (
        !document.getElementById("overlay").style.display ||
        document.getElementById("overlay").style.display === "none"
    ) {
        document.getElementById("overlay").style.display = "block";
    } else {
        document.getElementById("overlay").style.display = "none";
    }
}

function toggleSidebarBtn() {
    let sidebar = document.querySelector("#sidebar");
    sidebar.classList.toggle("active");
    document.getElementById("overlay").style.display = "none";
}
