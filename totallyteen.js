// Modal Image Gallery
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}

// Change style of navbar on scroll
window.onscroll = function() {myFunction()};
function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "bar" + " card" + " animate-top" + " white";
    } else {
        navbar.className = navbar.className.replace(" card animate-top white", "");
    }
}

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("show") == -1) {
        x.className += " show";
    } else {
        x.className = x.className.replace(" show", "");
    }
}

// Accordion
function myAccFunc() {
  var x = document.getElementById("demoAcc");
  if (x.className.indexOf("show") == -1) {
    x.className += " show";
  } else {
    x.className = x.className.replace(" show", "");
  }
}

document.getElementById("myBtn").click();


// Open and close sidebar
function open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}

function close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}

function tier0selected(){
  document.getElementById("freebutton").classList.add("light-grey");
  document.getElementById("onedollarbutton").classList.remove("light-grey");
  document.getElementById("twodollarbutton").classList.remove("light-grey");
  document.getElementById("threedollarbutton").classList.remove("light-grey");
  show_selected_tiers(0)
}

function tier1selected(){
  document.getElementById("freebutton").classList.remove("light-grey");
  document.getElementById("onedollarbutton").classList.add("light-grey");
  document.getElementById("twodollarbutton").classList.remove("light-grey");
  document.getElementById("threedollarbutton").classList.remove("light-grey");
  show_selected_tiers(1)
}

function tier2selected(){
  document.getElementById("freebutton").classList.remove("light-grey");
  document.getElementById("onedollarbutton").classList.remove("light-grey");
  document.getElementById("twodollarbutton").classList.add("light-grey");
  document.getElementById("threedollarbutton").classList.remove("light-grey");
  show_selected_tiers(2)
}

function tier3selected(){
  document.getElementById("freebutton").classList.remove("light-grey");
  document.getElementById("onedollarbutton").classList.remove("light-grey");
  document.getElementById("twodollarbutton").classList.remove("light-grey");
  document.getElementById("threedollarbutton").classList.add("light-grey");
  show_selected_tiers(3)
}

function show_selected_tiers(tier_num){
  items=document.getElementsByClassName("col m4");
  for (i=0; i < items.length; i++) {
    var item= items[i];
    var tier = item.getAttribute("tier");
    if (tier <= tier_num) {
      item.style.display="block";
    }
    else{
      item.style.display="none";
    }
    }
}

function allSelected() {
  document.getElementById("allbutton").classList.add("light-grey");
  document.getElementById("restaurantbutton").classList.remove("light-grey");
  document.getElementById("activitybutton").classList.remove("light-grey");
  showAll();
}

function activitiesSelected(){
  document.getElementById("allbutton").classList.remove("light-grey");
  document.getElementById("restaurantbutton").classList.remove("light-grey");
  document.getElementById("activitybutton").classList.add("light-grey");
  showActivities();
}

function restaurantsSelected(){
  document.getElementById("allbutton").classList.remove("light-grey");
  document.getElementById("restaurantbutton").classList.add("light-grey");
  document.getElementById("activitybutton").classList.remove("light-grey");
  showRestaurants();
}

function showAll(){
  items=document.getElementsByClassName("col m4");
  for (i=0; i < items.length; i++) {
    var item= items[i];
    item.style.display="block";
    }
}

function showRestaurants(){
  items=document.getElementsByClassName("col m4");
  for (i=0; i < items.length; i++){
    var item= items[i];
    var category= item.getAttribute("category");
    if (category == "restaurant"){
      item.style.display="block";
    }
    else{
      item.style.display="none";
    }
  }
}

function showActivities(){
  items=document.getElementsByClassName("col m4");
  for (i=0; i < items.length; i++){
    var item= items[i];
    var category= item.getAttribute("category");
    if (category == "activity"){
      item.style.display="block";
    }
    else{
      item.style.display="none";
    }
  }
}
