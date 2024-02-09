const mongooes = require("mongoose");

const notesSchema = new mongooes.Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
    },
    { timeStamps: true }
);

module.exports = mongooes.model("Notes", notesSchema);
