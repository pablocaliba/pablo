export const buildUrlEncoded = (data) => {
  const dataSend = new URLSearchParams();
  Object.keys(data).map((input) => {
    dataSend.append(input, data[input]);
    return null;
  });
  return dataSend;
};