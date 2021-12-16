export const getShortDateString = (dateValue) => {
  return new Date(dateValue).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

const getFormattedDate = (dateValue) => {
  const date = new Date(dateValue);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");

  return `${year}-${month}-${day}`;
};

export const getCalendarDateRangeString = (dateObj) => {
  const { startDate, endDate } = dateObj;
  const start = getFormattedDate(startDate);
  const end = startDate === endDate ? start : getFormattedDate(endDate);

  return `${start},${end}`;
};

export const getCalendarShortString = (dateObj) => {
  const { startDate, endDate } = dateObj;

  if (Date.parse(startDate) === Date.parse(endDate)) {
    return getShortDateString(startDate);
  }

  return `${getShortDateString(startDate)} - ${getShortDateString(endDate)}`;
};

export const getDefaultDateRange = () => {
  const today = new Date();
  const startDate = getFormattedDate(today);
  const nextMonth = today.getMonth() + 1;
  const endDate = getFormattedDate(today.setMonth(nextMonth));

  return {
    startDate,
    endDate,
  };
};

export const getRequestDateRange = (slug) => {
  const [start, end] = slug.split(",");

  const startDate = start;
  const endDate = end || startDate;

  return {
    startDate,
    endDate,
  };
};
