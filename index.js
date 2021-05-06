const Db = require('./dboperations');
const State = require('./state');
const dboperations = require('./dboperations');

const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);

// Review later
router.use((req, res, next) => {
    console.log('middleware');
    next();
})

router.route('/states').get((req, res) => {
    dboperations.getStates().then(result => {
        res.json(result);
    })
})

app.listen(
    PORT,
    () => console.log(`it's running on http://localhost:${PORT}`)
);

// app.use(express.json());

// app.get('/tshirt', (req, res) => {
//     res.status(200).send({
//         tshirt: '👕',
//         size: 'large'
//     })
// });

// app.post('/tshirt/:id', (req, res) => {
//     const { id } = req.params;
//     const { logo } = req.body;

//     if (!logo) {
//         res.status(418).send({ message: 'We need a logo!' })
//     }

//     res.send({
//         tshirt: `👕 with your ${logo} and ID for ${id}`,
//     });
// });
