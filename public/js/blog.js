const commentButtonHandler = (event) => {
  document.location.replace("/comment");
};

document
  .querySelector(".comment-button")
  .addEventListener("click", commentButtonHandler);
