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

//* Controller to add a new language
const addLanguage = async (req, res) => {
  // Handle errors
  try {
    // Destructuring the request body
    const { name, programmers } = req.body;

    // Verify if body is valid
    if (name === undefined || programmers === undefined) {
      // Send the error response
      res.status(400).json({
        message: ">> Error adding new language. Body is not valid.",
      });
    }

    // Create a language object
    const language = {
      name,
      programmers,
    };

    // Create a connection to the database
    const connection = await getConnection();

    // Create a query to add a new language
    const insertQuery = await connection.query(
      "INSERT INTO language SET ?",
      language
    );

    // Send the response
    res.json({
      message: ">> Language added successfully.",
      insertQuery,
    });
  } catch (error) {
    // Send the error response
    res.status(500).json({
      message: ">> Error adding a new language.",
      error: error.message,
    });
  }
};

//* Controller to get by id
const getById = async (req, res) => {
  // Handle errors
  try {
    // Destructuring the request body
    const { id } = req.params;

    // Verify if body is valid
    if (id === undefined) {
      // Send the error response
      res.status(400).json({
        message: ">> Error getting language by id. Body is not valid.",
      });
    }

    // Create a connection to the database
    const connection = await getConnection();

    // Create a query to get a language by id
    const selectQuery = await connection.query(
      "SELECT id, name, programmers FROM language WHERE id = ?",
      [id]
    );

    // console debug the query
    console.log(selectQuery);

    // Send the response
    res.json(selectQuery);
  } catch (error) {}
};

//* Controller to delete by id
const deleteById = async (req, res) => {
  // Handle errors
  try {
    // Destructuring the request body
    const { id } = req.params;

    // Verify if body is valid
    if (id === undefined) {
      // Send the error response
      res.status(400).json({
        message: ">> Error deleting language by id. Body is not valid.",
        error: error.message,
      });
    }

    // Create a connection to the database
    const connection = await getConnection();

    // Create a query to delete a language by id
    const deleteQuery = await connection.query(
      "DELETE FROM language WHERE id = ?",
      [id]
    );

    // Send the response
    res.json({
      message: ">> Language deleted successfully.",
      deleteQuery,
    });
  } catch (error) {
    // Send the error response
    res.status(500).json({
      message: ">> Error deleting language by id.",
      error: error.message,
    });
  }
};

//* Controller to update by id
const updateById = async (req, res) => {
  // Handle errors
  try {
    // Destructuring the request body
    const { id } = req.params;
    const { name, programmers } = req.body;

    // Verify if body is valid
    if (id === undefined || name === undefined || programmers === undefined) {
      // Send the error response
      res.status(400).json({
        message: ">> Error updating language by id. Body is not valid.",
        error: error.message,
      });
    }

    // Create a connection to the database
    const connection = await getConnection();

    // Create a query to update a language by id
    const updateQuery = await connection.query(
      "UPDATE language SET name = ?, programmers = ? WHERE id = ?",
      [name, programmers, id]
    );

    // Send the response
    res.json({
      message: ">> Language updated successfully.",
      updateQuery,
    });
  } catch (error) {
    // Send the error response
    res.status(500).json({
      message: ">> Error updating language by id.",
      error: error.message,
    });
  }
};

//* Export methods
export const methods = {
  getAllLanguages,
  addLanguage,
  getById,
  deleteById,
  updateById,
};
