// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".savedPosts__emptyData__title {\n  text-align: center;\n  font-size: 2.2rem;\n  color: red;\n}\n\n.savedPosts__container {\n  padding: 30px 0;\n}\n\n.savedPosts__title {\n  text-align: center;\n  font-size: 2.2rem;\n  color: red;\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}