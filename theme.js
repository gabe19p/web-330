// ============================================
// Title: Assignment 1.3
// Author: Danial Purselley
// Date: 29 May 2022
// Modified By: Danial Purselley
// Description: The is the javascript function
// to set the default color theme for my
// github landing page.
// ============================================

function setDefaultTheme() {
  const theme = localStorage.getItem("mode") || "light-theme";
  const iconMode = localStorage.getItem("iconMode") || "fa-toggle-off";
  const iconText = localStorage.getItem("iconText") || "Light Mode";

  document.body.classList = theme;
  document.getElementById("icon-mode").classList.add(iconMode);
  document.getElementById("icon-text").innerHTML = iconText;
}

function setSelectedTheme() {
  document.body.classList.value = localStorage.getItem("mode") || "light-theme";
}
