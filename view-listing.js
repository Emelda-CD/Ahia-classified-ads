const listings = [
    {
      title: "Graphic Designer Needed",
      category: "jobs",
      image: "assets/images/job1.jpg",
      price: "$300",
      description: "Looking for a freelance graphic designer."
    },
    {
      title: "2-Bedroom Apartment",
      category: "rentals",
      image: "assets/images/apartment1.jpg",
      price: "$1,200/mo",
      description: "Spacious apartment downtown."
    }
  ];
  
  const container = document.getElementById("listingContainer");
  
  function renderListings(list) {
    container.innerHTML = "";
    list.forEach(item => {
      const listingEl = document.createElement("div");
      listingEl.classList.add("listing");
      listingEl.innerHTML = `
        <img src="${item.image}" alt="${item.title}">
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <strong>${item.price}</strong>
      `;
      container.appendChild(listingEl);
    });
  }
  
  renderListings(listings);
  