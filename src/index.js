//* Import app
import app from "./app";

//* Main function
const main = () => {
  //* Start the server
  app.listen(app.get("port"));

  //* Log the server status
  console.log(`
  ################################################################
  ####\t\tREST API with NodeJS, Express & MySQL         ####
  ####                                                        ####
  ####\t\t\tby César López (C) 2022               ####
  ################################################################
  >>  Server running on: http://localhost:${app.get("port")}
  >>  Press CTRL + C to stop
  `);
};

//* Call the main function
main();
