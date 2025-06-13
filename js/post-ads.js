const step1 = document.getElementById('step1');
  const step2 = document.getElementById('step2');
  const nextButton = document.getElementById('nextButton');
  const backButton = document.getElementById('backButton');
  const submitButton = document.getElementById('submitButton');

  const titleInput = document.getElementById('title');
  const descriptionInput = document.getElementById('description');
  const priceInput = document.getElementById('price');
  const contactNameInput = document.getElementById('contactName');
  const contactEmailInput = document.getElementById('contactEmail');
  const contactPhoneInput = document.getElementById('contactPhone');
  const imageInput = document.getElementById('image');
  const imagePreviewContainer = document.getElementById('imagePreviewContainer');
  const imageError = document.getElementById('imageError');
  const promotionPlanInputs = document.querySelectorAll('input[name="promotionPlan"]');

  function validateStep1() {
    const valid = (
      titleInput.value.trim() &&
      descriptionInput.value.trim() &&
      priceInput.value.trim() &&
      contactNameInput.value.trim() &&
      contactEmailInput.value.trim() &&
      contactPhoneInput.value.trim() &&
      imageInput.files.length >= 4
    );

    nextButton.disabled = !valid;
  }

  [titleInput, descriptionInput, priceInput, contactNameInput, contactEmailInput, contactPhoneInput].forEach(input => {
    input.addEventListener('input', validateStep1);
  });

  imageInput.addEventListener('change', () => {
    const files = Array.from(imageInput.files);
    imagePreviewContainer.innerHTML = '';
    imageError.textContent = '';

    if (files.length < 4) {
      imageError.textContent = 'Please select at least 4 images.';
      nextButton.disabled = true;
      return;
    }

    files.forEach(file => {
      if (!file.type.startsWith('image/')) return;

      const img = document.createElement('img');
      img.classList.add('image-preview');
      img.style.marginBottom = '10px';
      img.style.maxWidth = '100%';
      img.style.maxHeight = '150px';

      const reader = new FileReader();
      reader.onload = e => {
        img.src = e.target.result;
      };
      reader.readAsDataURL(file);

      imagePreviewContainer.appendChild(img);
    });

    validateStep1();
  });

  nextButton.addEventListener('click', () => {
    step1.classList.remove('active');
    step2.classList.add('active');
    submitButton.disabled = true;
  });

  backButton.addEventListener('click', () => {
    step2.classList.remove('active');
    step1.classList.add('active');
  });

  promotionPlanInputs.forEach(input => {
    input.addEventListener('change', () => {
      document.querySelectorAll('.plan').forEach(planLabel => {
        planLabel.classList.remove('selected');
      });
      const selectedLabel = input.closest('label.plan');
      if (selectedLabel) {
        selectedLabel.classList.add('selected');
      }
      submitButton.disabled = false;
    });
  });

  document.getElementById('adForm').addEventListener('submit', e => {
    e.preventDefault();

    if (imageInput.files.length < 4) {
      imageError.textContent = 'Please select at least 4 images before submitting.';
      return;
    }

    const formData = {
      title: titleInput.value.trim(),
      description: descriptionInput.value.trim(),
      price: parseFloat(priceInput.value),
      contactName: contactNameInput.value.trim(),
      contactEmail: contactEmailInput.value.trim(),
      contactPhone: contactPhoneInput.value.trim(),
      promotionPlan: document.querySelector('input[name="promotionPlan"]:checked').value,
      images: Array.from(imageInput.files).map(file => file.name)
    };

    console.log('Ad Data Submitted:', formData);
    alert('Your ad has been posted successfully!');

    e.target.reset();
    imagePreviewContainer.innerHTML = '';
    imageError.textContent = '';
    submitButton.disabled = true;
    nextButton.disabled = true;
    step2.classList.remove('active');
    step1.classList.add('active');
    document.querySelectorAll('.plan').forEach(planLabel => {
      planLabel.classList.remove('selected');
    });
  });
