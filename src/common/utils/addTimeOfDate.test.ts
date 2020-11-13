import addTimesOfDate from "./addTimesOfDate";
import dayjs from "dayjs";
import trains from "../config/trains";
import computeDuration from "./computeDuration";
import { Train } from "../interface/entity";

test("add time", () => {
  const a = {
    endStationCode: "SHH",
    remainTicketCount: 0,
    dTimeStr: "202002102005",
    sort: 12,
    time: "11时38分",
    isPreOrder: false,
    extra: "{}",
    trainShowDescColor: -14964294,
    dStation: "北京",
    date: "2020-11-16",
    remainTicket: "0张",
    priceMsg: "¥148.5",
    dptStationCode: "BJP",
    trainType: "空调特快",
    timeInMinute: 698,
    dStationInfo: true,
    trainStatus: 4,
    dTime: "20:05",
    startStationCode: "BJP",
    isSupportCandidate: false,
    dCity: "北京",
    aStationInfo: false,
    tagCode: -1,
    trainShowDesc: "可抢票",
    robSuccRate: "",
    distance: "1629",
    action: {
      menuBackColor: -16728876,
      menuColor: -1,
      clickable: false,
      touchUrl:
        "http://touch.qunar.com/h5/train/flagship/TrainOrderFillRob?startStation=%E5%8C%97%E4%BA%AC&endStation=%E5%8D%97%E4%BA%AC&trainNum=T109&date=2020-11-16&closeUrl=&source=mtrain_rob&bd_source=&seatType=%E7%A1%AC%E5%BA%A7",
      menu: "抢票",
      topDesc: "0张",
      topDescBackColor: 0,
      topDescColor: -52480,
      id: 2,
    },
    trainStatusDes: "已售空",
    appointment: false,
    ticketInfos: [
      {
        type: "硬座",
        paperAccept: 0,
        defaultSeatCheckStatus: 0,
        typeColor: -1,
        wxSaleStatus: 0,
        isUncheckable: 0,
        ticketId: "1",
        price: "148.5",
        countColor: -1,
        studentPrice: "75",
        tagColor: -1,
        count: 0,
      },
      {
        type: "硬卧",
        paperAccept: 0,
        defaultSeatCheckStatus: 0,
        typeColor: -1,
        wxSaleStatus: 0,
        isUncheckable: 0,
        ticketId: "5",
        price: "272.5",
        countColor: -1,
        studentPrice: "199",
        tagColor: -1,
        count: 0,
      },
      {
        type: "软卧",
        paperAccept: 0,
        defaultSeatCheckStatus: 0,
        typeColor: -1,
        wxSaleStatus: 0,
        isUncheckable: 0,
        ticketId: "8",
        price: "415.5",
        countColor: -1,
        studentPrice: "415.5",
        tagColor: -1,
        count: 0,
      },
      {
        type: "高级软卧",
        paperAccept: 0,
        defaultSeatCheckStatus: 0,
        typeColor: -1,
        wxSaleStatus: 0,
        isUncheckable: 0,
        ticketId: "10",
        price: "765.5",
        countColor: -1,
        studentPrice: "765.5",
        tagColor: -1,
        count: 0,
      },
      {
        type: "无座",
        paperAccept: 0,
        defaultSeatCheckStatus: 0,
        typeColor: -1,
        wxSaleStatus: 0,
        isUncheckable: 0,
        ticketId: "0",
        price: "148.5",
        countColor: -1,
        studentPrice: "75",
        tagColor: -1,
        count: 0,
      },
    ],
    isSupportCard: false,
    remainTicketColor: -39424,
    aStation: "南京",
    tagStyleType: 0,
    noTicketSceneOptimise: false,
    aCity: "南京",
    aTimeStr: "202002110743",
    remainTicketType: 0,
    aTime: "07:43",
    dayAfter: "+1",
    tagColor: -1,
    trainNumber: "T109",
    arrStationCode: "NJH",
    sortGroup: 0,
    remainTicketBackgroundColor: 0,
  };

  const date = addTimesOfDate(a.date, a.aTime, a.dayAfter.slice(1));
  expect(dayjs(date).format("YYYY-MM-DD HH:mm")).toBe("2020-11-17 07:43");
  expect(new Date(date).getTime()).toBe(new Date("2020-11-17 07:43").getTime());
});

test("sort", function () {
  (trains as Train[]).sort((a, b) => {
    return computeDuration(a) - computeDuration(b);
  });
  console.log(trains);
});
