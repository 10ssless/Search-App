const express = require("express");
const apiRouter = require("./routes/apiRoutes")

const PORT = 9000;

const app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
});
app.use(express.json())
app.use(express.urlencoded({ extended: false}))

app.use("/api", apiRouter)

app.listen(PORT, function() {
    console.log(`==> 🌎 Listening on port ${PORT}. Visit http://localhost:${PORT}/api in your browser.`);
});