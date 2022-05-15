// REGEX
export const STRIP_COMMENTS = new RegExp(/(\/\/.*$)|(\/\*[\s\S]*?\*\/)|(\s*=[^,\)]*(('(?:\\'|[^'\r\n])*')|("(?:\\"|[^"\r\n])*"))|(\s*=[^,\)]*))/mg);
export const ARGUMENT_NAMES = new RegExp(/([^\s,]+)/g);
