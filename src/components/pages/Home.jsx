import React, { useState, useEffect } from "react";

import Modal from "../components/Modal/Modal";

import MainView from "../components/MainView/MainView";
import MainTopic from "../components/MainTopic/MainTopic";
import SubTopic from "../components/SubTopic/SubTopic";
import { getTodayInfo } from "../utils/useDate";
import {
  saveToLocalStorage,
  loadToLocalStorage,
  removeToLocalStorage,
} from "../utils/useLocalStorage";
import {
  NUMBER,
  STRING,
  MAINTOPICINFO,
  SUBTOPICSINFO,
  EMPTY_LOCALSTORAGE,
  NO_SELECT_SUBTOPIC,
} from "../types";

const Home = () => {
  const initializedTopic = {
    today: {},
    desc: "",
  };
  const [mainTopic, setMainTopic] = useState(initializedTopic);
  const [subTopicId, setSubTopicId] = useState(NO_SELECT_SUBTOPIC);
  const [loading, setLoading] = useState(false);
  // mainTopic is empty and isn't empty
  const isEmptyMainTopic = () => {
    if (!mainTopic.desc) return true;
    return false;
  };

  const isValidMainTopic = (_topic) => {
    if (_topic.today === undefined || _topic.desc === undefined) {
      return false;
    } else if (
      typeof _topic.today.year !== NUMBER ||
      typeof _topic.today.month !== NUMBER ||
      typeof _topic.today.date !== NUMBER ||
      typeof _topic.desc !== STRING
    ) {
      return false;
    }
    return true;
  };
  const isValidDate = (_topic) => {
    const todayInfo = getTodayInfo();
    if (
      _topic.today.year !== todayInfo.year ||
      _topic.today.month !== todayInfo.month ||
      _topic.today.date !== todayInfo.date
    ) {
      return true;
    }
    return false;
  };

  const initTopics = () => {
    removeToLocalStorage(MAINTOPICINFO);
    removeToLocalStorage(SUBTOPICSINFO);
  };

  useEffect(() => {
    if (!isEmptyMainTopic()) {
      saveToLocalStorage(MAINTOPICINFO, mainTopic);
    }
    if (loading === false) {
      const _topic = loadToLocalStorage(MAINTOPICINFO);
      if (typeof _topic !== STRING && _topic !== EMPTY_LOCALSTORAGE) {
        if (isValidMainTopic(_topic)) {
          if (isValidDate(_topic)) {
            // before date
            initTopics();
          } else {
            setMainTopic(_topic);
          }
        }
      }
    }
    setLoading(true);
  }, [mainTopic]);

  const createMainTopic = (desc) => {
    const todayInfo = getTodayInfo();

    const _topic = {
      today: {
        year: todayInfo.year,
        month: todayInfo.month,
        date: todayInfo.date,
      },
      desc: desc,
    };
    setMainTopic(_topic);
    console.log("hi");
  };

  const showDetailSubTopic = (_subTopicId) => {
    setSubTopicId(_subTopicId);
  };
  return (
    <MainView>
      {!isEmptyMainTopic() && (
        <Modal subTopicId={subTopicId} callback={showDetailSubTopic}></Modal>
      )}
      <MainTopic
        isEmptyMainTopic={isEmptyMainTopic}
        callback={createMainTopic}
        mainTopic={mainTopic.desc}
      ></MainTopic>
      {!isEmptyMainTopic() && (
        <SubTopic callback={showDetailSubTopic}></SubTopic>
      )}
    </MainView>
  );
};
export default Home;
