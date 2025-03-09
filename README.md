# 🌦️ WEATHER APP 

## **📌 OVERVIEW**  
This is a simple **weather application** built using **JavaScript, EJS, and CSS**. It fetches real-time weather data based on the user’s input and displays details like **temperature, humidity, wind speed, and conditions**.  

---

## **📸 SCREENSHOT**  
*[Weather app screenshot](weather-app-screenshot.png)*  

---

## **🚀 FEATURES**  
✅ **Real-Time Weather Data** – Fetches current weather details from an API  
✅ **Search Functionality** – Users can search for any city worldwide  
✅ **Dynamic UI with EJS** – Displays weather data using **Embedded JavaScript (EJS)**  
✅ **Responsive Design** – Works on both desktop and mobile devices  
✅ **Background Updates** – Changes based on weather conditions  

---

## **📂 PROJECT STRUCTURE**  
📦 weather-app   
┣ 📂 public/          # Static files (CSS, images)   
┣ 📂 views/           # EJS templates for frontend   
┣ 📜 app.js           # Main server logic (Node.js & Express)   
┣ 📜 config.js        # API key configuration   
┣ 📜 package.json     # Project dependencies   
┗ 📜 README.md        # Project documentation   

---

## **🚀 INSTALLATION AND SETUP**  
### **1️⃣ Clone the Repository**  
git clone https://github.com/JOSEPHLAST/weather-app.git   
cd weather-app   

### **2️⃣ Install Dependencies**
npm install

### **3️⃣ Set Up API Key**
Sign up at OpenWeatherMap and get an API key.   
Create a config.js file and add:   
module.exports = {
  API_KEY: "your_api_key_here"
};   

### **4️⃣ Run the Application**
node app.js   
Then, open http://localhost:3000/ in your browser.   

## **🌍 HOW TO USE**
1️⃣ Enter the name of a city in the search bar.   
2️⃣ Click the Get Weather button.   
3️⃣ View the current temperature, humidity, wind speed, and more.   

## **🛠️ TECHNOLOGIES USED**
	•	🌐 EJS – For rendering dynamic content.  
	•	⚡ JavaScript (Node.js & Express) – For handling API calls.  
	•	🎨 CSS – For styling the app.  
	•	☁️ OpenWeatherMap API – For fetching real-time weather data.  

## **🚀 FUTURE IMPROVEMENTS**
✨ Add a 5-day weather forecast.  
✨ Implement geolocation to detect user’s location.  
✨ Add weather animations based on conditions.  

## **📫 CONNECT WITH ME**
🔗 GitHub: [github.com/JOSEPHLAST](https://github.com/JOSEPHLAST)   
🔗 Portfolio: [josephlast.github.io](https://josephlast.github.io)   
🔗 LinkedIn: [JOSEPHLAST](https://www.linkedin.com/in/josephlast-a-aaa813354/)   

🌦️ “Never get caught in the rain unprepared!”
