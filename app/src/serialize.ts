import { GenericJosmDataStore, SchemaJsom } from "./util";


export function serialize<DataStore extends GenericJosmDataStore, ClassName extends keyof DataStore, PropName extends keyof DataStore[ClassName][number], PropVal extends DataStore[ClassName][number][PropName]>(store: DataStore, schema: SchemaJsom<DataStore, ClassName, PropName, PropVal>) {
  let data = parse(store, schema)

  let classNames = Object.keys(schema)

  for (let className in data) {
    for (let propName in data[className]) {
      let type = schema[className][propName] as string
      let isOfTypeArray = type.endsWith("[]")
      if (isOfTypeArray) type = type.substr(0, type.length - 2)
      if (classNames.includes(type)) {
        for (let j = 0; j < data[className][propName].length; j++) {
          if (!isOfTypeArray) {
            const elem = data[className][propName][j];

            for (let i = 0; i < store[type].length; i++) {
  
              if (store[type][i] === elem) {
                data[className][propName][j] = i
              }
            }
          }
          else {
            for (let a = 0; a < data[className][propName][j].length; a++) {
              const elem = data[className][propName][j][a];

              for (let i = 0; i < store[type].length; i++) {
  
                if (store[type][i] === elem) {
                  data[className][propName][j][a] = i
                }
              }
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

    for (let entry of input[className]) {
      for (let propName of propNames) {
        res[className][propName].add(entry[propName])
      }
    }
    
    
  }
  
  return res
}
