var link = document.createElement("li");
var a = document.createElement("a");
var node = document.createTextNode("Sign Up");
a.appendChild(node);
link.appendChild(a);
var element = document.querySelector("#menu");

function toggleMobileMenu() {
      element.appendChild(link);
      document.querySelector('#menu').classList.toggle('active')
      document.querySelector('.mobile-bar').classList.toggle('active')
}