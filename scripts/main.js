"use strict";

let ok = 0;
function subscribed() {
  let query = document.querySelector("#subscribe-text");
  let query1 = document.querySelector("#subscribe");
  ok = ok ^ 1;
  query.innerHTML = ok ? "Subscribed" : "Subscribe";
  query.style.color = ok ? "black" : "white";
  query1.style.backgroundColor = ok ? "white" : "red";
}
