const toggleSidebar1=document.getElementById('open-sidebar');
const toggleSidebar2=document.getElementById('close-sidebar');
const pages = [
  {
      name: "Project Moon",
      url: "pm.html",
      description: "Studio de jocuri Sud-Coreean"
  },
  {
      name: "Lobotomy Corporation (Joc)",
      url: "lobcorp.html",
      description: "Simulator de gestionare al monștrilor"
  },
  {
      name: "Library of Ruina",
      url: "lor.html",
      description: "Joc de cărți pe roluri"
  },
  {
      name: "Limbus Company (Joc)",
      url: "limbus.html",
      description: "Joc de startegie gacha"
  },
  {
      name: "Wonderlab",
      url: "wonderlab.html",
      description: "Bandă desenată non-canonică"
  },
  {
      name: "Distortion Detective",
      url: "distortdet.html",
      description: "Roman web detectiv"
  },
  {
      name: "Leviathan",
      url: "leviathan.html",
      description: "Bandă desenată/roman web"
  },
  {
      name: "Orașul",
      url: "orasul.html",
      description: "Locație principală în universul PM"
  },
  {
      name: "Mahalale",
      url: "mahalale.html",
      description: "Regiuni subdezvoltate ale Orașului"
  },
  {
      name: "Aripi",
      url: "aripi.html",
      description: "Mega-corporațiile ce stăpânesc districtele Orașului"
  },
  {
      name: "Sindicate",
      url: "sindicate.html",
      description: "Alternativele ilegale ale Aripilor din Mahalale"
  },
  {
      name: "Biblioteca",
      url: "biblioteca.html",
      description: "Locație din universul PM"
  },
  {
      name: "Lobotomy Corporation (Compania)",
      url: "lobcorpcom.html",
      description: "Compania focus a universului PM"
  },
  {
      name: "Limbus Company (Compania)",
      url: "lcbc.html",
      description: "Companie din universul PM"
  },
  {
      name: "Abnormități",
      url: "abnos.html",
      description: "Creaturi create de Corporația L"
  },
  {
      name: "Cuiburi",
      url: "cuiburi.html",
      description: "Regiunile Orașului întreținute de Aripi"
  },
  {
      name: "Nopțile Albe și Zilele Întunecate",
      url: "zile-nopti.html",
      description: "Eveniment catastrofal din universul PM"
  },
  {
    name: "E.G.O",
    url: "ego.html",
    description: "Echipament personalizat din psihicul unui individ"
  },
  {
    name: "Distorsiuni",
    url: "distorsiuni.html",
    description: "Foști oameni transformați în creaturi din pricina emoțiilor negative"
  }
];
const searchInput = document.getElementById("pageSearch");
const resultsContainer = document.querySelector(".user-cards");
const template = document.querySelector("[data-user-template]");

function togglesubmenu(button){
  button.nextElementSibling.classList.toggle('show');
  button.classList.toggle('rotate');
}
function togglesidenav(){
  toggleSidebar1.classList.toggle('rotate');
  toggleSidebar2.classList.toggle('rotate');
}


searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();
  resultsContainer.innerHTML = "";

  if (value === "") {
    resultsContainer.classList.add('hidden');
    return;
  }
  else{
    resultsContainer.classList.remove('hidden');
  }

  const filteredPages = pages.filter(page =>
    page.name.toLowerCase().includes(value)
  );

  filteredPages.forEach(page => {
    const card = template.content.cloneNode(true).children[0];
    card.querySelector(".article-name").textContent = page.name;
    card.querySelector(".article-short").textContent = page.description;
    card.addEventListener("click", () => {
      window.location.href = page.url;
    });
    resultsContainer.appendChild(card);
  });

});
