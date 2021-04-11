import "./styles.css";

export default function App() {
  var headerText = "Sample Header";
  var color = "#C8C8C8";
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <h3>Let me do this!</h3>
      <h3>{headerText}</h3>
      <a href="https://github.com" style={{ backgroundColor: color }}>
        Click Me
      </a>
    </div>
  );
}
