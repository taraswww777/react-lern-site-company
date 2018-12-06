import config from './config';
import _ from 'lodash';
import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import {getPageBySlug} from "./parts/pages";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('tiny')); // combined/tiny

// для отдачи статичных файлов
app.use(express.static(config.ROOT_BUILD));

// для ответов на запросы с других ресурсов
app.use(function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});


app.get('/', (req, response) => {
	response.writeHead(200, {'Content-Type': 'text/html'});
	response.sendFile(path.join(config.ROOT_BUILD + '/index.html'));
});

app.get('/api/page/getBySlug/:slug', (req, response) => {
	response.send(getPageBySlug(_.get(req,'params.slug')));
	response.end();
});

// any
app.get('/*', (req, response) => {
	console.log('404 req.params: ', req.params);
	response.send('404');
	response.end();
});

app.listen(config.PORT, () => {
	console.log('server: http://localhost:' + config.PORT);
});
