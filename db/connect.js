const mongooose = require("mongoose");

const connectionString =
  "mongodb+srv://taskmanageruser:5cSZDwoBdRMnIPTi@nodetaskmanager.2ocwjpz.mongodb.net/task-manager?retryWrites=true&w=majority";

const connectDB = (url) => {
  mongooose.connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB