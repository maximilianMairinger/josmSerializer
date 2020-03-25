

//https://nodejs.org/api/vm.html#vm_vm_runinthiscontext_code_options

import { GenericSerializedDataStore, SchemaSerialize } from "./util"







export function deserialize<DataStore extends GenericSerializedDataStore, ClassName extends keyof DataStore, PropName extends keyof DataStore[ClassName], PropVal extends DataStore[ClassName][PropName][number]>(store: DataStore, schema: SchemaSerialize<DataStore, ClassName, PropName, PropVal>) {
  let data = parse(store, schema)


  let classNames = Object.keys(schema)

  for (let className in data) {
    for (let entry of data[className]) {
      for (let prop in entry) {
        if (classNames.includes(entry[prop])) {
          entry[prop] = data[className][entry[prop]]
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
    let length = Object.keys(schema[className]).length
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
