// Define the categories
const categories = [
    { imgSrc: "./assets/images/categorys/Category-CellPhone.svg", title: "Phones" },
    { imgSrc: "./assets/images/categorys/Category-Computer.svg", title: "Computers" },
    { imgSrc: "./assets/images/categorys/Category-SmartWatch.svg", title: "SmartWatch" },
    { imgSrc: "./assets/images/categorys/Category-Camera.svg", title: "Camera" },
    { imgSrc: "./assets/images/categorys/Category-Headphone.svg", title: "HeadPhones" },
    { imgSrc: "./assets/images/categorys/Category-Gamepad.svg", title: "Gaming" }
  ];
  
  // Get the category section element
  const categorySection = document.getElementById("category_section");
  
  // Create the category boxes dynamically
  categories.forEach(category => {
    // Create the category box container
    const categoryBox = document.createElement("div");
    if (category.title === 'Camera') {
      categoryBox.classList.add("category_box");
      categoryBox.classList.add("active");
    } else {
      categoryBox.classList.add("category_box");
    }
  
    // Create the image element
    const img = document.createElement("img");
    img.src = category.imgSrc;
    img.classList.add("category_img");
    img.alt = "";
  
    // Create the title element
    const title = document.createElement("figcaption");
    title.classList.add("Regular_Title");
    title.textContent = category.title;
  
    // Append the image and title to the category box
    categoryBox.appendChild(img);
    categoryBox.appendChild(title);
  
    // Append the category box to the category section
    categorySection.appendChild(categoryBox);
  });