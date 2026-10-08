/* =========================================================
   KNOX PULSE TECH
   Main JavaScript
   ========================================================= */


/* =========================================================
   ELEMENTS
   ========================================================= */

const gateScreen = document.getElementById("gateScreen");
const authScreen = document.getElementById("authScreen");
const dashboardScreen = document.getElementById("dashboardScreen");

const enterSystemBtn = document.getElementById("enterSystemBtn");

const loginTab = document.getElementById("loginTab");
const signupTab = document.getElementById("signupTab");

const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

const authMessage = document.getElementById("authMessage");

const logoutBtn = document.getElementById("logoutBtn");

const operatorName = document.getElementById("operatorName");

const terminalForm = document.getElementById("terminalForm");
const terminalInput = document.getElementById("terminalInput");
const terminalOutput = document.getElementById("terminalOutput");

const browserInfo = document.getElementById("browserInfo");
const connectionInfo = document.getElementById("connectionInfo");

const binaryBg = document.getElementById("binaryBg");


/* =========================================================
   BINARY BACKGROUND
   ========================================================= */

function createBinaryBackground() {

  const lines = 45;

  for (let i = 0; i < lines; i++) {

    const line = document.createElement("div");

    line.className = "binary-line";

    line.style.top = `${i * 28}px`;

    line.style.animationDelay =
      `${Math.random() * -10}s`;

    let text = "";

    for (let j = 0; j < 10; j++) {

      text +=
        "0101" +
        Math.floor(Math.random() * 10) +
        "KNOX" +
        "0011" +
        " ACCESS DENIED    ";

    }

    line.textContent = text;

    binaryBg.appendChild(line);
  }
}


createBinaryBackground();


/* =========================================================
   SCREEN NAVIGATION
   ========================================================= */

enterSystemBtn.addEventListener("click", () => {

  gateScreen.classList.add("hidden");

  authScreen.classList.remove("hidden");

  window.scrollTo(0, 0);

});


/* =========================================================
   AUTH TABS
   ========================================================= */

loginTab.addEventListener("click", () => {

  loginTab.classList.add("active");

  signupTab.classList.remove("active");

  loginForm.classList.remove("hidden");

  signupForm.classList.add("hidden");

  clearAuthMessage();

});


signupTab.addEventListener("click", () => {

  signupTab.classList.add("active");

  loginTab.classList.remove("active");

  signupForm.classList.remove("hidden");

  loginForm.classList.add("hidden");

  clearAuthMessage();

});


/* =========================================================
   MESSAGE
   ========================================================= */

function showAuthMessage(message, type) {

  authMessage.textContent = message;

  authMessage.className =
    `auth-message ${type}`;
}


function clearAuthMessage() {

  authMessage.textContent = "";

  authMessage.className =
    "auth-message";
}


/* =========================================================
   DEMO ACCOUNT
   =========================================================
   This uses localStorage only.

   It is intentionally a front-end demo and should NOT be
   used for storing real passwords or production accounts.
   ========================================================= */

function getAccount() {

  try {

    return JSON.parse(
      localStorage.getItem("knoxPulseAccount")
    );

  } catch {

    return null;

  }

}


/* =========================================================
   SIGN UP
   ========================================================= */

signupForm.addEventListener("submit", (event) => {

  event.preventDefault();

  const username =
    document.getElementById("signupUsername")
      .value
      .trim();

  const password =
    document.getElementById("signupPassword")
      .value;

  const confirmPassword =
    document.getElementById("confirmPassword")
      .value;


  if (username.length < 3) {

    showAuthMessage(
      "ERROR: USERNAME MUST CONTAIN AT LEAST 3 CHARACTERS.",
      "error"
    );

    return;
  }


  if (password.length < 6) {

    showAuthMessage(
      "ERROR: PASSWORD MUST CONTAIN AT LEAST 6 CHARACTERS.",
      "error"
    );

    return;
  }


  if (password !== confirmPassword) {

    showAuthMessage(
      "ERROR: PASSWORDS DO NOT MATCH.",
      "error"
    );

    return;
  }


  const account = {
    username: username,
    password: password
  };


  localStorage.setItem(
    "knoxPulseAccount",
    JSON.stringify(account)
  );


  showAuthMessage(
    "ACCOUNT CREATED. YOU CAN NOW LOG IN.",
    "success"
  );


  signupForm.reset();


  setTimeout(() => {

    loginTab.click();

    document.getElementById(
      "loginUsername"
    ).value = username;

  }, 800);

});


/* =========================================================
   LOGIN
   ========================================================= */

loginForm.addEventListener("submit", (event) => {

  event.preventDefault();

  const username =
    document.getElementById("loginUsername")
      .value
      .trim();

  const password =
    document.getElementById("loginPassword")
      .value;


  const account = getAccount();


  if (!account) {

    showAuthMessage(
      "NO LOCAL ACCOUNT FOUND. PLEASE SIGN UP FIRST.",
      "error"
    );

    return;
  }


  if (
    username !== account.username ||
    password !== account.password
  ) {

    showAuthMessage(
      "ACCESS DENIED — INVALID LOGIN DETAILS.",
      "error"
    );

    return;
  }


  localStorage.setItem(
    "knoxPulseLoggedIn",
    "true"
  );


  localStorage.setItem(
    "knoxPulseOperator",
    account.username
  );


  loginForm.reset();

  showDashboard(account.username);

});


/* =========================================================
   SHOW DASHBOARD
   ========================================================= */

function showDashboard(username) {

  gateScreen.classList.add("hidden");

  authScreen.classList.add("hidden");

  dashboardScreen.classList.remove("hidden");

  operatorName.textContent =
    username.toUpperCase();

  updateSystemInfo();

  window.scrollTo(0, 0);

}


/* =========================================================
   LOGOUT
   ========================================================= */

logoutBtn.addEventListener("click", () => {

  localStorage.removeItem(
    "knoxPulseLoggedIn"
  );

  localStorage.removeItem(
    "knoxPulseOperator"
  );


  dashboardScreen.classList.add("hidden");

  authScreen.classList.remove("hidden");

  loginTab.click();

  showAuthMessage(
    "SESSION TERMINATED.",
    "success"
  );

});


/* =========================================================
   SYSTEM INFORMATION
   ========================================================= */

function updateSystemInfo() {

  const userAgent =
    navigator.userAgent.toLowerCase();


  if (userAgent.includes("chrome")) {

    browserInfo.textContent =
      "CHROME";

  } else if (userAgent.includes("firefox")) {

    browserInfo.textContent =
      "FIREFOX";

  } else if (userAgent.includes("safari")) {

    browserInfo.textContent =
      "SAFARI";

  } else {

    browserInfo.textContent =
      "WEB BROWSER";

  }


  if (navigator.onLine) {

    connectionInfo.textContent =
      "ONLINE";

  } else {

    connectionInfo.textContent =
      "OFFLINE";

  }

}


/* =========================================================
   TERMINAL
   ========================================================= */

terminalForm.addEventListener("submit", (event) => {

  event.preventDefault();

  const command =
    terminalInput.value
      .trim()
      .toLowerCase();


  if (!command) return;


  addTerminalLine(
    `> ${command}`,
    "user-command"
  );


  terminalInput.value = "";


  processCommand(command);

});


/* =========================================================
   TERMINAL COMMAND PROCESSOR
   ========================================================= */

function processCommand(command) {

  switch (command) {

    case "help":

      addTerminalLine(
        "Available demo commands:"
      );

      addTerminalLine(
        "status — display system status"
      );

      addTerminalLine(
        "time — display local time"
      );

      addTerminalLine(
        "about — display system information"
      );

      addTerminalLine(
        "clear — clear terminal"
      );

      break;


    case "status":

      addTerminalLine(
        "SYSTEM: ONLINE"
      );

      addTerminalLine(
        "SECURITY: HIGH"
      );

      addTerminalLine(
        "TERMINAL: READY"
      );

      break;


    case "time":

      addTerminalLine(
        new Date().toLocaleString()
      );

      break;


    case "about":

      addTerminalLine(
        "KNOX PULSE TECH — CYBER TERMINAL DEMO"
      );

      addTerminalLine(
        "Front-end simulation environment."
      );

      break;


    case "clear":

      terminalOutput.innerHTML = "";

      break;


    default:

      addTerminalLine(
        `UNKNOWN COMMAND: ${command}`,
        "terminal-error"
      );

      addTerminalLine(
        "Type 'help' for available demo commands."
      );

  }

}


/* =========================================================
   TERMINAL OUTPUT
   ========================================================= */

function addTerminalLine(
  text,
  className = ""
) {

  const line =
    document.createElement("div");

  line.textContent = text;

  if (className) {

    line.classList.add(className);

  }

  terminalOutput.appendChild(line);

  terminalOutput.scrollTop =
    terminalOutput.scrollHeight;

}


/* =========================================================
   AUTO LOGIN CHECK
   ========================================================= */

function checkSession() {

  const loggedIn =
    localStorage.getItem(
      "knoxPulseLoggedIn"
    );

  const username =
    localStorage.getItem(
      "knoxPulseOperator"
    );


  if (loggedIn === "true" && username) {

    showDashboard(username);

  }

}


checkSession();


/* =========================================================
   ONLINE / OFFLINE MONITOR
   ========================================================= */

window.addEventListener(
  "online",
  updateSystemInfo
);


window.addEventListener(
  "offline",
  updateSystemInfo
);
