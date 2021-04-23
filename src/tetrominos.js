//定义所有出现的termiominos、

export  const TETROMINOS = {
  0: { shape: [[0]], color: "0,0,0" },

  I: {
    shape: [
      [0, "I", 0, 0],
      [0, "I", 0, 0],
      [0, "I", 0, 0],
      [0, "I", 0, 0],
    ],
    color: "	0, 191, 255",
  },
  J: {
    shape: [
      [0, "J", 0],
      [0, "J", 0],
      ["J", "J", 0],
    ],
    color: "255, 191, 134",
  },
  L: {
    shape: [
      [0, "L", 0],
      [0, "L", 0],
      [0, "L", "L"],
    ],
    color: "144, 238, 144",
  },
  O: {
    shape: [
      ["O", "O"],
      ["O", "O"],
    ],
    color: "147, 112, 219",
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
    color: "255, 193, 193",
  },
  Z: {
    shape: [
      ["Z", "Z", 0],
      [0, "Z", "Z"],
      [0, 0, 0],
    ],
    color: "255, 128, 0",
  },
};
 export const randomTetromions = () => {
  const tetrominos = "IJLOSTZ";
  const randTetromions =
    tetrominos[Math.floor(Math.random() * tetrominos.length)]; //随机选择tetormions

  return TETROMINOS[randTetromions]; //返回随机选择的tetromions的样式
};

