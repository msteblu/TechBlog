const newButtonHandler = async (event) => {
  document.location.replace("/newpost");
};
document
  .querySelector(".new-post-btn")
  .addEventListener("click", newButtonHandler);
