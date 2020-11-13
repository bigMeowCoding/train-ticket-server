import addTimesOfDate from "./addTimesOfDate";
import getDayAfter from "./getDayAfter";
import { Train } from "../interface/entity";

export default function (train: Train) {
  const aStartTime = new Date(train.date + " " + train.dTime).getTime();
  const aEndTime = addTimesOfDate(
    train.date,
    train.aTime,
    getDayAfter(train.dayAfter)
  );
  return aEndTime - aStartTime;
}
