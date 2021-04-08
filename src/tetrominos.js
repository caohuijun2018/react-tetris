//定义所有出现的termiominos、

const TETROMINOS = {
  0: { shape: [[0]], color: "0,0,0" },

  I: {
    shape: [
      [0, "I", 0, 0],
      [0, "I", 0, 0],
      [0, "I", 0, 0],
      [0, "I", 0, 0],
    ],
    color: "80,223,230",
  },
  J: {
    shape: [
      [0, "J", 0],
      [0, "J", 0],
      ["J", "J", 0],
    ],
    color: "80,223,230",
  },
  L: {
    shape: [
      [0, "L", 0],
      [0, "L", 0],
      [0, "L", "L"],
    ],
    color: "223,173,36",
  },
  O: {
    shape: [
      ["O", "O"],
      ["O", "O"],
    ],
    color: "223,173,36",
  },
  S: {
    shape: [
      [0, "S", "S"],
      ["S", "S", 0],
      [0, 0, 0],
    ],
    color: "48,211,56",
  },
  T: {
    shape: [
      [0, 0, 0],
      ["T", "T", "T"],
      [0, "T", 0],
    ],
    color: "132,61,198",
  },
  Z: {
    shape: [
      ["Z", "Z", 0],
      [0, "Z", "Z"],
      [0, 0, 0],
    ],
    color: "223,78,78",
  },
};
const randomTetromions = () => {
  const tetrominos = "IJLOSTZ";
  const randTetromions =
    tetrominos[Math.floor(Math.random() * tetrominos.length)]; //随机选择tetormions

  return TETROMINOS[randTetromions]; //返回随机选择的tetromions的样式
};
export default { TETROMINOS, randomTetromions };
