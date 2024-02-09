const express = require("express");
const asyncHandler = require("../utils/asyncHandler");
const Notes = require("../models/notes.model");
const mongoose = require("mongoose");

exports.createNotes = asyncHandler(async (req, res, next) => {
    const { title, description } = req.body;
    if (!description) {
        res.status(400).json({
            message: "Please provide title and description ",
        });
    }

    const newNote = await Notes.create({
        title,
        description,
    });
    res.status(200).json({
        success: true,
        data: newNote,
    });
});

exports.getAllNotes = asyncHandler(async (req, res, next) => {
    const notes = await Notes.find();
    if (!notes) {
        res.status(404).json({ message: "No notes found" });
    }
    res.status(200).json({
        success: true,
        data: notes,
    });
});

exports.deleteNotes = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    if (!id) {
        res.status(400).json({ message: "provide a id" });
    }
    const notesById = await Notes.findById(id);
    if (!notesById) {
        res.status(400).json({ message: "not the valid id" });
    }

    await Notes.deleteOne(notesById);
    // let note = await Notes.findByIdAndDelete(id);
    res.status(200).json({
        success: true,
    });
});

exports.updateNotes = asyncHandler(async (req, res, next) => {
    const { description } = req.body;
    const { id } = req.params;
    console.log("-------->", req.body);

    const noteFromDB = await Notes.findById(id);
    if (!noteFromDB) {
        res.status(400).json({ message: "The Note is not available in DB" });
    }
    noteFromDB.description = description;
    // noteFromDB.note = note;
    await noteFromDB.save({
        new: true,
    });
    res.json({
        success: true,
        data: noteFromDB,
    });
});
