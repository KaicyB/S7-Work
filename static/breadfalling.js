function createBread() {
  const bread = document.createElement("img");
  bread.classList.add("bread")
  bread.src = "/static/bread2.png"; 
  bread.style.left = Math.random() * 100 + "vw"; 
  bread.style.animationDuration = (Math.random() * 3 + 3) + "s"; 
  bread.style.opacity = Math.random() * 0.5 + 0.5;

  document.getElementById("breadRain").appendChild(bread);


  setTimeout(() => bread.remove(), 6000);
}


setInterval(createBread, 250)