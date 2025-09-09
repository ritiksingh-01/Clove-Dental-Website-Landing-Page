function toggleWhyChooseFeature(headerElement) {

  const item = headerElement.parentElement;
  item.classList.toggle("active");
  const icon = headerElement.querySelector(".material-symbols-outlined");
  console.log("Icon found:", icon); 

  if (item.classList.contains("active")) {
    icon.textContent = "remove";
  } else {
    icon.textContent = "add";
  }
}
