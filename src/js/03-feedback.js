import throttle from "lodash.throttle";

const formListener = document.querySelector(".feedback-form");

const userData = {};
dataFromlocalStorage();
formListener.addEventListener("input", throttle(formData, 500));
formListener.addEventListener("submit", onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();

  console.log(userData);

  evt.currentTarget.reset();
  localStorage.removeItem("feedback-form-state");
}

function formData(e) {
  userData[e.target.name] = e.target.value;
  localStorage.setItem("feedback-form-state", JSON.stringify(userData));
}

function dataFromlocalStorage() {
  const saveData = localStorage.getItem("feedback-form-state");

  if (saveData) {
    //      //  если да, сохранни поченные значения из локалстореджа
    //     console.log(saveMessage)
    const parseSave = JSON.parse(saveData);
    const keys = Object.keys(parseSave);

    for (const key of keys) {
      formListener.elements[key].value = parseSave[key];
      userData[key] = parseSave[key];
    }
  }
}
