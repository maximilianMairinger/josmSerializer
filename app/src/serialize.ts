import { GenericJosmDataStore, SchemaJsom } from "./util";


export function serialize<DataStore extends GenericJosmDataStore, ClassName extends keyof DataStore, PropName extends keyof DataStore[ClassName][number], PropVal extends DataStore[ClassName][number][PropName]>(store: DataStore, schema: SchemaJsom<DataStore, ClassName, PropName, PropVal>) {
  let data = parse(store, schema)

  let classNames = Object.keys(schema)

  for (let className in data) {
    for (let propName in data[className]) {
      for (let elem of data[className][propName]) {
        if (classNames.includes(elem)) {
          for (let i = 0; i < store[schema[className][propName]].length; i++) {

            if (store[schema[className][propName]][i] === elem) {
              data[className][propName].add(i)
            }
          }
        }
      }
    }
  }

  return data
}

function parse(input: any, schema: any) {
  let res = {} as any

  for (let className in input) {
    res[className] = {}
    
    let propNames = Object.keys(schema[className])
    for (let propName of propNames) {
      res[className][propName] = []
    }

    for (let entry of res[className]) {
      for (let propName of propNames) {
        res[className][propName].add(entry[propName])
      }
    }
    
    
  }
  
  return res
}
