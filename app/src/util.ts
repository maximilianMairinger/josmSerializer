export type SchemaSerialize<DataStore extends GenericSerializedDataStore, ClassName extends keyof DataStore, PropName extends keyof DataStore[ClassName], PropVal extends DataStore[ClassName][PropName][number]> = {
  [className in ClassName]: {
    [propName in PropName]: PropVal
  }
}

export type SchemaJsom<DataStore extends GenericJosmDataStore, ClassName extends keyof DataStore, PropName extends keyof DataStore[ClassName][number], PropVal extends DataStore[ClassName][number][PropName]> = {
  [className in ClassName]: {
    [propName in PropName]: PropVal
  }
}



type GenericPropValue = any
type GenericPropName = any
type GenericClassName = any

export type GenericSerializedDataStore = {
  [className in GenericClassName]: {
    [propName in GenericPropName]: GenericPropValue[]
  }
}

export type GenericJosmDataStore = {
  [className in GenericClassName]: {
    [propName in GenericPropName]: GenericPropValue
  }[]
}


type WhereFunction<PropVal> = (prop: PropVal) => boolean
type Limit = number
type Begin = number

type Selector<ClassName, propVal> = ClassName | "length" | "*" | propVal extends number ? ("sum" | "minimum" | "maximum" | "average") : "*"

type Select<DataStore extends GenericSerializedDataStore, ClassName extends keyof DataStore, PropName extends keyof DataStore[ClassName], PropVal extends DataStore[ClassName][PropName][number]> = 

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
