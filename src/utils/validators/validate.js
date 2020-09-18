export const required = value => (value ? undefined : `Field is required!`);

const maxLength = maxLength => value => 
value.length > maxLength ? `Max value is ${maxLength} symbols` : undefined;

export const maxLength30 = maxLength(30);

