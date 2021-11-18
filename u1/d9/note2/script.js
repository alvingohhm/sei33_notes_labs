const validateForm = (e) => {
  e.preventDefault();
  const inputBox = document.querySelector("#input-box");
  if (inputBox.value.length === 0) {
    alert("input required");
  } else {
    window.location.replace("submitted.html");
  }
};

document.querySelector("#submit-btn").addEventListener("click", validateForm);

// keycode.info
