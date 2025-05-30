 // Get current page URL (last part only)
  const currentPage = window.location.pathname.split('/').pop();

  // Loop through all category links
  document.querySelectorAll('.category-link').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });


  // Modal JS
  const modal = document.getElementById("myModal");
  const buttonGrid = document.getElementById("buttonGrid");
  const modalTitle = document.getElementById("modal-title");
  const backBtn = document.getElementById("backbtn");
  const locationBtn = document.querySelector(".enugu-btn");

  const communities = [
    "Okpanku", "Mpu", "Ndiabor", "Oduma", "Nenwe", "Ituku",
    "Agbogugu", "Ogbaku", "Ihe", "Isu Awaa", "Agbudu", "Owelli",
    "Amoli", "Ugbo", "Ogugu", "Mgbowo", "Awgu", "Mgbidi",
    "Mmaku", "Obeagu", "Ugwueme", "Nkwe", "Ezere", "Nenwenta",
    "Awgunta", "Olo", "Okpogho", "Iwollo Oghe", "Neke Oghe", "Oyofo Oghe",
    "Amansiodo Oghe", "Amankwo Oghe", "Akama Oghe", "Obinofia Ndiagu", "Umana Ndiuno"
  ];

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
    // Add more if needed
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

  // Filter function placeholder
  function filterListings() {
    alert("Filters applied! Implement your filtering logic.");
  }

  // Price inputs save/clear buttons behavior (optional example)
  const minPriceInput = document.getElementById("minPrice");
  const maxPriceInput = document.getElementById("maxPrice");
  const savePriceBtn = document.getElementById("savePriceBtn");
  const clearPriceBtn = document.getElementById("clearPriceBtn");

  function updatePriceButtons() {
    const minVal = minPriceInput.value;
    const maxVal = maxPriceInput.value;
    const valid = (minVal !== "" || maxVal !== "");
    savePriceBtn.disabled = !valid;
    clearPriceBtn.disabled = !valid;
  }

  minPriceInput.addEventListener("input", updatePriceButtons);
  maxPriceInput.addEventListener("input", updatePriceButtons);

  savePriceBtn.addEventListener("click", () => {
    alert(`Price saved: Min ${minPriceInput.value}, Max ${maxPriceInput.value}`);
  });

  clearPriceBtn.addEventListener("click", () => {
    minPriceInput.value = "";
    maxPriceInput.value = "";
    updatePriceButtons();
  });

  // Breed search input filter (optional example)
  const breedSearchInput = document.getElementById("breedSearchInput");
  const breedCheckboxes = document.getElementById("breedCheckboxes");

  breedSearchInput.addEventListener("input", () => {
    const filter = breedSearchInput.value.toLowerCase();
    const labels = breedCheckboxes.querySelectorAll("label");
    labels.forEach(label => {
      const text = label.textContent.toLowerCase();
      label.style.display = text.includes(filter) ? "" : "none";
    });
  });
