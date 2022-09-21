function CalculateWeight() {
    var val = document.getElementById('dropdown').value;
  var text = document.getElementById('text');
  var multiplier = 0;
  multiplier=Number(multiplier);
  var img = document.getElementById('img');
  var wt=document.getElementById('planet').value;
  if(wt===""){alert("enter weight first")
  return
}

  wt=Number(wt);

  
  if(val == "Mercury") {
    multiplier = 0.38;
    img.src = "https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1920,f_auto/AW_Mercury_ladprw.jpg"
  }
  
  if(val == "Venus") {
    multiplier = 0.91;
    img.src = 'https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1920,f_auto/AW_Venus_nli6oy.jpg'
  }
  if(val == "Earth") {
    multiplier = 1;
    img.src = 'earth1_prev_ui.png'
  }
  if(val == "Mars") {
    multiplier = 0.38;
    img.src = 'https://static.swatch.com/images/product/SO33R100/sa200/SO33R100_sa200_er006.png'
  }
  if(val == "Jupiter") {
    multiplier = 2.34;
    img.src = 'jupiter.png'
  }
  if(val == "Saturn") {
    multiplier = 0.93;
    img.src = 'https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1920,f_auto/AW_187527_OUTERPLANETS_Saturn_doegjg.jpg'
  }
  if(val == "Uranus") {
    multiplier = 0.92;
    
    img.src = 'Uranus.png'
  }
  if(val == "Neptune") {
    multiplier = 1.12;
    img.src = 'Neptune.png'
  }
  text.innerHTML = "Your weight on the planet " + val + " is " + Math.floor(wt* multiplier);


}