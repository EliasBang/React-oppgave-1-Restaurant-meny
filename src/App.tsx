import "./App.css";
import "./cssModules/style.css";
import { menydata } from "./data/menydata";
import { Menu } from "./components/Menu";

function App() {
  return (
    <>
      <Menu menydata={menydata} />
    </>
  );
}

export default App;
