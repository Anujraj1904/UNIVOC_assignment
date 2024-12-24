const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('main/index', {
    layout: 'layouts/boilerplate', // Use the boilerplate layout
    CurrUser: req.user // Pass the current user if needed
  });
});

module.exports = router;
