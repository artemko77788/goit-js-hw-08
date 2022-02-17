import throttle from "lodash.throttle";

const formListener = document.querySelector(".feedback-form");

const userData = {};

const Storage_Key = "feedback-form-state";
dataFromlocalStorage();
formListener.addEventListener("input", throttle(formData, 500));
formListener.addEventListener("submit", onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();

  console.log(userData);

  evt.currentTarget.reset();
  localStorage.removeItem(Storage_Key);
}

function formData(e) {
  userData[e.target.name] = e.target.value;
  localStorage.setItem(Storage_Key, JSON.stringify(userData));
}

function dataFromlocalStorage() {
  const saveData = localStorage.getItem(Storage_Key);

  if (saveData) {
    const parseSave = JSON.parse(saveData);
    const keys = Object.keys(parseSave);

    for (const key of keys) {
      console.dir(formListener);
      formListener.elements[key].value = parseSave[key];
      userData[key] = parseSave[key];
    }
  }
}
