const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement(
      "h1",
      { id: "heading" },
      "Hello create child element using react js"
    ),
    React.createElement("h2", { id: "sibling" }, "this is h2 taggg"),
  ])
);

const heading2 = React.createElement("div", { id: "parent1" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "heading1"),
    React.createElement("h2", {}, "heading2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "heading2"),
    React.createElement("h2", {}, "heading4"),
  ]),
]);

console.log(parent);
const heading = React.createElement(
  "div",
  { id: "heading", syx: "abc" },
  "Namaste From the React"
);
// console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading2);
