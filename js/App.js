var toggleOpen = document.getElementById('toggleOpen');
var toggleClose = document.getElementById('toggleClose');
var collapseMenu = document.getElementById('collapseMenu');
const passvisb = document.getElementById("passvisb")
const imgvisb = document.getElementById("imgvisb")
function handleClick() {
  if (collapseMenu.style.display === 'block') {
    collapseMenu.style.display = 'none';
  } else {
    collapseMenu.style.display = 'block';
  }
}

toggleOpen.addEventListener('click', handleClick);
toggleClose.addEventListener('click', handleClick);

const loginpanel = document.getElementById("loginpanel")
const regstrpage = document.getElementById("regstrpage")

function openhesab() { loginpanel.style.display = "flex" }
function closehesab() { loginpanel.style.display = "none"; regstrpage.style.display = 'none' }
function regstpanel() { regstrpage.style.display = "flex" }
function changepasvisb() {
  passvisb.type === "password" ? passvisb.type = "text" : passvisb.type = "password"
  if (imgvisb.src.includes("view.png")) {
    imgvisb.src = "/img/hide.png";  
  } else {
    imgvisb.src = "/img/view.png"; 
  }
  
}