// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".welcomePage__container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  padding: 30px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  row-gap: 15px;\n}\n\n.welcomePage__title {\n  font-size: 2.8rem;\n  text-align: center;\n}\n\n.welcomePage__btnContainer {\n  width: 220px;\n  display: flex;\n  column-gap: 15px;\n}\n\n.welcomePage__loginBtn {\n  flex: 1;\n  padding: 10px;\n  border-radius: 15px;\n  border: 2px solid red;\n  background-color: white;\n  color: red;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: bold;\n}\n\n.welcomePage__registerBtn {\n  flex: 1;\n  padding: 10px;\n  border-radius: 15px;\n  border: 2px solid red;\n  background-color: red;\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: bold;\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}