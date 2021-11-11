export const getShortDateString = (dateValue) => {
  return new Date(dateValue).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

export const getCalendarDateString = (dateValue) => {
  const date = new Date(dateValue);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");

  return `${year}-${month}-${day}`;
};

export const getDateRangeString = (dateObj, format) => {
  const { startDate, endDate } = dateObj;
  const dateFormats = {
    short: {
      single: getShortDateString(startDate),
      range: `${getShortDateString(startDate)} - ${getShortDateString(
        endDate
      )}`,
    },
    calendar: {
      single: getCalendarDateString(startDate),
      range: `${getCalendarDateString(startDate)},${getCalendarDateString(
        endDate
      )}`,
    },
  };

  if (Date.parse(startDate) === Date.parse(endDate)) {
    return dateFormats[format].single;
  }

  return dateFormats[format].range;
};

export const getDefaultDateRange = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const lastDay = new Date(year, month, 0).getDate();

  return {
    startDate: `${year}-${month}-01`,
    endDate: `${year}-${month}-${lastDay}`,
  };
};

export const getRequestDateRange = (slug) => {
  const [start, end] = slug.split(",");

  const startDate = start;
  const endDate = end ? end : startDate;

  return {
    startDate,
    endDate,
  };
};
