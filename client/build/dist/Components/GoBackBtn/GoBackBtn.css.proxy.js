// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".goBack__btn {\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  margin: 30px;\n  padding: 15px;\n  border-radius: 25px;\n  background-color: red;\n  color: white;\n  border: none;\n  font-weight: bold;\n  cursor: pointer;\n  transition: 0.2s ease transform;\n}\n.goBack__btn:hover {\n  transform: scale(1.07);\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}