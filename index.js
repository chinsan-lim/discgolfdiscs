const express = require('express');
const cors = require('cors');
const app = express();
app.set('port', process.env.PORT || 8000);

// Middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// ROUTES
// Redirect

app.get('/', (req, res) => {
	res.redirect('/discs');
});

/* START CONTROLLERS HERE */
const discController = require('./controllers/discController');
app.use('/discs', discController);
const manufacturerController = require('./controllers/manufacturerController');
app.use('/manufacturers', manufacturerController);

/* END CONTROLLERS HERE */
app.use((err, req, res, next) => {
	const statusCode = res.statusCode || 500;
	const message = err.message || 'Internal Server Error';
	res.status(statusCode).send(message);
});

//=============================================================================
// START SERVER
//=============================================================================
// app.listen(app.get('port'), () => {
// 	console.log(`✅ PORT: ${app.get('port')} 🌟`);
// });

app.listen(process.env.PORT || 3000, function () {
	console.log(
		'Express server listening on port %d in %s mode',
		this.address().port,
		app.settings.env
	);
});
