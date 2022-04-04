// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".savePostSuccess__container {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  margin: 30px;\n  padding: 15px;\n  border: 2px solid #228b22;\n  border-radius: 15px;\n  display: flex;\n  align-items: center;\n  column-gap: 5px;\n}\n\n.savePostSuccess__message {\n  color: #228b22;\n  font-weight: bold;\n  font-size: 1.5rem;\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}