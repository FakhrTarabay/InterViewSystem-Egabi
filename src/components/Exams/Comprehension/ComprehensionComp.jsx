import React from "react";
import Selector from "../../UI/Selector";
import Comp from "../Comprehension/Comp.module.css"
const ComprehensionComp = ({
  setComprehension,
  ComprehensionQs,
  setSelectedQ,
  selectedQ,
  setQuestion,
  Question,
  setNumChoices,
  numChoices,
  createChoices,
  Comprehension
}) => {
  return (
    <>
      <input
        required
        className={`${Comp.input} ${Comp.formElement}`}
        placeholder="Set comprehension prompt"
        onChange={(e) => setComprehension(e.target.value)}
        value={Comprehension}
        type="text"
      ></input>
      <Selector
        className={`${Comp.input} ${Comp.formElement}`}
        style={{ margin: "0px" }}
        items={ComprehensionQs}
        setValue={setSelectedQ}
        value={selectedQ}
        label="Question:"
        help="Pick Question"
        required={false}
      />
      <label className={Comp.formElement}>Question</label>
      <input
        required
        className={`${Comp.input} ${Comp.formElement}`}
        placeholder="Set Question"
        onChange={(e) => setQuestion(e.target.value)}
        value={Question}
        pattern="[a-zA-Z]{1,}"
        type="text"
      ></input>
      <label className={Comp.formElement}>Number of choices</label>
      <input
        required
        className={`${Comp.input} ${Comp.formElement}`}
        placeholder="Set number of choices"
        onChange={(e) => setNumChoices(e.target.value)}
        value={numChoices}
        pattern="[0-9]{2}"
        type="number"
        min="0"
        max="99"
      ></input>
      {createChoices().map((element) => element)}
    </>
  );
};

export default ComprehensionComp;
