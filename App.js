
// const heading = document.createElement('h1');
// heading.innerHTML = "Hello Javascript";
// const root = document.getElementById("root");
// root.appendChild(heading);

const heading = React.createElement("h1", { id: "heading", datacustom: "test"}, "Hello world by React");
const root = ReactDOM.createRoot(document.getElementById('root')).render(heading);
