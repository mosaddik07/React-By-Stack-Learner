// font awosome icon
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fas, fab);
//css
import "./assets/css/style.css";
import "milligram";
//module import file
import SimpleApp from "./component/Number Oparetion/SimpleApp";
const App = () => {
  return (
    <div>
      <SimpleApp />
    </div>
  );
};

export default App;
