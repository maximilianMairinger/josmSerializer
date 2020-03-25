import { deserialize, serialize } from "./../../app/src/josmSerializer"

let me = {
  students: {
    name: [
      "Max",
      "Daniel"
    ],
    subject: [
      1,
      1
    ]
  },
  subjects: {
    color: [
      1
    ],
    students: [
      [1, 2]
    ],
    name: [
      "MEDt"
    ]
  },
  colors: {
    r: [
      255
    ],
    g: [
      255
    ],
    b: [
      255
    ]
  }
}


console.log(deserialize(me))
