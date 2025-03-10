import React, { useState } from 'react';

export const BackNextBtn = ({ step, setStep, backFront, loneTeam, learnKnow }) => {
  const steps = [1, 2, 3];
  const answers = [backFront, loneTeam, learnKnow];
  const [noAnswerMsg, setNoAnswerMsg] = useState('none');
  const handleBtnClick = (backOrNext) => {
    if (backOrNext) {
      setStep(step + 1)
    } else if (!backOrNext) {
      setStep(step - 1);
    }
  };

  return (
    <>
      <p className="select-one-message" style={{ display: noAnswerMsg }}>Select one option to continue!</p>
      <div className="backnext-btn-container">
        <button
          className="back-btn"
          type="button"
          onClick={() => {
            handleBtnClick(false);
            setNoAnswerMsg('none');
          }}>Back
        </button>

        <button
          className="next-btn"
          type="button"
          onClick={() => {
            for (let i = 0; i < answers.length; i += 1) {
              if (step === steps[i] && answers[i]) {
                handleBtnClick(true);
                setNoAnswerMsg('none');
                break
              } else if (!answers[i]) {
                setNoAnswerMsg('block');
                break
              }
            }
          }}>
        Next
        </button>
      </div>
    </>
  );
};