import { deserialize, serialize } from "./../../app/src/josmSerializer"


// TODO: Array type

let schema = {
  students: {
    subject: "subjects",
    name: "String"
  },
  subjects: {
    color: "colors",
    name: "String",
  },
  colors: {
    r: "Number",
    g: "Number",
    b: "Number"
  }
}


let deserialized = deserialize({
  students: {
    name: [
      "Max",
      "Daniel"
    ],
    subject: [
      0,
      0
    ]
  },
  subjects: {
    color: [
      0
    ],
    name: [
      "MEDT"
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
}, schema)


let serialized = serialize(deserialized, schema)


console.log(serialized)

