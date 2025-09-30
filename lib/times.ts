export const openHour = Number(process.env.NEXT_PUBLIC_OPEN);
export const closeHour = Number(process.env.NEXT_PUBLIC_CLOSE);

const twoZeros = (no: number) => {
  let result = String(no);

  while (result.length < 2) result = "0" + result;

  return result;
};

const hourStr = (hour: number) =>
  `${Math.floor(hour)}h${twoZeros(Math.floor((hour - Math.floor(hour)) * 60))}`;

const hourStr_ = (hour: number) => {
  const minutes = Math.floor((hour - Math.floor(hour)) * 60);
  return `${Math.floor(hour)}h${minutes ? twoZeros(minutes) : ""}`;
};

export const openStr = hourStr(openHour);
export const closeStr = hourStr(closeHour);

export const openStr_ = hourStr_(openHour);
export const closeStr_ = hourStr_(closeHour);
