import express         from 'express';
import bodyParser      from 'body-parser';
import { development } from './config/config'
import router          from './routes/router.js';
import path            from 'path';
import cors            from 'cors';

const app = express();


app.use(cors());
// app.use(express.static('../frontend/dist'));
// const f_p = path.join(__dirname, '../frontend/dist/index.html');
//
// app.use("*", (req, res) => {
//   res.sendFile(f_p);
// });

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.use(router);


app.listen(development.port, () => {
  console.log(`APP STARTING AT PORT ${development.port}`);
});
