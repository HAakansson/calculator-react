import Display from "../components/Display";
// import style from "../css/Calculator.module.css";
import ButtonsContainer from "./ButtonsContainer";
import { calculator } from "../css/Calculator.module.css";

function Calculator() {
  return (
    <div className={calculator}>
      <Display />
      <ButtonsContainer />
    </div>
  );
}

export default Calculator;
