const express = require("express")
const router = express.Router();
const Note = require("../models/Notes")
const { body, validationResult } = require('express-validator');


router.get("/", async (req, res) => {
  try {
    const AllNotes = await Note.find({})
    res.json(AllNotes)
  } catch (error) {
    res.status(500).json("Internal server error")
  }

})


router.post("/", [
  //validataion check 
  body('title', "Title should be of atleast 3 letters").notEmpty().isLength({ min: 3 }),
  body('description', "description should be of atleast 3 letters").notEmpty().isLength({ min: 3 })
], async (req, res) => {

  const { title, description } = req.body;
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const newNote = new Note({
      title, description
    })

    const saveNote = await newNote.save()
    res.json(saveNote);

  } catch (error) {
    console.log(error, "kuch to hua")
    res.status(500).json("Internal server error")


  }
})

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const findNote = await Note.findById(id);
    if (!findNote) {
      return res.status(400).json("invalid id")
    }
    return res.status(200).json(findNote)

  } catch (error) {
    console.log(error, "kuch to hua")
    res.status(500).json("Internal server error")
  }
})

router.put("/:id", [
  //validataion check 
  body('title', "Title should be of atleast 3 letters").notEmpty().isLength({ min: 3 }),
  body('description', "description should be of atleast 3 letters").notEmpty().isLength({ min: 3 })
], async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const newNote = {
      title, description
    }

    const updatedNote = await Note.findByIdAndUpdate(id, newNote)
    if (!updatedNote) {
      return res.status(400).json("invalid id")
    }
    return res.status(200).json("updated successfully")


  } catch (error) {
    console.log(error, "kuch to hua in updated")
    res.status(500).json("Internal server error")

  }

})


router.delete("/:id", async (req, res) => {
  try {

    const { id } = req.params;
    const deleteNote = await Note.findByIdAndDelete(id);

    if (!deleteNote) {
      return res.status(400).json("invalid id")
    }
    return res.status(200).json("Deleted successfully")

  } catch (error) {
    console.log(error, "kuch to hua in deleted")
    res.status(500).json("Internal server error")
  }



})


module.exports = router