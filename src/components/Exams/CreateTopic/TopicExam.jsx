import React from "react";
import CreateTopic from "./CreateTopic";
import CreateExam from "../CreateExam/CreateExam";
import TE from "./TopicExam.module.css";
const TopicExam = () => {
  return (
    <div className="create">
      <div className={TE.wPadding}>
        <CreateTopic />
      </div>
      <div className={TE.woPadding}>
        <CreateExam />
      </div>
    </div>
  );
};

export default TopicExam;
