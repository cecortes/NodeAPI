//* Imports getConnection function from database.js
import { getConnection } from "./../database/database";

//* Controller to get all languages
const getAllLanguages = async (req, res) => {
  // Handle errors
  try {
    // Create a connection to the database
    const connection = await getConnection();

    // Create a query to get all languages
    const selectQuery = await connection.query(
      "SELECT id, name, programmers FROM language"
    );

    // console debug the query
    console.log(selectQuery);

    // Send the response
    res.json(selectQuery);
  } catch (error) {
    // Send the error response
    res.status(500).json({
      message: ">> Error getting languages with SELECT query.",
      error: error.message,
    });
  }
};

//* Export methods
export const methods = {
  getAllLanguages,
};
