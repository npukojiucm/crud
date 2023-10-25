import moment from "moment";

export const date = (created) => {
  const hour = 3600 * 1000;
  const day = hour * 24;
  const threeDay = day * 3;

  const timeDifference = Date.now() - created;

  const dateMinute = moment(created).startOf("minute").fromNow();
  const dateHour = moment(created).startOf("hour").fromNow();
  const dateDay = moment(created).startOf("day").fromNow();
  const dateMore = moment(created).format("LL");

  return timeDifference < hour
    ? dateMinute
    : timeDifference < day
    ? dateHour
    : timeDifference < threeDay
    ? dateDay
    : dateMore;
};
