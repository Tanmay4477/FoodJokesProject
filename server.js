const express = require("express");
const app = express();
const axios = require("axios");
const port = 3000;
const path = require("path");
const apiKey = "2ba9b71649714b938b6546ff322b5157";

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/jokes", async (req, res) => {
    try {
        const response = await axios.get('https://api.spoonacular.com/food/jokes/random', {
            params: {
                apiKey,
            }
        });

        console.log(response.data["text"]);
        return res.status(200).json(response.data["text"]);
    } catch (e) {
        return res.status(400).json({Error: e})
    }
});


app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});