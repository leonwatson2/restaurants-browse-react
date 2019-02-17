
/**
 * Return a function that will recieve the event 
 * and call the corresponding funtion according to the key value pair 
 * @param {object} keyFunctionPairs 
 * i.e.
 * { "Enter": enterFunction, "Esc": escFunction }
 */
export const callOnKeyPress = (keyFunctionPairs) => {
    return (event) => {
        const { key } = event
        if(key in keyFunctionPairs){
            keyFunctionPairs[key]()
        }
    }
}