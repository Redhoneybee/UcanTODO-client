import React, { useState, useEffect } from "react";
import SubTopicModal from "react-modal";
import PropTypes from "prop-types";
import "./Modal.css";

import {
  STRING,
  SUBTOPIC_DETAIL,
  SUBTOPICSINFO,
  EMPTY_LOCALSTORAGE,
  NO_SELECT_SUBTOPIC,
} from "../../types";
import { SUBTOPIC_MODAL_STYLE } from "./StyledModal";
import { loadToLocalStorage } from "../../utils/useLocalStorage";

const preventMomentumScroll = (e) => {
  const { scrollTop, offsetHeight, scrollHeight } = e;
  if (scrollTop === 0) {
    e.scrollTo(0, 1);
    return true;
  }
  if (scrollTop + offsetHeight >= scrollHeight) {
    e.scrollTo(0, scrollHeight - offsetHeight - 1);
    return true;
  }
  return false;
};
SubTopicModal.setAppElement("#modal-root");
const Modal = ({ subTopicId, callback }) => {
  const [showModal, setShowModal] = useState(false);
  const [loadTopic, setLoadTopic] = useState("");
  useEffect(() => {
    setShowModal(subTopicId === NO_SELECT_SUBTOPIC ? false : true);
    if (subTopicId !== NO_SELECT_SUBTOPIC) {
      const items = loadToLocalStorage(SUBTOPICSINFO);
      //   console.log(items);
      if (typeof itmes === STRING && items === EMPTY_LOCALSTORAGE) {
        // wrong loaded...
        setLoadTopic(EMPTY_LOCALSTORAGE);
      } else {
        items
          .filter((item) => item.id === subTopicId)
          .map((topic) => setLoadTopic(topic.desc));
      }
    }
  }, [subTopicId]);

  return (
    <SubTopicModal
      isOpen={showModal}
      contentLabel={SUBTOPIC_DETAIL}
      shouldCloseOnOverlayClick={true}
      onRequestClose={() => callback(NO_SELECT_SUBTOPIC)}
      style={SUBTOPIC_MODAL_STYLE}
    >
      <div
        className="modal-body"
        onScroll={(e) => preventMomentumScroll(e.currentTarget)}
        onTouchMove={(e) => {
          if (!preventMomentumScroll(e.currentTarget)) {
            e.stopPropagation();
          }
        }}
      >
        {loadTopic}
      </div>
    </SubTopicModal>
  );
};

Modal.propTypes = {
  subTopicId: PropTypes.number,
  callback: PropTypes.func,
};

export default Modal;
