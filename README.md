# Josm serializer

Searializer and deserializer for josm. Serialize and deserialize pass by reference JSON constructs as shown in the example below.


## Example

Define a schema

```ts
import { deserialize, serialize } from "josm-serializer"


let schema = {

  student: {
    name: "string",
    favColor: "Color"
  },

  color: {
    r: "Number",
    g: "Number",
    b: "Number"
  }

}
```

Populate data in schema fashion and serialize it.

> Note that the case of the classes / tables (in this example student, color) must be the same as in the dataset

```ts
let color = {
  r: 255,
  g: 255,
  b: 255
}

let unserialized = {
  student: [
    {
      name: "Peter",
      favColor: color // pass by reference
    },
    {
      name: "Michael",
      favColor: color // pass by reference
    }
  ]
}


let serialized = serialize(unserialized, schema)

sendDataSomeWhere(JSON.stringify(serialized))
```

On your recieving end, deserialize

```ts
let serialized = JSON.parse(await getDataFromSomeWhere())

let unserialized = deserialize(serialized, schema)
```





## Contribute

All feedback is appreciated. Create a pull request or write an issue.
