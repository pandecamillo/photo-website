let listeImages = [
  "img/operateurs/africell.jpg",
  "img/operateurs/airtel.jpg",
  "img/operateurs/orange.jpg",
  "img/operateurs/vodacom.png",
];

let index = 0;
console.log("start : " + index);
document.getElementById("picture").src = listeImages[index];

function next() {
  if (index == 3) {
    return;
  }
  index += 1;
  console.log("next : " + index);
  document.getElementById("picture").src = listeImages[index];
}

function back() {
  if (index == 0) {
    return;
  }
  index -= 1;
  console.log("back : " + index);
  document.getElementById("picture").src = listeImages[index];
}
