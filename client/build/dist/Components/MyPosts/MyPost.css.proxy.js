// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".myPosts__emptyData__title {\n  text-align: center;\n  color: red;\n}\n\n.myPosts__emptyData__link {\n  width: 100%;\n  max-width: 500px;\n  padding: 10px;\n  border: none;\n  background-color: red;\n  border-radius: 15px;\n  color: white;\n  font-weight: bold;\n  cursor: pointer;\n  transition: 0.2s ease background-color;\n  text-align: center;\n}\n.myPosts__emptyData__link:hover {\n  background-color: rgb(221, 0, 0);\n}\n\n.myPosts__container {\n  padding: 30px;\n}\n\n.myPosts__title {\n  text-align: center;\n  color: red;\n  font-size: 2.2rem;\n}\n\n.myPosts__container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  row-gap: 15px;\n}\n\n.post {\n  border: 1px solid black;\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}