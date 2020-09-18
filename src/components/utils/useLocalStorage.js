import { EMPTY_LOCALSTORAGE } from "../types";
import PropTypes from "prop-types";

export const saveToLocalStorage = (saveType, items) => {
  localStorage.setItem(saveType, JSON.stringify(items));
};

export const loadToLocalStorage = (loadType) => {
  const items = localStorage.getItem(loadType);
  if (items === null) return EMPTY_LOCALSTORAGE;

  const changeItems = JSON.parse(items);
  return changeItems;
};

export const removeToLocalStorage = (removeType) => {
  localStorage.removeItem(removeType);
};

saveToLocalStorage.propTypes = {
  saveType: PropTypes.string,
  items: PropTypes.array,
};

loadToLocalStorage.propTypes = {
  loadType: PropTypes.string,
};

removeToLocalStorage.propTypes = {
  removeType: PropTypes.string,
};
