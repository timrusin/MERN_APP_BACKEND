const express = require('express');
const app = express();
app.set('port', process.env.PORT || 8000);
const cors = require('cors');
app.use(cors());

//middleware-----
app.use(express.json());
app.use(express.urlencoded( { extended: true }));

app.get("/", (req, res) => {
  res.redirect("/api/users");
});

//Controllers------

const userController = require('./controllers/userController'); 
app.use('/api/users/', userController);


//--for handling errors
app.use((err, req, res, next) => {
	const statusCode = res.statusCode || 500;
	const message = err.message || 'Internal Server Error';
	res.status(statusCode).send(message);
  });


//Server connect----
app.listen(app.get('port'), () => {
	console.log(`✅ PORT: ${app.get('port')} 🌟`);
});