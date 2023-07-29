const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database.js");

process.on("uncaughtException", (err) => {
  console.log(`Error:${err.message}`);
  console.log(`shutting down the server due to Uncaught Exception`);
  process.exit(1);
});

process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`shutting down the server due to Unhandled Promise Rejection`);
  process.exit(1);
});

dotenv.config({ path: "config/config.env" });

connectDatabase();

app.listen(process.env.PORT, () =>
  console.log(`Server is running on http://localhost:${process.env.PORT}`)
);
