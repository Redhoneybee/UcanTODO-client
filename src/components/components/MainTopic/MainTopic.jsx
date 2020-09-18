import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  StyledMainTopicAnswerBar,
  StyledMainTopicAnswerBarContent,
  StyledMainTopic,
  StyledMainTopicContent,
} from "./StyledMainTopic";

const MainTopic = ({ isEmptyMainTopic, callback, mainTopic }) => {
  const [state, setState] = useState({
    maintopic: "",
    disabled: true,
  });

  const handlerChange = (e) => {
    const { value } = e.target;
    // console.log(state.maintopic, state.disabled);
    setState((prev) => ({
      ...prev,
      maintopic: value,
    }));

    const valueLen = state.maintopic.length;
    if (valueLen >= 4) {
      setState((prev) => ({
        ...prev,
        disabled: false,
      }));
    } else {
      setState((prev) => ({
        ...prev,
        disabled: true,
      }));
    }
  };

  const handlerClick = (e) => {
    e.preventDefault();

    if (state.maintopic) callback(state.maintopic);
  };

  return (
    <div>
      {isEmptyMainTopic() && (
        <StyledMainTopicAnswerBar>
          <StyledMainTopicAnswerBarContent>
            <input
              type="text"
              placeholder="what's your focus in today ?"
              name="maintopic"
              onChange={handlerChange}
            />
          </StyledMainTopicAnswerBarContent>
          <button
            disabled={state.disabled}
            className={state.disabled ? "buttonDisabled" : "buttonEnabled"}
            onClick={handlerClick}
          ></button>
        </StyledMainTopicAnswerBar>
      )}
      {!isEmptyMainTopic() && (
        <StyledMainTopic>
          <StyledMainTopicContent>{mainTopic}</StyledMainTopicContent>
        </StyledMainTopic>
      )}
    </div>
  );
};

MainTopic.propTypes = {
  isEmptyMainTopic: PropTypes.func,
  callback: PropTypes.func,
  mainTopic: PropTypes.string,
};

export default MainTopic;
