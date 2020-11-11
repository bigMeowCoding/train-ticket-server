import express from "express";
import * as fs from "fs";

const app = express();
app.get("/", (req, res) => {
  res.send("hello express");
  res.end();
});
app.get("/api/getCities", (req, res) => {
  fs.readFile("./res/cities.json", "utf8", (err, data) => {
    if (err) {
      res.send(err);
      return;
    }
    res.json({
      code: 0,
      data: JSON.parse(data),
    });
  });
});
app.get("/api/query", (req, res) => {
  fs.readFile("./res/query.json", "utf8", (err, result) => {
    if (err) {
      res.send(err);
      return;
    }
    const data = JSON.parse(result);
    data.dataMap.directTrainInfo.trains = data.dataMap.directTrainInfo.trains.reverse();
    res.json({
      code: 0,
      data: data,
    });
  });
});
app.get("/api/search", (req, res) => {
  // @ts-ignore
  const { key } = req.query;
  return res.json({
    result: [
      {
        key: "芜湖",
        display: "芜湖",
      },
      {
        key: "井冈山",
        display: "井冈山",
      },
      {
        key: "铁岭",
        display: "铁岭",
      },
    ],
    searchKey: key,
  });
});
app.listen(8080);
