import "./App.css";
import Customer from "./component/customer";

function App() {
  return (
    <div className="gray-background">
      <Customer name={"Sangkun"} age={23} gender={"male"} career={"GnB"} />
    </div>
  );
}

export default App;
