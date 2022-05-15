import { ARGUMENT_NAMES, STRIP_COMMENTS } from "./functions.constants";

/**  
 * return params name in a array list
 * E.g:
 * getParamsNames(myFunction(1, 2))
 * @param func function to get params from
 * @returns array of parameters name passed for the function, e.g from above : [n1, n2]
 * @example getParamsNames(myFunction(1, 2))  :  ["n1", "n2"]
 */
export const getParamNames = (func: Function) => {
   const funcToStringParsed = func.toString().replace(STRIP_COMMENTS, '');
   let result = funcToStringParsed.slice(funcToStringParsed.indexOf('(')+1, funcToStringParsed.indexOf(')')).match(ARGUMENT_NAMES);
   if (result === null) result = [];
   
   return result;
};

// TODO: test cases getParamsNames
// getParamNames(function (a,b,c,d){}) // returns ['a','b','c','d']
// getParamNames(function (a,/*b,c,*/d){}) // returns ['a','d']
// getParamNames(function (){}) // returns []




/**
 * Return params names and value
 * @param param variable to check eval
 * @returns eval of the param passed 
 * @example showName(props)  : "props = anything"
 */
export const showName = (param: any): string => {
   // eslint-disable-next-line no-eval
   return (param + " = " + eval(param));
};

// TODO: test cases showName
// showName(myVariable) // returns "myVariable"

