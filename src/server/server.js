const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

const router = express.Router();

router.use(express.static('build'));
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../build', 'index.html'));
})

app.use('/', router)


app.listen(port, () => {
  console.log('start ', port);
});

module.exports = app;