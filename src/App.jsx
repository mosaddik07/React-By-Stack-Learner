// font awosome icon
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fas, fab);
//css
import "./assets/css/style.css";
import "milligram";
//module import file
import StateLifting from "./component/State Lifting/StateLifting";
const App = () => {
  return (
    <div>
      <StateLifting />
    </div>
  );
};

export default App;
