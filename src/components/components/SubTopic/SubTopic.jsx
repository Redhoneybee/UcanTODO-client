import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import { SubTopicBar, SubTopicContent } from "./StyledSubTopic";
import PropTypes from "prop-types";
import { HiPencilAlt, HiOutlineX } from "react-icons/hi";

// utils
import { getTimeInfo } from "../../utils/useDate";
import {
  saveToLocalStorage,
  loadToLocalStorage,
} from "../../utils/useLocalStorage";
// types
import {
  STRING,
  MAXSUBTOPICS,
  SUBTOPICSINFO,
  EMPTY_LOCALSTORAGE,
} from "../../types";

const countToSubTopics = (subTopics) => {
  return subTopics.length;
};

const SubTopic = ({ callback }) => {
  // subTopics is empty and isn't empty
  const isEmptySubTopics = () => {
    // console.log(subTopics);
    if (countToSubTopics(subTopics) === 0) return true;
    return false;
  };
  const isFullSubTopics = () => {
    if (countToSubTopics(subTopics) === MAXSUBTOPICS) return true;
    return false;
  };

  const [subTopics, setSubTopics] = useState([]);
  const topicRef = useRef([]);
  const topicCount = useMemo(() => countToSubTopics(subTopics), [subTopics]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (!isEmptySubTopics()) {
      subTopics
        .filter((topic) => !topic.desc)
        .map((topic) => topicRef.current[topic.id - 1].focus());
    }

    if (loading === false) {
      const loadDatas = loadToLocalStorage(SUBTOPICSINFO);
      if (typeof loadDatas === STRING && loadDatas === EMPTY_LOCALSTORAGE) {
        // falid load data
        setSubTopics([]);
      } else {
        setSubTopics(loadDatas);
      }
      setLoading(true);
    }
    saveToLocalStorage(SUBTOPICSINFO, subTopics);
  }, [subTopics]);

  //   create the subTopic
  const createEmptySubTopic = useCallback(
    (e) => {
      if (isFullSubTopics()) {
        return;
      }
      const lastContentID = countToSubTopics(subTopics);

      const _id = lastContentID + 1;
      const topic = {
        id: _id,
        desc: "",
        fixed: true,
        checked: false,
      };

      setSubTopics(subTopics.concat(topic));
      topicRef.current = new Array(topicRef.current.concat(_id));
    },
    [subTopics]
  );

  //  if fixed is true and desc, desc of localStorage are empty value
  //  empty desc is erase
  //  if desc is empty and desc of localStorage is no empty
  //  localStorage data is use
  const createSubTopic = useCallback(
    (e) => {
      const time = getTimeInfo();
      const _desc = e.target.value;
      const _id = Number(e.target.id);
      let _topics = Array.from(subTopics);
      let deleteID = -1;
      const loadDatas = loadToLocalStorage(SUBTOPICSINFO);
      const selectLoadTopic = loadDatas.filter((data) => data.id === _id)[0];
      //   console.log("select data", selectLoadTopic);
      _topics
        .filter((topic) => topic.id === _id)
        .map((topic) => {
          if (topic.fixed === true && !_desc && !selectLoadTopic.desc) {
            deleteID = topic.id;
          } else if (topic.fixed === true && _desc) {
            topic.desc = _desc;
            topic.fixed = false;
            topic.time = time;
            topic.checked = false;
          } else if (topic.fixed === true && !_desc && selectLoadTopic.desc) {
            topic.desc = selectLoadTopic.desc;
            topic.fixed = false;
            topic.time = time;
            topic.checked = selectLoadTopic.checked;
          }
        });
      if (deleteID !== -1) {
        _topics.splice(deleteID - 1, 1);
      }

      //   console.log(_topics);
      setSubTopics(_topics);
    },
    [subTopics]
  );
  //  update the sub topic
  const updateSubTopic = useCallback(
    (e) => {
      const btnBox = e.target.parentNode;
      const _id = Number(btnBox.parentNode.id);
      const _topics = Array.from(subTopics);

      _topics.map((topic) => {
        if (topic.id === _id) {
          topic.fixed = true;
        }
      });

      setSubTopics(_topics);
    },
    [subTopics]
  );

  const deleteSubTopic = useCallback(
    (e) => {
      const btnBox = e.target.parentNode;
      const _id = Number(btnBox.parentNode.id);
      const _topics = Array.from(subTopics);

      _topics.splice(_id - 1, 1);

      _topics.map((topic, i) => {
        topic.id = i + 1;
      });

      setSubTopics(_topics);
    },
    [subTopics]
  );

  const selectSubTopic = (e) => {
    const content = e.target.parentNode;
    const _id = Number(content.id);

    callback(_id);
  };
  return (
    <SubTopicBar className="box">
      {!isEmptySubTopics() &&
        subTopics.map((topic) => {
          if (topic.fixed) {
            return (
              <SubTopicContent key={topic.id}>
                <textarea
                  ref={(e) => (topicRef.current[topic.id - 1] = e)}
                  id={topic.id}
                  className="addSubTopicBar"
                  onBlur={createSubTopic}
                  placeholder="what you sub topic?"
                ></textarea>
              </SubTopicContent>
            );
          } else if (topic.desc) {
            return (
              <SubTopicContent key={topic.id} id={topic.id}>
                <div className="btn-box">
                  <HiPencilAlt className="btn" onClick={updateSubTopic} />
                  <HiOutlineX className="btn" onClick={deleteSubTopic} />
                </div>
                <div className="topic" onClick={selectSubTopic}>
                  {topic.desc}
                </div>
                {/* <div className="coverBackgroundOfNoChecked" /> */}
                {/* <HiOutlineCheck className="checkedCoverofNoChecked" /> */}
              </SubTopicContent>
            );
          }
        })}
      <SubTopicContent>
        <div
          className="add-btn"
          onClick={createEmptySubTopic}
        >{`${topicCount}/${MAXSUBTOPICS}`}</div>
      </SubTopicContent>
    </SubTopicBar>
  );
};

SubTopic.propTypes = {
  callback: PropTypes.func,
};

export default SubTopic;
