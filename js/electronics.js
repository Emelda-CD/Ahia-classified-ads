const modal = document.getElementById("myModal");
  const buttonGrid = document.getElementById("buttonGrid");
  const modalTitle = document.getElementById("modal-title");
  const backBtn = document.querySelector(".back-btn");

  const communities = [
    "Okpanku", "Mpu", "Ndiabor", "Oduma", "Nenwe", "Ituku",
    "Agbogugu", "Ogbaku", "Ihe", "Isu Awaa", "Agbudu", "Owelli",
    "Amoli", "Ugbo", "Ogugu", "Mgbowo", "Awgu", "Mgbidi",
    "Mmaku", "Obeagu", "Ugwueme", "Nkwe", "Ezere", "Nenwenta",
    "Awgunta", "Olo", "Okpogho", "Iwollo Oghe", "Neke Oghe", "Oyofo Oghe",
    "Amansiodo Oghe", "Amankwo Oghe", "Akama Oghe", "Obinofia Ndiagu", "Umana Ndiuno"
  ];

  // Long list of sub-options (You can continue adding the rest from your list)
  const subOptions = {
    "Okpanku": [
      "Obinofia Ndiuno", "Obeleagu Umana", "Umumba Ndiuno", "Umana Ndiagu", "Aguobu Umumba", 
      "Umumba Ndiagu", "Umana Agba", "Awha Ndiagu", "Awha Imezi", "Mgbagbu Owa"
    ],
    "Mpu": [
      "Aguobu Owa", "Ezema Ogulogu", "Ibite Olo", "Nike Uno", "Mbulu Njodo", 
      "Ugwuogo Nike", "Enugu", "Akwuke", "Amaechi", "Ugwuaji"
    ],
    "Ndiabor": [
      "Obeagu", "Ukehe", "Umunko", "Diogbe", "Ekwegbe", 
      "Umuna", "Ozalla", "Ohodo", "Onyohor", "Ochima"
    ],
    "Oduma": [
        "Obinofia Ndiuno", "Obeleagu Umana", "Umumba Ndiuno", "Umana Ndiagu", "Aguobu Umumba", 
        "Umumba Ndiagu", "Umana Agba", "Awha Ndiagu", "Awha Imezi", "Mgbagbu Owa"
      ],
    // Add more communities with their sub-options...
  };

  function openModal() {
    modal.style.display = "flex";
    loadMainMenu();
  }

  function closeModal() {
    modal.style.display = "none";
  }

  function loadMainMenu() {
    modalTitle.textContent = "Select a Community";
    buttonGrid.innerHTML = "";
    backBtn.style.display = "none";

    communities.forEach(name => {
      const btn = document.createElement("button");
      btn.textContent = name;
      btn.onclick = () => loadSubOptions(name);
      buttonGrid.appendChild(btn);
    });
  }

  function loadSubOptions(communityName) {
    modalTitle.textContent = communityName + " Options";
    buttonGrid.innerHTML = "";
    backBtn.style.display = "inline-block";

    const options = subOptions[communityName] || ["No additional options available"];

    options.forEach(opt => {
      const btn = document.createElement("button");
      btn.textContent = opt;
      btn.onclick = () => alert(`${opt} clicked`);
      buttonGrid.appendChild(btn);
    });
  }