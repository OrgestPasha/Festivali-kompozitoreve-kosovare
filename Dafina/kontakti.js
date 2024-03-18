//qitu ja nis kodi per qdo website qe kina me perdor
var screenWidth = window.innerWidth;
var albania = document.getElementById("albania");
var icon1 = document.getElementById("icon-foot1");
var icon2 = document.getElementById("icon-foot2");
var icon3 = document.getElementById("icon-foot3");
var icon4 = document.getElementById("icon-foot4");

function toggle() {
  var dropdown = document.getElementById("phone-dropdown");
  if (dropdown.classList.contains("show")) {
    dropdown.classList.remove("show");
    dropdown.classList.add("hidden");
  } else {
    dropdown.classList.remove("hidden");
    dropdown.classList.add("show");
  }
}

addEventListener("resize", function () {
  screenWidth = window.innerWidth;
  resize();
});

function resize() {
  if (screenWidth <= 768) {
    albania.innerHTML = "AL |";
    icon1.innerHTML = "";
    icon2.innerHTML = "";
    icon3.innerHTML = "";
    icon4.innerHTML = "";
  } else {
    albania.innerHTML = "AL";
  }
}

resize();
//qitu maron kodi per qdo website

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const EmriMbiemri = document.getElementById("EmriMbiemri");
  const email = document.getElementById("email");
  const number = document.getElementById("number");
  const pytja = document.getElementById("pytja");
  const message = document.getElementById("message");

  function sendEmail() {
    const bodyMessage = `Emri dhe Mbiemri: ${EmriMbiemri.value}<br> Email: ${email.value} <br> Numri Telefonit: ${number.value} <br> Pytja: ${pytja.value} <br> Mesazhi: ${message.value}`;

    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "lorikkerleshi04@gmail.com",
      Password: "D58BC7D4B8AADFC5DE1A2519C7B085DE3604",
      To: "lorikkerleshi04@gmail.com",
      From: "lorikkerleshi04@gmail.com",
      Subject: pytja.value,
      Body: bodyMessage,
    }).then((message) => {
      if (message === "OK") {
        Swal.fire({
          title: "Faleminderit",
          text: "Mesazhi u Pranua",
          icon: "success",
        });
      }
    });
  }

  function checkInputs() {
    const items = document.querySelectorAll(".item");
    let isValid = true;

    items.forEach((item) => {
      const errorText = item.nextElementSibling;

      if (item.value.trim() === "") {
        item.classList.add("error");
        errorText.style.display = "block";
        isValid = false;
      } else {
        item.classList.remove("error");
        errorText.style.display = "none";
      }
    });

    return isValid;
  }

  function checkEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const errorTextEmail = document.querySelector(".error-text-email");

    if (!email.value.match(emailRegex)) {
      email.classList.add("error");
      email.parentElement.classList.add("error");
      errorTextEmail.innerText = "Enter a valid email address";
    } else {
      email.classList.remove("error");
      email.parentElement.classList.remove("error");
      errorTextEmail.innerText = "";
    }
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (checkInputs()) {
      sendEmail();
      form.reset();
    }
  });

  email.addEventListener("keyup", checkEmail);
});

function checkInputs() {
  const items = document.querySelectorAll(".item");

  for (const item of items) {
    if (item.value == "") {
      item.classList.add("error");
      item.parentElement.classList.add("error");
    } else {
      item.classList.remove("error");
      item.parentElement.classList.remove("error");
    }
  }
}

function checkEmail() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const errorTextEmail = document.querySelector(".error-text-email");

  if (!email.value.match(emailRegex)) {
    email.classList.add("error");
    email.parentElement.classList.add("error");

    if (email.value != "") {
      errorTextEmail.innerText = "Enter a valid email address";
    } else {
      errorTextEmail.innerText = "Ju lutem plotësoni E-mail!";
    }
  } else {
    email.classList.remove("error");
    email.parentElement.classList.remove("error");
    errorTextEmail.innerText = "";
  }
}

items.forEach((item) => {
  item.addEventListener("input", () => {
    if (item.type === "email") {
      checkEmail();
    } else {
      checkInputs();
    }
  });
});
