/* =========================================================
   KNOX PULSE TECH
   Cyber Terminal Interface
   ========================================================= */

:root {
  --black: #000000;
  --dark: #020503;
  --panel: #031006;

  --green: #00ff55;
  --green-soft: #00cc44;
  --green-dark: #063d17;

  --red: #ff1838;
  --red-dark: #5c0714;

  --white: #eaffef;
  --gray: #6c8172;

  --border: rgba(0, 255, 85, 0.35);
  --glow: 0 0 20px rgba(0, 255, 85, 0.25);
}


/* =========================================================
   RESET
   ========================================================= */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


html {
  scroll-behavior: smooth;
}


body {
  min-height: 100vh;

  background:
    radial-gradient(
      circle at center,
      #031006 0%,
      #010301 45%,
      #000000 100%
    );

  color: var(--white);

  font-family:
    "Courier New",
    Courier,
    monospace;

  overflow-x: hidden;
}


button,
input {
  font: inherit;
}


button,
a {
  -webkit-tap-highlight-color: transparent;
}


/* =========================================================
   BINARY BACKGROUND
   ========================================================= */

.binary-bg {
  position: fixed;
  inset: 0;

  z-index: -5;

  overflow: hidden;

  opacity: 0.15;

  pointer-events: none;

  background:
    repeating-linear-gradient(
      0deg,
      transparent 0,
      transparent 27px,
      rgba(0, 255, 85, 0.04) 28px
    );
}


.binary-line {
  position: absolute;

  width: 100%;

  color: #06451b;

  font-size: 12px;

  white-space: nowrap;

  animation:
    binaryMove 10s linear infinite;
}


@keyframes binaryMove {

  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-20%);
  }

}


/* =========================================================
   SCANLINES
   ========================================================= */

.scanlines {
  position: fixed;

  inset: 0;

  z-index: 20;

  pointer-events: none;

  background:
    repeating-linear-gradient(
      to bottom,
      transparent 0,
      transparent 3px,
      rgba(0, 255, 85, 0.018) 4px
    );
}


/* =========================================================
   SCREENS
   ========================================================= */

.screen {
  min-height: 100vh;

  display: flex;

  align-items: center;
  justify-content: center;

  padding: 25px;

  position: relative;
}


.hidden {
  display: none !important;
}


/* =========================================================
   LOGO
   ========================================================= */

.logo {
  text-align: center;

  font-weight: 900;

  letter-spacing: 7px;

  font-size: clamp(22px, 6vw, 40px);

  text-shadow:
    0 0 7px rgba(0, 255, 85, 0.7),
    0 0 25px rgba(0, 255, 85, 0.3);
}


.logo-symbol {
  color: var(--green);

  margin-right: 12px;

  text-shadow:
    0 0 10px var(--green);
}


.green {
  color: var(--green);
}


.red {
  color: var(--red);

  text-shadow:
    0 0 10px rgba(255, 24, 56, 0.6);
}


.subtitle {
  margin-top: 12px;

  text-align: center;

  color: #397d4d;

  letter-spacing: 6px;

  font-size: 11px;
}


/* =========================================================
   GATE CARD
   ========================================================= */

.gate-card,
.auth-card {

  width: min(100%, 640px);

  padding: 45px 30px 35px;

  background:
    linear-gradient(
      145deg,
      rgba(0, 30, 9, 0.9),
      rgba(0, 8, 2, 0.96)
    );

  border: 1px solid rgba(0, 255, 85, 0.35);

  border-radius: 12px;

  box-shadow:
    0 0 15px rgba(0, 255, 85, 0.15),
    0 0 60px rgba(0, 255, 85, 0.08),
    inset 0 0 35px rgba(0, 255, 85, 0.025);

  position: relative;

  overflow: hidden;
}


.gate-card::before,
.auth-card::before {

  content: "";

  position: absolute;

  inset: 0;

  pointer-events: none;

  background:
    linear-gradient(
      90deg,
      transparent,
      rgba(0, 255, 85, 0.05),
      transparent
    );

  animation: cardScan 5s linear infinite;
}


@keyframes cardScan {

  0% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(100%);
  }

}


/* =========================================================
   WARNING
   ========================================================= */

.terminal-warning {

  margin-top: 40px;

  padding: 20px;

  border-left: 2px solid var(--red);

  background: rgba(255, 0, 30, 0.025);
}


.warning-title {

  color: var(--red);

  letter-spacing: 3px;

  font-weight: bold;

  font-size: 14px;
}


.terminal-warning p {

  margin-top: 12px;

  color: #738479;

  line-height: 1.8;

  font-size: 12px;

  letter-spacing: 1px;
}


/* =========================================================
   ACCESS BOX
   ========================================================= */

.access-box {

  margin-top: 25px;

  padding: 22px;

  border: 1px solid rgba(255, 24, 56, 0.35);

  background:
    rgba(40, 0, 5, 0.2);
}


.access-title {

  color: var(--red);

  letter-spacing: 3px;

  margin-bottom: 12px;
}


.access-box p {

  color: #6d786f;

  font-size: 12px;

  line-height: 1.9;

  letter-spacing: 1px;
}


/* =========================================================
   BUTTONS
   ========================================================= */

.cyber-btn {

  width: 100%;

  min-height: 62px;

  margin-top: 15px;

  display: flex;

  align-items: center;
  justify-content: center;

  gap: 14px;

  color: var(--white);

  text-decoration: none;

  background:
    linear-gradient(
      90deg,
      rgba(0, 255, 85, 0.08),
      rgba(0, 255, 85, 0.18)
    );

  border: 1px solid rgba(0, 255, 85, 0.55);

  border-radius: 7px;

  letter-spacing: 4px;

  font-weight: bold;

  cursor: pointer;

  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    background 0.2s ease;
}


.cyber-btn:hover {

  transform: translateY(-2px);

  background:
    rgba(0, 255, 85, 0.22);

  box-shadow:
    0 0 20px rgba(0, 255, 85, 0.3);
}


.cyber-btn:active {

  transform: scale(0.98);
}


.whatsapp {

  border-color: rgba(0, 255, 170, 0.55);

  background:
    linear-gradient(
      90deg,
      rgba(0, 255, 90, 0.12),
      rgba(0, 180, 170, 0.22)
    );
}


.enter-btn {

  color: var(--green);

  background: transparent;

  border-color: rgba(0, 255, 85, 0.4);

  box-shadow:
    inset 0 0 20px rgba(0, 255, 85, 0.03);
}


.divider {

  height: 1px;

  background:
    linear-gradient(
      90deg,
      transparent,
      rgba(0, 255, 85, 0.5),
      transparent
    );

  margin: 28px 0;
}


/* =========================================================
   COPYRIGHT
   ========================================================= */

.copyright {

  margin-top: 30px;

  text-align: center;

  color: #29402f;

  font-size: 10px;

  letter-spacing: 2px;

  line-height: 1.8;
}


/* =========================================================
   AUTH
   ========================================================= */

.auth-card {

  max-width: 650px;
}


.auth-tabs {

  display: flex;

  margin-top: 40px;

  border-bottom: 1px solid rgba(0, 255, 85, 0.2);
}


.auth-tab {

  flex: 1;

  padding: 18px 10px;

  border: none;

  background: transparent;

  color: #3b6048;

  cursor: pointer;

  letter-spacing: 4px;

  transition: 0.2s;
}


.auth-tab.active {

  color: var(--green);

  border-bottom: 3px solid var(--green);

  text-shadow:
    0 0 10px rgba(0, 255, 85, 0.5);
}


.auth-form {

  padding-top: 35px;
}


.auth-form label {

  display: block;

  margin: 20px 0 10px;

  color: #3c7650;

  letter-spacing: 3px;

  font-size: 12px;
}


.auth-form input {

  width: 100%;

  padding: 19px 22px;

  color: var(--white);

  background: rgba(0, 20, 5, 0.6);

  border: 1px solid rgba(0, 255, 85, 0.25);

  border-radius: 6px;

  outline: none;

  transition: 0.2s;
}


.auth-form input:focus {

  border-color: var(--green);

  box-shadow:
    0 0 15px rgba(0, 255, 85, 0.12);
}


.auth-form input::placeholder {

  color: #53615a;
}


.form-btn {

  width: 100%;

  margin-top: 28px;

  padding: 18px;

  background: transparent;

  color: var(--green);

  border: 1px solid var(--green-dark);

  border-radius: 6px;

  cursor: pointer;

  letter-spacing: 4px;

  transition: 0.2s;
}


.form-btn:hover {

  background: rgba(0, 255, 85, 0.08);

  box-shadow:
    0 0 20px rgba(0, 255, 85, 0.15);
}


.auth-message {

  min-height: 25px;

  margin-top: 18px;

  text-align: center;

  font-size: 12px;

  letter-spacing: 1px;
}


.auth-message.success {
  color: var(--green);
}


.auth-message.error {
  color: var(--red);
}


/* =========================================================
   DASHBOARD
   ========================================================= */

.dashboard {

  width: min(100%, 1000px);

  padding: 25px 0 50px;
}


.dashboard-header {

  display: flex;

  justify-content: space-between;

  align-items: center;

  gap: 20px;

  margin-bottom: 25px;
}


.small-label {

  color: #39704a;

  letter-spacing: 3px;

  font-size: 10px;
}


.dashboard h1 {

  margin-top: 8px;

  font-size: clamp(24px, 6vw, 42px);

  letter-spacing: 5px;
}


.dashboard h1 span {

  color: var(--green);

  text-shadow:
    0 0 15px rgba(0, 255, 85, 0.5);
}


.logout-btn {

  padding: 12px 18px;

  color: var(--red);

  background: transparent;

  border: 1px solid rgba(255, 24, 56, 0.4);

  border-radius: 5px;

  cursor: pointer;

  letter-spacing: 2px;
}


/* =========================================================
   OPERATOR
   ========================================================= */

.operator-card {

  display: flex;

  align-items: center;

  gap: 18px;

  padding: 22px;

  margin-bottom: 20px;

  border: 1px solid rgba(0, 255, 85, 0.25);

  background: rgba(0, 25, 7, 0.55);

  border-radius: 8px;
}


.operator-icon {

  width: 50px;
  height: 50px;

  display: grid;
  place-items: center;

  color: var(--green);

  border: 1px solid var(--green);

  box-shadow:
    0 0 15px rgba(0, 255, 85, 0.2);
}


.operator-card strong {

  display: block;

  margin-top: 5px;

  color: var(--white);

  letter-spacing: 2px;
}


.online-dot {

  margin-left: auto;

  width: 10px;
  height: 10px;

  border-radius: 50%;

  background: var(--green);

  box-shadow:
    0 0 15px var(--green);

  animation: pulse 1.5s infinite;
}


@keyframes pulse {

  50% {
    opacity: 0.35;
  }

}


/* =========================================================
   STATUS
   ========================================================= */

.status-grid {

  display: grid;

  grid-template-columns:
    repeat(3, 1fr);

  gap: 15px;

  margin-bottom: 20px;
}


.status-card {

  padding: 22px;

  border: 1px solid rgba(0, 255, 85, 0.2);

  background: rgba(0, 18, 5, 0.55);

  border-radius: 7px;
}


.status-card span {

  display: block;

  color: #386648;

  font-size: 10px;

  letter-spacing: 2px;
}


.status-card strong {

  display: block;

  color: var(--green);

  margin: 12px 0 5px;

  letter-spacing: 2px;
}


.status-card small {

  color: #52635a;
}


/* =========================================================
   PANELS
   ========================================================= */

.panel {

  margin-top: 20px;

  padding: 24px;

  border: 1px solid rgba(0, 255, 85, 0.2);

  background:
    rgba(0, 15, 4, 0.7);

  border-radius: 8px;
}


.panel-title {

  color: var(--green);

  letter-spacing: 3px;

  font-size: 13px;

  padding-bottom: 16px;

  margin-bottom: 16px;

  border-bottom:
    1px solid rgba(0, 255, 85, 0.1);
}


.panel-title span {

  margin-right: 8px;
}


.panel p {

  color: #68766d;

  font-size: 12px;

  line-height: 1.8;
}


/* =========================================================
   COMMUNITY
   ========================================================= */

.community-buttons {

  display: flex;

  gap: 12px;

  margin-top: 18px;
}


.mini-btn {

  flex: 1;

  padding: 15px;

  text-align: center;

  color: var(--green);

  text-decoration: none;

  border: 1px solid rgba(0, 255, 85, 0.25);

  border-radius: 5px;

  font-size: 11px;

  letter-spacing: 2px;

  transition: 0.2s;
}


.mini-btn:hover {

  background: rgba(0, 255, 85, 0.08);
}


/* =========================================================
   TERMINAL
   ========================================================= */

.terminal-output {

  min-height: 150px;

  max-height: 240px;

  overflow-y: auto;

  padding: 15px;

  color: #6d9b7a;

  background: #000500;

  border: 1px solid rgba(0, 255, 85, 0.12);

  font-size: 12px;

  line-height: 1.9;
}


.terminal-output .user-command {

  color: var(--green);
}


.terminal-output .terminal-error {

  color: var(--red);
}


.terminal-form {

  display: flex;

  align-items: center;

  gap: 10px;

  margin-top: 12px;

  color: var(--green);
}


.terminal-form input {

  flex: 1;

  padding: 13px;

  color: var(--green);

  background: #000600;

  border: none;

  outline: none;

  border-bottom:
    1px solid rgba(0, 255, 85, 0.25);
}


.terminal-form input::placeholder {

  color: #304c37;
}


/* =========================================================
   INFO
   ========================================================= */

.info-row {

  display: flex;

  justify-content: space-between;

  gap: 20px;

  padding: 15px 0;

  border-bottom:
    1px solid rgba(0, 255, 85, 0.08);

  color: #5e6e64;

  font-size: 12px;
}


.info-row:last-child {
  border-bottom: none;
}


.info-row strong {

  color: var(--green);

  letter-spacing: 1px;
}


/* =========================================================
   FOOTER
   ========================================================= */

footer {

  margin-top: 30px;

  text-align: center;

  color: #233a29;

  font-size: 10px;

  letter-spacing: 2px;

  line-height: 1.8;
}


/* =========================================================
   MOBILE
   ========================================================= */

@media (max-width: 650px) {

  .screen {
    padding: 15px;
  }


  .gate-card,
  .auth-card {

    padding: 32px 20px 25px;
  }


  .logo {

    font-size: 21px;

    letter-spacing: 4px;
  }


  .logo-symbol {

    margin-right: 5px;
  }


  .subtitle {

    font-size: 8px;

    letter-spacing: 3px;
  }


  .cyber-btn {

    font-size: 11px;

    letter-spacing: 2px;
  }


  .status-grid {

    grid-template-columns: 1fr;
  }


  .dashboard-header {

    align-items: flex-start;
  }


  .dashboard h1 {

    font-size: 25px;
  }


  .logout-btn {

    font-size: 10px;

    padding: 10px;
  }


  .community-buttons {

    flex-direction: column;
  }


  .operator-card {

    padding: 17px;
  }


  .panel {

    padding: 18px;
  }

}
