// font awosome icon
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fas, fab);
//css
import "./assets/css/style.css";
import "milligram";
import Form from "./component/input-group/Form";
//module import file
const App = () => {
  return (
    <div>
      <Form />
    </div>
  );
};

export default App;
