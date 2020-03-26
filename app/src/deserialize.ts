

//https://nodejs.org/api/vm.html#vm_vm_runinthiscontext_code_options

import { GenericSerializedDataStore, SchemaSerialize } from "./util"







export function deserialize<DataStore extends GenericSerializedDataStore, ClassName extends keyof DataStore, PropName extends keyof DataStore[ClassName], PropVal extends DataStore[ClassName][PropName][number]>(store: DataStore, schema: SchemaSerialize<DataStore, ClassName, PropName, PropVal>) {
  let data = parse(store, schema)


  let classNames = Object.keys(schema)

  for (let className in data) {
    for (let entry of data[className]) {
      for (let prop in entry) {
        let type = schema[className][prop]
        let isOfTypeArray = type.endsWith("[]")
        if (isOfTypeArray) type = type.substr(0, type.length - 2)
        if (classNames.includes(type)) {
          if (isOfTypeArray) {
            
  
            for (let i = 0; i < entry[prop].length; i++) {
              entry[prop][i] = data[type][entry[prop][i]]
            }
  
          }
          else {
            entry[prop] = data[type][entry[prop]]
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
    let ar = res[className] = []
    let length = input[className][Object.keys(input[className]).first].length
    for (let i = 0; i < length; i++) {
      ar.add({})
    }

    for (let propName in input[className]) {
      for (let i = 0; i < ar.length; i++) {
        ar[i][propName] = input[className][propName][i]
      }
    }
  }
  
  return res
}
