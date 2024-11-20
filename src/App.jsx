// font awosome icon
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
//css
import "./assets/css/style.css";
import InputForm from "./component/JSON to JSX/InputForm";

library.add(fas, fab);
const App = () => {
  return (
    <div>
      <InputForm />
    </div>
  );
};

export default App;
