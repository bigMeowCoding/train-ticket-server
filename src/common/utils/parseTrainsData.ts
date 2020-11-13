import { ParseTrainOption, Train } from "../interface/entity";
import { TrainOrder } from "../interface/config";
import computeDuration from "./computeDuration";
import computeTimeInSameDay from "./computeTimeInSameDay";

export default function (trains: Train[], option: ParseTrainOption): Train[] {
  trains = trains.reverse();
  const { date, orderType } = option;

  if (date) {
    trains = trains.filter((train: any) => {
      return train.date === date;
    });
  }

  if (orderType) {
    if (orderType === TrainOrder.DURATION) {
      trains.sort((a, b) => {
        return computeDuration(a) - computeDuration(b);
      });
    } else if (orderType === TrainOrder.DEPART) {
      trains.sort((a, b) => {
        return computeTimeInSameDay(a.aTime, b.aTime);
      });
    }
  }

  return trains;
}
