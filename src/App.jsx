// font awosome icon
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fas, fab);
//css
import "./assets/css/style.css";
import "milligram";
//module import file
import Todo from "./component/ToDo App/Todo";
const App = () => {
  return (
    <div>
      <Todo />
    </div>
  );
};

export default App;
