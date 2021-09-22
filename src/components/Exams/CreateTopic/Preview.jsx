import React from "react";
import css from "./CreateTopic.module.css";
import RadioButtonsGroup from "../../UI/RadioGroup";
import TextFields from "../../UI/TextField";

const Preview = ({
  QuestionType,
  Comprehension,
  ComprehensionQs,
  ComprehensionChoices,
  ComprehensionAs,
  qAnswer,
  setQuestion,
  Question,
  Options,
  generateID,
}) => {
  return (
    <>
      <b>Question Preview</b>
      {QuestionType === "Comprehension" ? (
        <>
          <label className={css.element}>Comprehension prompt:</label>
          <b style={{ wordBreak: "break-word" }}>{Comprehension}</b>
          <label>Comprehension question/s:</label>
          {ComprehensionQs.map((q) => (
            <React.Fragment key={generateID()}>
              <p>{`${ComprehensionQs.indexOf(q) + 1} - ${q}`}</p>
              <RadioButtonsGroup
                className={css.element}
                label={"Choices"}
                options={ComprehensionChoices[ComprehensionQs.indexOf(q)]}
                disabled={true}
              />
              <p>{`Model Answer = ${
                ComprehensionAs[ComprehensionQs.indexOf(q)]
              }`}</p>
            </React.Fragment>
          ))}
        </>
      ) : (
        <>
          <label className={css.element}>Question:</label>
          <p style={{ wordBreak: "break-word" }}>{`A - ${Question}`}</p>
          {QuestionType === "MCQ" || QuestionType === "T or F" ? (
            <RadioButtonsGroup
              className={css.element}
              label={"Choices"}
              options={QuestionType === "T or F" ? ["T", "F"] : Options}
              disabled={true}
            />
          ) : (
            <TextFields
              disabled={true}
              setTxtFunc={setQuestion}
              multiline={true}
            />
          )}
          <p>{`Model Answer = ${qAnswer}`}</p>
        </>
      )}
    </>
  );
};

export default Preview;
