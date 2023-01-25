/* eslint-disable no-console */
export function logError(error: Error) {
  const now = new Date();
  console.log(`Exception - ${now.toUTCString()}`);
  console.log(`\t- Stack: ${error.stack}\n`);
  console.log(`\t- Message: ${error.message}\n\n`);
}
