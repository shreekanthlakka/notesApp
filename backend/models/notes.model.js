const mongooes = require("mongoose");

const notesSchema = new mongooes.Schema(
    {
        title: { type: String },
        description: { type: String },
    },
    { timeStamps: true }
);

module.exports = mongooes.model("Notes", notesSchema);
