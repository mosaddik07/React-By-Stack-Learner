// font awosome icon
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fas, fab);
//css
import "./assets/css/style.css";
import "milligram";
//module import file
import AppHook from "./component/hooks/AppHook";
import AnotherExample from "./component/hooks/AnotherExample";
const App = () => {
  return (
    <div>
      {/* <AppHook /> */}
      <AnotherExample />
    </div>
  );
};

export default App;
