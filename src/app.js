/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//Se ejecuta al cargar la pagina
window.onload = function() {
  //write your code here

  //Acceso al DOM Data Object Model

  //Obtener valores de un arrgelo

  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  console.log("Hello Rigo from the console!");
  const aleatorio1 = who[Math.floor(Math.random() * who.length)];
  const aleatorio2 = action[Math.floor(Math.random() * action.length)];
  const aleatorio3 = what[Math.floor(Math.random() * what.length)];
  const aleatorio4 = when[Math.floor(Math.random() * when.length)];

  document.getElementById(
    "titulo"
  ).innerText = `${aleatorio1} ${aleatorio2} ${aleatorio3} ${aleatorio4}`;
};
