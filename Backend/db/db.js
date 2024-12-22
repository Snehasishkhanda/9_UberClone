const mongoose = require('mongoose'); // Correctly require mongoose

function connectToDb() {
    mongoose.connect(
        process.env.DB_CONNECT, // Use the environment variable for the database connection string
    )
        .then(() => {
            console.log('Connected to DB'); // Log success message
        })
        .catch((err) => {
            console.error('Failed to connect to DB:', err); // Log error message
        });
}

module.exports = connectToDb; // Export the function
