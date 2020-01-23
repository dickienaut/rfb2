const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth.js')
const { check, validationResult } = require('express-validator')
const User = require('../models/User.js')
const Contact = require('../models/Contact.js')


// @route   GET api/contacts
// @desc    Get all users contacts
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({date: -1})
    res.json(contacts)
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error')
  }
});


// @route   POST api/contacts
// @desc    Add contact
// @access  Private
router.post('/', (req, res) => {
  res.send('Add a contact')
});


// @route   PUT api/contacts
// @desc    Update contact
// @access  Private
router.put('/:id', (req, res) => {
  res.send('Update contact')
});


// @route   DELETE api/contacts
// @desc    Delete contact
// @access  Private
router.delete('/:id', (req, res) => {
  res.send('Delete contact')
});


module.exports = router;
