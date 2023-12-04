import moment from "moment";

export function stringToDateFormat(value) {
  return moment(value, "DD/MM/YYYY").toDate();
}

export function dateFormatToString(value) {
  return moment(value).format("DD/MM/YYYY");
}
