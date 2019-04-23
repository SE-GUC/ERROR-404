const express = require("express");
const router = express.Router();
const Joi = require("joi");
const Content = require("../../models/Content");
const mongoose = require("mongoose");
const validator = require("../../validations/contentValidations");

// crearting new content (with db)
router.post("/", async (req, res) => {
  try {
    const isValidated = validator.createValidation(req.body);
    if (isValidated.error)
      return res
        .status(400)
        .send({ error: isValidated.error.details[0].message });
    const newContent = await Content.create(req.body);
    res.json({ msg: "Content was created successfully", data: newContent });
  } catch (error) {
    console.log(error);
  }
});

//updating content with mongodb
router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const content = await Content.findOne({ _id: id });
    if (!content)
      return res.status(404).send({ error: "content does not exist" });
    const isValidated = validator.updateValidation(req.body);
    if (isValidated.error)
      return res
        .status(400)
        .send({ error: isValidated.error.details[0].message });
    const updatedContent = await Content.updateOne(req.body);
    res.json({ msg: "Content updated successfully" });
  } catch (error) {
    console.log(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deletedContent = await Content.findByIdAndRemove({ _id: id });
    res.json({ msg: "Content was deleted successfully", data: deletedContent });
  } catch (error) {
    console.log(error);
  }
});

router.get("/:id", async (req, res) => {
  const Id = req.params.id;
  const cont = await Content.findById({ _id: Id });
  res.send(cont);
});

router.get("/", async (req, res) => {
  const contents = await Content.find();
  res.json({ data: contents });
});

module.exports = router;
