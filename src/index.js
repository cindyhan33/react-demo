const React = window.React;
const ReactDOM = window.ReactDOM;

let n = 0;
const App = () =>
  React.createElement("div", null, [
    n,
    React.createElement(
      "button",
      {
        onClick: () => {
          n += 1;
          console.log(n);
          ReactDOM.render(App(), document.querySelector("#root"));
        },
      },
      "+1"
    ),
  ]);

ReactDOM.render(App(), document.querySelector("#root"));
