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




const sampleData = ['Apple', 'Banana', 'Orange', 'Grapes', 'Pineapple'];

function showSuggestions() {
  const input = document.getElementById('filterInput').value.toLowerCase();
  const suggestionsBox = document.getElementById('suggestions');
  suggestionsBox.innerHTML = '';

  if (input === '') {
    suggestionsBox.style.display = 'none';
    return;
  }

  const matches = sampleData.filter(item => item.toLowerCase().includes(input));

  if (matches.length === 0) {
    suggestionsBox.style.display = 'none';
    return;
  }

  matches.forEach(match => {
    const div = document.createElement('div');
    div.textContent = match;
    div.classList.add('suggestion-item');
    div.onclick = () => {
      document.getElementById('filterInput').value = match;
      suggestionsBox.style.display = 'none';
      filterListings(); // Optional: trigger search
    };
    suggestionsBox.appendChild(div);
  });

  suggestionsBox.style.display = 'block';
}


function filterListings() {
  const input = document.getElementById('filterInput').value.trim();
  if (input !== '') {
    const encodedQuery = encodeURIComponent(input);
    window.location.href = `results.html?query=${encodedQuery}`;
  }
}


div.onclick = () => {
  document.getElementById('filterInput').value = match;
  suggestionsBox.style.display = 'none';
  filterListings(); // Redirect when suggestion clicked
};



  const params = new URLSearchParams(window.location.search);
  const query = params.get('query');
  if (query) {
    document.body.innerHTML = `<h2>Search results for "${query}"</h2>`;
    // You can add logic to fetch or display results based on the query
  }

      const filtered = sampleData.filter(item => item.toLowerCase().startsWith(input));

      filtered.forEach(item => {
        const div = document.createElement("div");
        div.textContent = item;
        div.onclick = () => {
          document.getElementById("filterInput").value = item;
          suggestionsBox.innerHTML = ""; // Clear suggestions after selection
        };
        suggestionsBox.appendChild(div);
      });
    

    function filterListings() {
      const input = document.getElementById("filterInput").value;
      alert("You searched for: " + input);
    }




    const popup = document.getElementById("registerPopup");
  const openBtn = document.getElementById("openRegisterPopup");
  const closeBtn = document.querySelector(".popup-close");

  openBtn.onclick = function(e) {
    e.preventDefault();
    popup.style.display = "flex";
  }

  closeBtn.onclick = function() {
    popup.style.display = "none";
  }

  window.onclick = function(e) {
    if (e.target === popup) {
      popup.style.display = "none";
    }
  }

