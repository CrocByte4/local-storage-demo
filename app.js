// function to set the theme of our website
function setTheme() {
  //change the theme from dark to light and vice versa depending on what it is currently set to
  // this should happen when I click the button

  if (
    localStorage.getItem("theme") === "light" ||
    localStorage.getItem("theme") === "null"
  ) {
    localStorage.setItem("theme", "dark");
    document.body.classList.add("dark");
  } else {
    localStorage.setItem("theme", "light");
    document.body.classList.remove("dark");
  }
}

//function to get the current theme of our website
const themeButton = document.getElementById("theme-button");
themeButton.addEventListener("click", setTheme);

function getTheme() {
  //when you load the page check the theme and make sure the colour of the page is correct
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
  }
}
getTheme();
// localStorage.setItem(Key, value)
// creates or updates a key: value pair in localStorage

// localStorage.getItem(key)
// retrieves the value of the item with the key passed into the parameter

// localStorage.removeItem(key)
// deletes the value of the item with the key passed into the parameter

//localStorage.
