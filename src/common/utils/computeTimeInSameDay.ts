export default (t1: string, t2: string): number => {
  let d = new Date();
  let ft1 = d.setHours(parseInt(t1.split(":")[0]), parseInt(t1.split(":")[1]));
  let ft2 = d.setHours(parseInt(t2.split(":")[0]), parseInt(t2.split(":")[1]));
  return ft1 - ft2;
};
