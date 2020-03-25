type GenericDataStore = {
  [key: string]: {
    [key: string]: any[]
  }
}

type WhereFunction<PropVal> = (prop: PropVal) => boolean
type Limit = number

type Select<DataStore extends GenericDataStore, ClassName extends keyof DataStore, PropName extends keyof DataStore[ClassName], PropVal extends DataStore[ClassName][PropName][number]> = 

"*" | 
ClassName | 
ClassName[] | 

{[className in ClassName]: PropName} | 
{[className in ClassName]: PropName[]} | 
{[className in ClassName]: PropName}[] | 
{[className in ClassName]: PropName[]}[] | 

{[className in ClassName]: {[propName in PropName]: WhereFunction<PropVal>}} | 
{[className in ClassName]: {[propName in PropName]: WhereFunction<PropVal>}[]} | 
{[className in ClassName]: {[propName in PropName]: WhereFunction<PropVal>}}[] | 
{[className in ClassName]: {[propName in PropName]: WhereFunction<PropVal>}[]}[] | 

{[className in ClassName]: {[propName in PropName]: Limit}} | 
{[className in ClassName]: {[propName in PropName]: Limit}[]} | 
{[className in ClassName]: {[propName in PropName]: Limit}}[] | 
{[className in ClassName]: {[propName in PropName]: Limit}[]}[] | 

{[className in ClassName]: {[propName in PropName]: {where: WhereFunction<PropVal>, limit: Limit}}} | 
{[className in ClassName]: {[propName in PropName]: {where: WhereFunction<PropVal>, limit: Limit}}[]} | 
{[className in ClassName]: {[propName in PropName]: {where: WhereFunction<PropVal>, limit: Limit}}}[] | 
{[className in ClassName]: {[propName in PropName]: {where: WhereFunction<PropVal>, limit: Limit}}[]}[]



//https://nodejs.org/api/vm.html#vm_vm_runinthiscontext_code_options

export function deserialize<DataStore extends GenericDataStore, ClassName extends keyof DataStore, PropName extends keyof DataStore[ClassName], PropVal extends DataStore[ClassName][PropName][number]>(store: DataStore, select: Select<DataStore, ClassName, PropName, PropVal> = "*") {
  let data = parse(store)


  for (let className in data) {
    data[className]
  }
  
  


  return data
}


function parse<DataStore extends GenericDataStore>(input: DataStore) {
  let res = {} as any

  for (let className in input) {
    let ar = res[className as string] = []
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


deserialize({
  className: {
    prop: [
      "Was",
      "das"
    ]
  },
  className2: {
    prop2: [
      "Was",
    ]
  }
}, {})

