// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ":root {\n  font-size: 10px;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  text-decoration: none;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\nbody {\n  background-color: #f6f6f6;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\", monospace;\n}\n\n.post__image {\n  width: 140px;\n  height: 140px;\n  background-position: center;\n  background-size: cover;\n  border-radius: 15px;\n  transition: 0.2s ease box-shadow;\n}\n.post__image:hover {\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n}\n@media screen and (min-width: 640px) {\n  .post__image {\n    width: 180px;\n    height: 180px;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .post__image {\n    width: 220px;\n    height: 220px;\n  }\n}\n\n.allPosts__container {\n  display: flex;\n  justify-content: center;\n  row-gap: 20px;\n  column-gap: 20px;\n  flex-wrap: wrap;\n  width: 100%;\n  height: fit-content;\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 20px;\n}\n\n.allPosts__item {\n  width: fit-content;\n  cursor: pointer;\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}