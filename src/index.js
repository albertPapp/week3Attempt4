import "./styles.css";

const tableBody = document.getElementById("tbody");

const submitButton = document.getElementById("submit-data");
submitButton.addEventListener("click", function () {
  let username = document.getElementById("input-username").value;
  let email = document.getElementById("input-email").value;
  let address = document.getElementById("input-address").value;
  let img = document.getElementById("input-image");
  //let admin = document.getElementById("input-admin").value
  if (username && document.querySelector(`#${username}`) !== null) {
    let toBeRemoved = document.querySelector(`#${username}`);
    tableBody.removeChild(toBeRemoved);
  }

  let usernameTd = document.createElement("td");
  usernameTd.innerText = username;

  let emailTd = document.createElement("td");
  emailTd.innerText = email;
  let addressTd = document.createElement("td");
  addressTd.innerText = address;
  let adminTd = document.createElement("td");
  if (document.getElementById("input-admin").checked) {
    adminTd.innerText = "X";
  } else {
    adminTd.innerText = "-";
  }
  let imageTd = document.createElement("td");
  if (img !== null) {
    let imgCreate = document.createElement("img");
    imgCreate.src = URL.createObjectURL(img.files[0]);
    imgCreate.height = 64;
    imgCreate.width = 64;
    imgCreate.onload = () => {
      URL.revokeObjectURL(imgCreate.src);
    };
    imageTd.appendChild(imgCreate);
  }

  let newInput = document.createElement("tr");
  newInput.appendChild(usernameTd);
  newInput.appendChild(emailTd);
  newInput.appendChild(addressTd);
  newInput.appendChild(adminTd);
  newInput.appendChild(imageTd);
  newInput.setAttribute("id", username);
  tableBody.appendChild(newInput);
});
const removeButton = document.getElementById("empty-table");
removeButton.addEventListener("click", function () {
  tableBody.innerHTML = "";
});

let query = document.querySelectorAll("#a");
console.log(query);
