// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".header__container {\n  width: 100%;\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 20px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 2px solid red;\n  margin-bottom: 7px;\n}\n\n.nav__container {\n  display: flex;\n  column-gap: 15px;\n}\n.nav__container .nav__link {\n  color: red;\n  font-weight: bold;\n  font-size: 2rem;\n}\n\n.header__profile {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: red;\n  border: 2px solid red;\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n  font-weight: bold;\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}