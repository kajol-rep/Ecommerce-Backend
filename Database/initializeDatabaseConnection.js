const mongoose = require("mongoose")

const initializeDatabaseConnection = () => {
  mongoose.connect(`mongodb+srv://kajolsharma:${process.env.MONGODB_PASSWORD}@neog-cluster.gjfra.mongodb.net/ecommerce?retryWrites=true&w=majority`, {useNewUrlParser: true, useUnifiedTopology: true});

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    console.log("Connected To Database")
  });
}

module.exports = {initializeDatabaseConnection};