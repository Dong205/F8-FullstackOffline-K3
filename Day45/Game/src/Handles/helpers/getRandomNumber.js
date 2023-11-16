import { RANGE_NUMBER } from "../Config/Config";

function getRandomNumber() {
  return Math.floor(Math.random() * RANGE_NUMBER - 1) + 1;
}
export default getRandomNumber;