import { createSlice } from "@reduxjs/toolkit";

const initState = {
  time: 601,
  finalAnswers: [],
  answers: [],
  Questions: [
    {
      number: 1,
      Question: "What is 9 + 10?",
      type: "MCQ",
      choices: ["1", "2", "3", "4", " 5"],
      answer: 1,
    },
    { number: 2, Question: "123", type: "T or F", answer: "T" },
    {
      number: 3,
      Question: "If a tree falls and nobody hears it, did it actually fall?",
      type: "Writing",
      answer: "yo",
    },
    {
      type: "Comprehension",
      number: 4,
      prompt:
        "(A) Scientists have known for a long time that vitamin D is essential for humans. If children have a vitamin D or calcium deficiency, they can develop rickets, a softening of the bones. New studies are showing that people of all ages need vitamin D to help them fight off diseases by keeping their immune systems strong.",
      ComprehensionQs: [
        "The main idea of this paragraph is that vitamin D.",
        "If something is essential, it is ………… .",
        "When you have a deficiency of something, you ………….	.",
      ],
      ComprehensionChoices: [
        [
          "is found in milk",
          "has been studied by scientists",
          "is no secret",
          "is important for good health",
        ],
        ["harmful", "expensive", "dreadful", "needed"],
        [
          "have all you need",
          "do not have enough",
          "look like an onion",
          "are rich",
        ],
      ],
      ComprehensionAs: [4, 4, 2],
    },
  ],
};

function minSec() {
  const time = new Date();
  const hour = time.getHours();
  const min = time.getMinutes();
  const sec = time.getSeconds();
  const milSec = time.getMilliseconds();
  return hour * 60 * 60 + min * 60 + sec + milSec / 1000;
}

const CounterReducer = createSlice({
  name: "counterTime",
  initialState: initState,
  reducers: {
    getTime(state) {
      const time = minSec();
      const elapsed = Math.floor(time - state.startTime);
      state.startTime = minSec();
      state.time = state.time - elapsed;
    },
    startTime(state) {
      state.startTime = minSec();
    },
    setFinalAnswers(state, { payload }) {
      if (payload.flag) {
        let res = state.finalAnswers;
        if (res[payload.index] !== undefined) {
          res[payload.index] = payload.val;
          state.finalAnswers = [...state.finalAnswers];
          return;
        }
      }
      state.finalAnswers = [...state.finalAnswers, payload.val];
    },
    setAnswers(state, { payload }) {
      if (payload.flag) {
        let res = state.answers;
        for (let elem of res) {
          if (elem.index === payload.index) {
            elem.val = payload.val;
            state.answers = res;
            return;
          }
        }
        res.push({ index: payload.index, val: payload.val });
        state.answers = res;
      } else {
        state.answers = [];
      }
    },
    reset(state) {
      state.time = 601;
      // state.finalAnswers=[]
      // state.answers = []
    },
  },
});
export const CounterActions = CounterReducer.actions;
export default CounterReducer.reducer;
