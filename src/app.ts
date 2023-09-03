var bodyParser = require('body-parser')
var cors = require('cors')
import express, { Response, Request } from "express";

const chordRoute = require('./routes/chordRoute')
const simplifieldChordRoute = require('./routes/simplefieldRoute')
const app = express();
const PORT = 8000;

let corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}

app.use(express.json());
app.use(bodyParser.json())
app.use(cors(corsOptions))

app.use(chordRoute)
app.use(simplifieldChordRoute)

app.get('/', async (req:Request, res:Response) => {
    res.status(200).send('aqui');
});

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}/`);
});
