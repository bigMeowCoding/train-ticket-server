import dayjs from "dayjs";

export default function (
  date: string,
  times: string,
  dayAfter: string
): number {
  const [hour, minute] = times.split(":");
  let dDate = dayjs(date);
  if(dayAfter) {
     dDate =  dDate.add(parseInt(dayAfter),'d');
  }
  if (hour) {
    dDate = dDate.add(parseInt(hour), "h");
  }
  if (minute) {
    dDate = dDate.add(parseInt(minute), "m");
  }
  return dDate.valueOf();
}
