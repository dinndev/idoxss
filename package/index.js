const generateID = () => {
  const alphabetArray =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXWZ".split("");
  const numberArray = "1234567890".split("");
  let ID = [];
  for (let i in alphabetArray) {
    const random = Math.floor(Math.random() * i + 1);
    if (ID.length <= 5 && numberArray[i]) {
      ID.push(numberArray[random] + alphabetArray[random]);
    }
  }
  return `0x-${ID.join("-")}`;
};

export default generateID;
