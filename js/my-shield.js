function themeChange(x) {
  x.classList.toggle("fa-moon");
}

const insuranceList = document.querySelector(".insurances");
const loggedOutLinks = document.querySelectorAll(".logged-out");
const loggedInLinks = document.querySelectorAll(".logged-in");
const accountDetails = document.querySelector(".account-details");

const setupUI = (user) => {
  if (user) {
    const html = `
      <div>You're registered to our E-service via:</div>
      <div>${user.email}</div>
    `;
    accountDetails.innerHTML = html;

    loggedInLinks.forEach((item) => (item.style.display = "block"));
    loggedOutLinks.forEach((item) => (item.style.display = "none"));
  } else {
    accountDetails.innerHTML = "";
    loggedInLinks.forEach((item) => (item.style.display = "none"));
    loggedOutLinks.forEach((item) => (item.style.display = "block"));
  }
};

const setupInsurances = (data) => {
  if (data.length) {
    let html = "";
    data.forEach((doc) => {
      const insurance = doc.data();
      const li = `
      <li>
        <div class="collapsible-header grey lighten-4"> <span class="material-symbols-outlined">
        person_pin
        </span> &nbsp; &#8220;${insurance.title}&#8221; </div>
        <div class="collapsible-body white"> ${insurance.content} </div>
      </li>
    `;
      html += li;
    });
    insuranceList.innerHTML = html;
  } else {
    insuranceList.innerHTML =
      '<h6 class="center-align">Your comments and suggestions make our Shield strong.</h6>';
  }
};

// setup materialize components
document.addEventListener("DOMContentLoaded", function () {
  var modals = document.querySelectorAll(".modal");
  M.Modal.init(modals);

  var items = document.querySelectorAll(".collapsible");
  M.Collapsible.init(items);
});
