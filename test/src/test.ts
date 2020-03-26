import { deserialize, serialize } from "./../../app/src/josmSerializer"


// TODO: Array type

let schema = {
  student: {
    subject: "subject",
    name: "String",
    bestFriend: "student"
  },
  subject: {
    colors: "color[]",
    name: "String",
    students: "student[]"
  },
  color: {
    r: "Number",
    g: "Number",
    b: "Number"
  }
}


let red = {
  r: 255,
  g: 0,
  b: 0
}

let blue = {
  r: 0,
  g: 0,
  b: 255
}

let deutsch = {
  name: "Deutsch",
  colors: [red, blue]
}

let mark = {
  name: "Mark",
  subject: deutsch
}

let max = {
  name: "Maximilian",
  subject: deutsch,
  bestFriend: mark
}

deutsch["students"] = [mark, max]


mark["bestFriend"] = mark

let ser = serialize({
  student: [
    max,
    mark
  ],
  subject: [
    deutsch
  ],
  color: [
    red,
    blue
  ]

}, schema)

let send = JSON.stringify(ser)

console.log(send)


let got = JSON.parse(send)

let uns = deserialize(got, schema)

console.log(uns)


