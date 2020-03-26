# Josm serializer

Searializer and deserializer for josm. Serialize and deserialize pass by reference JSON constructs as shown in the example below.


## Example

Define a schema

```ts
import { deserialize, serialize } from "josm-serializer"


let schema = {

  Student: {
    name: "string",
    favColor: "Color"
  },

  Color: {
    r: "Number",
    g: "Number",
    b: "Number"
  }

}
```

Populate data in schema fashion and serialize it.

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
