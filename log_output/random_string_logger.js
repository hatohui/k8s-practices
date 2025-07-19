import { randomUUID } from "crypto";

const randomString = randomUUID();

function logRandomString() {
  const timestamp = new Date().toISOString();
  console.log(`${timestamp}: ${randomString}`);
}

logRandomString();
setInterval(logRandomString, 5000);
