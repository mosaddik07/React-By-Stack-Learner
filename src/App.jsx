// font awesome icon
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fas, fab);
//css
import "./assets/css/style.css";
// import "milligram";
//module import file
import StyleComponent from "./component/Styled Component/StyleComponent";
const App = () => {
  return (
    <div>
      <StyleComponent />
    </div>
  );
};

export default App;
