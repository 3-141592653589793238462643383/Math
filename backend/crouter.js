const express = require('express');
const crouter = express.Router();

crouter.get('/', (req, res) => {
	res.status(200).send('Please Select A Opg')
})

module.exports = crouter;