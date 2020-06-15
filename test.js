// JavaScript Document

function tipovi() {
  var x = document.getElementById("tipovi-stanova");
  if (x.innerHTML === "Hello") {
    x.innerHTML = '<object type="text/html" data="tipovi-1.html" ></object>';
  } else {
    x.innerHTML = "Hello";
  }
}