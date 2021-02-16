import Display from "./Display";
import ButtonsContainer from "./ButtonsContainer";
// import style from "../css/Calculator.module.css";
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
