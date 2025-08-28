function navmenu() {
  var x = document.getElementById("contact-list");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function showdata(evt, section) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("inner-main");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("navlink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.color='white';
  }
  document.getElementById(section).style.display = "block";
  evt.currentTarget.style.color='gold';
}

function showmsg(){
    alert("April fool")
}