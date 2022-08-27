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
  >>  /api/languages/getAll
  >>  /api/languages/getById/:id
  >>  /api/languages/addNew
  >>  /api/languages/updateById/:id
  >>  /api/languages/deleteById/:id
  --------------------------------------------------------------
  >>  json data: 
  \t{ 
    \t  "name": varchar(30),
    \t  "programmers": tinyint(2)
  \t}
  --------------------------------------------------------------
  >>  Press CTRL + C to stop or rs to restart the server...
  `);
};

//* Call the main function
main();
