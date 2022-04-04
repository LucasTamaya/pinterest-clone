// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".createPost__prompt {\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  margin: 30px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: red;\n  width: fit-content;\n  padding: 15px;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: 0.2s ease transform;\n}\n.createPost__prompt:hover {\n  transform: scale(1.1);\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}