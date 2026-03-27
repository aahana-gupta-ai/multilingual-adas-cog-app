export function finite(value,label='Value'){if(typeof value!=='number'||!Number.isFinite(value))throw new Error(`${label} must be finite`);return value;}
export function integerRange(value,min,max){finite(value);if(!Number.isInteger(value)||value<min||value>max)throw new Error(`Integer required between ${min} and ${max}`);return value;}
export function textLimit(value,max=300){if(typeof value!=='string'||value.length>max)throw new Error(`Text must have at most ${max} characters`);return value.trim();}
export function syntheticId(value){if(typeof value!=='string'||!/^SYN-[A-Z0-9-]{1,40}$/.test(value))throw new Error('Use a fictional SYN- identifier');return value;}
export function requiredKeys(value,keys){for(const key of keys)if(!(key in value))throw new Error(`Missing ${key}`);return value;}
