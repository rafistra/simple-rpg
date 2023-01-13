const express = require("express");
const cors = require('cors');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;
const routes = require("./routes");
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/static', express.static(path.join(__dirname, 'public')))
app.use(routes);
app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
})



