const form = document.querySelector("form");
const input = document.getElementById("searchInput");

// start of password protection
if (getPassword() == null) {
    openPage('home');
} else {
    openPage('password');
    document.getElementById('sidebar').style.display = 'none';
}

function getPassword() {
    if(localStorage.getItem('password') == null) localStorage.setItem('password', "5294");
    return localStorage.getItem('password') || null;
}

function setPassword() {
    const $password = document.getElementById('password-set');
    const password = $password.value;
    if (password == null || password == '') {
        alert('Removed password');
        localStorage.removeItem('password');
        return;
    }
    if (confirm("Are you sure you want to password protect this page? If you do, you will not be able to access this page without the password. If you do not want to password protect this page, click cancel.") == true) {
        localStorage.setItem('password', password);
    }
}

function checkPassword() {
    const $password = document.getElementById('password-prompt');
    const password = $password.value;
    if (password == getPassword()) {
        openPage('home');
        document.getElementById('sidebar').style.display = 'flex';
    } else {
        window.location.href = getSearchEngineURL();
    }
}

function togglePassword() {
    var x = document.getElementById("passwordToggle");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

// end of password protection

form.addEventListener("submit", async (event) => {
    event.preventDefault();
    let url = input.value.trim();
    openURL(url);
  });
  
function isUrl(val = "") {
    if (
