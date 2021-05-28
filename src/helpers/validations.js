
export function validate(data, validationRules={}){
    const result  = Object.entries(data).filter(entries=>validationRules[entries[0]]).map(entries=>{
        let key = entries[0];
        let value = entries[1];
        return validationRules[key].map(rules=> rules(value)).filter(v=>v!==true)
    }).flatMap(msg=>msg)

    return result.length>0? [false, result] :[true, []];
}
