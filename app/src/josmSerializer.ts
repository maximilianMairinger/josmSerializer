type Primitive = number | string | boolean | null
import Xrray from "xrray"
Xrray(Array)

type JSONObject = {[key: string]: any} | Primitive[]



export function serialize(input: JSON | JSONObject) {

}


export function deserialize(inp: JSON | JSONObject) {
  let o = parse(inp)

  


  return o
}

function parse(inp: JSON | JSONObject) {
  let input = typeof inp === "string" ? JSON.parse(inp) : inp as JSONObject
  let res = {}

  for (let className in input) {
    let ar = res[className] = []
    let length = input[className][Object.keys(input[className]).first].length
    for (let i = 0; i < length; i++) {
      ar.add({})
    }

    for (let propName in input[className]) {
      for (let i in ar) {
        ar[i][propName] = input[className][propName][i]
      }
    }
  }
  
  return res
}

