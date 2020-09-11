import React, { useState, useEffect } from "react";

import MainView from "../components/MainView/MainView";
import MainTopic from "../components/MainTopic/MainTopic";

const getTodayInfo = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();

  return {
    year,
    month,
    date,
  };
};

const Home = () => {
  // topic
  const [mainTopicInfo, setMainTopicInfo] = useState({ topic: "" });

  const isEmptyMainTopic = () => {
    const l = mainTopicInfo.topic.length;

    if (l === 0) return true;
    return false;
  };

  useEffect(() => {
    const items = localStorage.getItem("mainTopicInfo");
    if (items) {
      const info = JSON.parse(items);

      const todayInfo = getTodayInfo();

      if (
        todayInfo.year !== info.today.year ||
        todayInfo.month !== info.today.month ||
        todayInfo.date !== info.today.date
      ) {
        // this time is different from localStorage time
        setMainTopicInfo({
          today: {},
          topic: "",
        });
        localStorage.removeItem("mainTopicInfo");
      } else {
        if (isEmptyMainTopic()) {
          setMainTopicInfo({
            today: {
              year: info.today.year,
              month: info.today.month,
              date: info.today.date,
            },
            topic: info.topic,
          });
        }
      }
    }
  }, []);

  useEffect(() => {
    if (!isEmptyMainTopic()) {
      localStorage.setItem("mainTopicInfo", JSON.stringify(mainTopicInfo));
    }
  }, [mainTopicInfo]);

  const isMainTopic = (maintopic) => {
    const todayInfo = getTodayInfo();

    setMainTopicInfo({
      today: {
        year: todayInfo.year,
        month: todayInfo.month,
        date: todayInfo.date,
      },
      topic: maintopic,
    });
  };

  return (
    <MainView>
      <MainTopic
        isEmptyMainTopic={isEmptyMainTopic}
        callback={isMainTopic}
        mainTopic={mainTopicInfo.topic}
      ></MainTopic>
    </MainView>
  );
};

export default Home;
