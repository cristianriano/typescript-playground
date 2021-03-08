// Unknwon
let userInput: unknown;
let userName: string;

// Can asign anything
userInput = "Juan";

// If you check the type then can be re asigned
if (typeof userInput === "string") {
  userName = userInput;
}

// Never: never return (error, infinite loop)
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}
