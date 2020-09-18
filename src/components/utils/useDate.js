export const getTodayInfo = () => {
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

export const getTimeInfo = () => {
  const today = new Date();
  const hours = today.getHours();
  const minutes = today.getMinutes();

  return {
    hours,
    minutes,
  };
};
