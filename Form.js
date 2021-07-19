const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let nome = document.getElementById('nome').value;
  let email = document.getElementById('email').value;
  let data = {
    nome,
    email,
  }
  let convertData = JSON.stringify(data);

  localStorage.setItem('lead', convertData)

  let content = document.getElementById('content')

  let carregando = `<p>cadastrando...</p>`

  let Obrigado = `<p>Obrigado!</p>`

  content.innerHTML = cadastrando


  setTimeout(() => {
    content.innerHTML = Obrigado
  }, 1000)

}) 

  function countdown(){
    var now = new Date();
                
    var eventDate = new Date("Nov 26, 2021 00:00:00");
    var currentTiime = now.getTime();
    var eventTime = eventDate.getTime();
    var remTime = eventTime - currentTiime;
    
      var d = Math.floor(remTime / (1000 * 60 * 60 * 24));
      var h = Math.floor((remTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var m = Math.floor((remTime % (1000 * 60 * 60)) / (1000 * 60));
      var s = Math.floor((remTime % (1000 * 60)) / 1000);
    document.getElementById("days").textContent = d;
    document.getElementById("days").innerText = d;
    document.getElementById("hours").textContent = h;
    document.getElementById("minutes").textContent = m;
    document.getElementById("seconds").textContent = s;
    setTimeout(countdown, 1000);
    
    
     if (remTime < 0) {
      clearInterval(countdown);
      
      document.getElementById("days").innerHTML = " ";
      document.getElementById("hours").innerHTML = " ";
      document.getElementById("minutes").innerHTML = " ";
      document.getElementById("seconds").innerHTML = "<small>FIM</small>"; 
      } 
  }
  countdown();

