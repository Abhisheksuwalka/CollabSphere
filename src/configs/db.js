const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://Iae:N9fKwvkVltCgMvcd@iae.twztpms.mongodb.net/?retryWrites=true&w=majority&appName=Iae",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    }
  );
};
