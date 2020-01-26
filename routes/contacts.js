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
router.post('/', [auth , [
  check('name', 'Name is required').not().isEmpty()
  ]],
  async (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const { name, email, phone, type } = req.body
    try {
      const newContact = new Contact({
        name,
        email,
        phone,
        type,
        user: req.user.id
      })

      const contact = await newContact.save()
      res.json(contact)
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error')
    }
});


// @route   PUT api/contacts
// @desc    Update contact
// @access  Private
router.put('/:id', auth, async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id)

    contact.name = req.body.name ? req.body.name : contact.name;
    contact.email = req.body.email;
    contact.phone = req.body.phone;
    contact.type = req.body.type


    await contact.save()
    res.json(contact)
  } catch (err) {
    console.error(err)
    res.status(500).send('Server Error')
  }
});




//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const contact = await Contact.findById(req.params.id, function (err, contact) {
//   console.log(contact)
//   console.log(req)
//   contact.name = req.body.name ? req.body.name : contact.name;
//   contact.email = req.body.email;
//   contact.phone = req.body.phone;
//   contact.type = req.body.type
//
//
// })

//////////////////////////////////////////////////////////////////////////////////////////////////////////////


// @route   DELETE api/contacts
// @desc    Delete contact
// @access  Private
router.delete('/:id', auth, async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id)
    console.log(contact)
    await contact.remove()
    res.json({ msg: 'Contact Removed' })
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
});


module.exports = router;
