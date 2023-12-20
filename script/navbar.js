// sub menu 
var submenu = document.getElementById("submenu2");
var pls = document.getElementById("plus");
var min = document.getElementById("minus");
function minus1() {
  submenu.classList.add("d-none");
  min.classList.add("d-none");
  pls.classList.remove("d-none");
}

function plus1(){
  submenu.classList.remove("d-none");
  min.classList.remove("d-none");
  pls.classList.add("d-none");
}

// second sub menu 
var menu_2_sub = document.getElementById("menu_2_sub");
var pls2 = document.getElementById("plus2");
var min2 = document.getElementById("minus2");
function minus2() {
  menu_2_sub.classList.add("d-none");
  min2.classList.add("d-none");
  pls2.classList.remove("d-none");
}

function plus2(){
  menu_2_sub.classList.remove("d-none");
  min2.classList.remove("d-none");
  pls2.classList.add("d-none");
}

// show and hide deep menu 
var deepmenu = document.getElementById("deepmenu");
var down = document.getElementById("down");
var up = document.getElementById("up");
function down1() {
  deepmenu.classList.remove("d-none");
  down.classList.add("d-none");
  up.classList.remove("d-none");
}

function up1(){
  deepmenu.classList.add("d-none");
  down.classList.remove("d-none");
  up.classList.add("d-none");
}

// show and hide deep sub menu
var deep_sub_menu = document.getElementById("deep_sub_menu");
var down11 = document.getElementById("down2");
var up11 = document.getElementById("up2");
function down2() {
  deep_sub_menu.classList.remove("d-none");
  down11.classList.add("d-none");
  up11.classList.remove("d-none");
}

function up2(){
  deep_sub_menu.classList.add("d-none");
  down11.classList.remove("d-none");
  up11.classList.add("d-none");
}

// sub menu 
var submenu3 = document.getElementById("submenu3");
var pls3 = document.getElementById("plus3");
var min3 = document.getElementById("minus3");
function minus3() {
  submenu3.classList.add("d-none");
  min3.classList.add("d-none");
  pls3.classList.remove("d-none");
}

function plus3(){
  submenu3.classList.remove("d-none");
  min3.classList.remove("d-none");
  pls3.classList.add("d-none");
}