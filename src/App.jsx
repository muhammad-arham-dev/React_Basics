import ExpensiveCalc from "./components/ExpensiveCalc";
import ParentChild from "./components/ParentChild";
import FunctionProp from "./components/FunctionProp";
import ItemList from "./components/ItemList";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import PropDrillingExample from "./pages/PropDrillingExample";
import RenderTracker from "./components/RenderTracker";

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial", background: "#f0f0f0", minHeight: "100vh"}}>
      <h1>React Advanced Tasks</h1>

      <ExpensiveCalc />
      <ParentChild />
      <FunctionProp />
      <PropDrillingExample />

      <Header />
      <Sidebar />
      <Content />

      <ItemList />
      <RenderTracker />
    </div>
  );
}

export default App;