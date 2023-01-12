const express = require("express");
const app = express();
const cors = require('cors');
const path = require('path');

require("dotenv").config();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/static', express.static(path.join(__dirname, 'public')))

const routes = require("./routes");
app.use(routes);

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
})

