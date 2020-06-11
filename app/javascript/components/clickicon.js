const addTextToCardOnClick = () => {
  const headerCard = document.getElementById("header-card");
  const registerCard = document.getElementById("register-card");
  const voterCard = document.getElementById("voter-card");
  const abstentionCard = document.getElementById("abstention-card");
  const icons = document.querySelectorAll(".map-icon")

  const removeActiveClass = (array) => {
    array.forEach((icon) => {
      icon.classList.remove("active")
    })
  }

  window.addEventListener('click', function(e){
    if (document.getElementById('france_card').contains(e.target)){
      icons.forEach((icon) => {
        icon.addEventListener('click', (e) => {
          removeActiveClass(icons);
          icon.classList.add("active")
          headerCard.innerHTML=icon.dataset.name+" - "+ icon.dataset.zipcode;
          registerCard.innerHTML="<span class='full-number'>"+icon.dataset.register.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")+"</span> <span class='subtitle'>inscrits</span>";
          voterCard.innerHTML= Math.round(((icon.dataset.register - icon.dataset.abstention)/icon.dataset.register + Number.EPSILON) * 100)+"<span class='digit'>%</span> <span class='subtitle'>de votants</span><br><span class='subtitle'> soit "+(icon.dataset.register - icon.dataset.abstention).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")+" personnes</span>"
          abstentionCard.innerHTML=Math.round((icon.dataset.abstention/icon.dataset.register + Number.EPSILON) * 100)+"<span class='digit'>%</span> <span class='subtitle'>d'abstention</span><br><span class='subtitle'> soit "+icon.dataset.abstention.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")+" personnes</span>";
        })

      })
    } else{
      removeActiveClass(icons);
      headerCard.innerHTML="France - 🇫🇷";
      registerCard.innerHTML="<span class='full-number'>46 437 411</span>  <span class='subtitle'>inscrits</span>";
      voterCard.innerHTML= "45<span class='digit'>%</span> <span class='subtitle'>de votants</span><br><span class='subtitle'> soit 20 740 205 personnes</span>"
      abstentionCard.innerHTML= "55<span class='digit'>%</span> <span class='subtitle'>d'abstention</span><br><span class='subtitle'> soit 25 697 206 personnes</span>";
    }
  })
}

export { addTextToCardOnClick }
