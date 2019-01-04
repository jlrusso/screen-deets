const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();

const homeRouter = require("./routes/home-route");
const moviesRouter = require("./routes/movies-route");
const showsRouter = require("./routes/shows-route");
const documsRouter = require('./routes/docums-route');
const suggestRouter = require("./routes/suggest-route");
const loginRouter = require("./routes/login-route");
const joinRouter = require("./routes/join-route");

const port = 8080;
app.listen(port, () => console.log("server started at port: " + port));
app.set('views', `${__dirname}/views/pug`);
app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, '/public')));

app.use('/documentaries', documsRouter);
app.use("/suggest", suggestRouter);
app.use("/movies", moviesRouter);
app.use("/shows", showsRouter);
app.use("/login", loginRouter);
app.use("/join", joinRouter);
app.use('/home', homeRouter);
app.use("/", homeRouter);