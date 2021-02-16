import Display from "../components/Display";
// import style from "../css/Calculator.module.css";
import { calculator } from "../css/Calculator.module.css";

function Calculator () {
  return (
    <div className={calculator}>
      <Display />
      <h1>This is the ButtonsContainer component</h1>
    </div>
  )
}

export default Calculator;