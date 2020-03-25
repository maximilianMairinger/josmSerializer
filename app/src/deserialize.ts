type GenericDataStore = {
  [key: string]: {
    [key: string]: any[]
  }
}

type WhereFunction<PropVal> = (prop: PropVal) => boolean
type Limit = number
type Begin = number

type Selector<ClassName, propVal> = ClassName | "length" | "*" | propVal extends number ? ("sum" | "minimum" | "maximum" | "average") : "*"

type Select<DataStore extends GenericDataStore, ClassName extends keyof DataStore, PropName extends keyof DataStore[ClassName], PropVal extends DataStore[ClassName][PropName][number]> = 

Selector<ClassName, PropVal> |
Selector<ClassName, PropVal>[] | 

{[className in Selector<ClassName, PropVal>]: PropName} | 
{[className in Selector<ClassName, PropVal>]: PropName[]} | 
{[className in Selector<ClassName, PropVal>]: PropName}[] | 
{[className in Selector<ClassName, PropVal>]: PropName[]}[] | 

{[className in Selector<ClassName, PropVal>]: {[propName in PropName]: WhereFunction<PropVal>}} | 
{[className in Selector<ClassName, PropVal>]: {[propName in PropName]: WhereFunction<PropVal>}[]} | 
{[className in Selector<ClassName, PropVal>]: {[propName in PropName]: WhereFunction<PropVal>}}[] | 
{[className in Selector<ClassName, PropVal>]: {[propName in PropName]: WhereFunction<PropVal>}[]}[] | 

{[className in Selector<ClassName, PropVal>]: {[propName in PropName]: Limit}} | 
{[className in Selector<ClassName, PropVal>]: {[propName in PropName]: Limit}[]} | 
{[className in Selector<ClassName, PropVal>]: {[propName in PropName]: Limit}}[] | 
{[className in Selector<ClassName, PropVal>]: {[propName in PropName]: Limit}[]}[] | 

{[className in Selector<ClassName, PropVal>]: {[propName in PropName]: {where: WhereFunction<PropVal>}}} | 
{[className in Selector<ClassName, PropVal>]: {[propName in PropName]: {where: WhereFunction<PropVal>}}[]} | 
{[className in Selector<ClassName, PropVal>]: {[propName in PropName]: {where: WhereFunction<PropVal>}}}[] | 
{[className in Selector<ClassName, PropVal>]: {[propName in PropName]: {where: WhereFunction<PropVal>}}[]}[] |

{[className in Selector<ClassName, PropVal>]: {[propName in PropName]: {limit: Limit}}} | 
{[className in Selector<ClassName, PropVal>]: {[propName in PropName]: {limit: Limit}}[]} | 
{[className in Selector<ClassName, PropVal>]: {[propName in PropName]: {limit: Limit}}}[] | 
{[className in Selector<ClassName, PropVal>]: {[propName in PropName]: {limit: Limit}}[]}[] |

{[className in Selector<ClassName, PropVal>]: {[propName in PropName]: {begin: Begin}}} | 
{[className in Selector<ClassName, PropVal>]: {[propName in PropName]: {begin: Begin}}[]} | 
{[className in Selector<ClassName, PropVal>]: {[propName in PropName]: {begin: Begin}}}[] | 
{[className in Selector<ClassName, PropVal>]: {[propName in PropName]: {begin: Begin}}[]}[] |

{[className in Selector<ClassName, PropVal>]: {[propName in PropName]: {where: WhereFunction<PropVal>, limit: Limit}}} | 
{[className in Selector<ClassName, PropVal>]: {[propName in PropName]: {where: WhereFunction<PropVal>, limit: Limit}}[]} | 
{[className in Selector<ClassName, PropVal>]: {[propName in PropName]: {where: WhereFunction<PropVal>, limit: Limit}}}[] | 
{[className in Selector<ClassName, PropVal>]: {[propName in PropName]: {where: WhereFunction<PropVal>, limit: Limit}}[]}[] |

{[className in Selector<ClassName, PropVal>]: {[propName in PropName]: {where: WhereFunction<PropVal>, limit: Limit, begin: Begin}}} | 
{[className in Selector<ClassName, PropVal>]: {[propName in PropName]: {where: WhereFunction<PropVal>, limit: Limit, begin: Begin}}[]} | 
{[className in Selector<ClassName, PropVal>]: {[propName in PropName]: {where: WhereFunction<PropVal>, limit: Limit, begin: Begin}}}[] | 
{[className in Selector<ClassName, PropVal>]: {[propName in PropName]: {where: WhereFunction<PropVal>, limit: Limit, begin: Begin}}[]}[] |

{[className in Selector<ClassName, PropVal>]: {[propName in PropName]: {limit: Limit, begin: Begin}}} | 
{[className in Selector<ClassName, PropVal>]: {[propName in PropName]: {limit: Limit, begin: Begin}}[]} | 
{[className in Selector<ClassName, PropVal>]: {[propName in PropName]: {limit: Limit, begin: Begin}}}[] | 
{[className in Selector<ClassName, PropVal>]: {[propName in PropName]: {limit: Limit, begin: Begin}}[]}[] |

{[className in Selector<ClassName, PropVal>]: {[propName in PropName]: {where: WhereFunction<PropVal>, begin: Begin}}} | 
{[className in Selector<ClassName, PropVal>]: {[propName in PropName]: {where: WhereFunction<PropVal>, begin: Begin}}[]} | 
{[className in Selector<ClassName, PropVal>]: {[propName in PropName]: {where: WhereFunction<PropVal>, begin: Begin}}}[] | 
{[className in Selector<ClassName, PropVal>]: {[propName in PropName]: {where: WhereFunction<PropVal>, begin: Begin}}[]}[] |

{[className in Selector<ClassName, PropVal>]: {[propName in PropName]: {where: WhereFunction<PropVal>, limit: Limit, begin: Begin}}} | 
{[className in Selector<ClassName, PropVal>]: {[propName in PropName]: {where: WhereFunction<PropVal>, limit: Limit, begin: Begin}}[]} | 
{[className in Selector<ClassName, PropVal>]: {[propName in PropName]: {where: WhereFunction<PropVal>, limit: Limit, begin: Begin}}}[] | 
{[className in Selector<ClassName, PropVal>]: {[propName in PropName]: {where: WhereFunction<PropVal>, limit: Limit, begin: Begin}}[]}[]


//https://nodejs.org/api/vm.html#vm_vm_runinthiscontext_code_options


type Schema<DataStore extends GenericDataStore, ClassName extends keyof DataStore, PropName extends keyof DataStore[ClassName], PropVal extends DataStore[ClassName][PropName][number]> = {
  [className in ClassName]: {
    [propName in PropName]: PropVal
  }
}




export function deserialize<DataStore extends GenericDataStore, ClassName extends keyof DataStore, PropName extends keyof DataStore[ClassName], PropVal extends DataStore[ClassName][PropName][number]>(store: DataStore, schema: Schema<DataStore, ClassName, PropName, PropVal>) {
  let data = parse(store)


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

