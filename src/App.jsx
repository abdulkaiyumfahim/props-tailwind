import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1 className="bg-green-400 text-blue-100 p-4 rounded-xl mb-4">
        Tailwind Test-Case
      </h1>
      <Card username="kaiyum"></Card>
      <Card></Card>
    </>
  );
}

export default App;
