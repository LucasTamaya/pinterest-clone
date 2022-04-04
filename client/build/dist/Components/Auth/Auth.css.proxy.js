// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "body {\n  background-color: white;\n}\n\n.auth__title {\n  font-size: 3rem;\n  text-align: center;\n  width: 200px;\n  margin: 0 auto;\n}\n\n.auth__para {\n  font-size: 1.8rem;\n  margin-top: 5px;\n  text-align: center;\n}\n\n.auth__form {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  row-gap: 15px;\n  padding: 30px;\n}\n.auth__form .auth__input {\n  width: 100%;\n  max-width: 500px;\n  padding: 10px;\n  border-radius: 15px;\n  border: 2px solid #c5c4c4;\n  outline: none;\n}\n.auth__form .auth__btn {\n  width: 100%;\n  max-width: 500px;\n  padding: 10px;\n  border: none;\n  background-color: red;\n  border-radius: 15px;\n  color: white;\n  font-weight: bold;\n  cursor: pointer;\n  transition: 0.2s ease background-color;\n}\n.auth__form .auth__btn:hover {\n  background-color: rgb(221, 0, 0);\n}\n\n.auth__iconContainer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.auth__paraBottom {\n  font-size: 1.2rem;\n  color: #808080;\n}\n.auth__paraBottom span {\n  color: #3f3f3f;\n  font-weight: bold;\n  cursor: pointer;\n}\n\n.authLoader__container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}