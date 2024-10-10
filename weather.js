import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.render("weather.ejs");
});

app.post("/getWeather", async (req, res) => {
    try {
        console.log(req.body["location"]);
        const location = req.body["location"];
        if(location === ""){
            res.render("weather.ejs", {nil: "Please enter your location👆"});
        } else {
        const response = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1000000000000000000&appid=7c1873e27a1d2783f0b1897c38a7b4a5`);
        const lat = response.data[0].lat;
        const lon = response.data[0].lon;
        const date = String(new Date().getFullYear()) + "-" + String(new Date().getMonth() + 1).padStart(2, "0") + "-" + String(new Date().getDate() + 1).padStart(2, "0");
        const weatherResponse = await axios.get(`https://api.openweathermap.org/data/3.0/onecall/day_summary?lat=${lat}&lon=${lon}&date=${date}&appid=7c1873e27a1d2783f0b1897c38a7b4a5`)
        const result = weatherResponse.data;
        res.render("weather.ejs", {data: result, city: location});
        console.log(lat);
        console.log(lon);
        }
    } catch (error) {
        console.error(error);
        res.render("weather.ejs", {error: "No information that match your criteria."});
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});