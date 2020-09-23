import React, { useState, useMemo } from "react";
import PropTypes from "prop-types";
import {
  StyledMainTopicAnswerBar,
  StyledMainTopicAnswerBarContent,
  StyledMainTopicContainer,
  StyledMainTopicContent,
} from "./StyledMainTopic";
import { GrConfigure } from "react-icons/gr";

// import types
import { MAXTOPICLEN } from "../../types";
const countFontLength = (topic) => {
  return topic.length;
};

const MainTopic = ({ isEmptyMainTopic, callback, mainTopic }) => {
  const [state, setState] = useState({
    topic: "",
    disabled: true,
  });

  // init main topic
  const initMainTopic = (e) => {
    callback("");
  };

  const changeMainTopic = (e) => {
    const topic = e.target.value;
    // console.log(state.maintopic, state.disabled);
    const topicLen = countFontLength(topic);
    console.log(state);
    let _state = Array.from(state);
    if (topicLen > MAXTOPICLEN) {
      // topic len is limite
      _state.topic = state.topic;
      _state.disabled = true;
    } else if (topicLen >= 4) {
      _state.topic = topic;
      _state.disabled = false;
    } else {
      _state.topic = topic;
      _state.disabled = true;
    }

    setState(_state);
  };

  const createMainTopic = (e) => {
    // console.log(state.topic);
    if (state.topic) callback(state.topic);
  };
  const count = useMemo(() => countFontLength(state.topic), [state]);
  return (
    <div>
      {isEmptyMainTopic() && (
        <StyledMainTopicAnswerBar>
          <StyledMainTopicAnswerBarContent>
            <input
              type="text"
              placeholder="what's your focus in today ?"
              name="maintopic"
              onChange={changeMainTopic}
              value={state.topic}
            />
          </StyledMainTopicAnswerBarContent>
          <button
            disabled={state.disabled}
            className={state.disabled ? "buttonDisabled" : "buttonEnabled"}
            onClick={createMainTopic}
          >
            {count}
          </button>
        </StyledMainTopicAnswerBar>
      )}
      {!isEmptyMainTopic() && (
        <StyledMainTopicContainer onClick={initMainTopic}>
          <div className="mainTopic">
            <StyledMainTopicContent>{mainTopic}</StyledMainTopicContent>
            <div className="coverBackground" />
            <GrConfigure className="fixedCover" />
          </div>
        </StyledMainTopicContainer>
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
