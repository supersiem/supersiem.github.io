// Teletubby code mode activated
// Haal de temperatuur van Groningen op via de OpenWeatherMap API

const apiKey = 'd7188402b5a3aa2500a8ebbac347dae9';
const city = 'Groningen';

// API-eindpunt voor actuele weerinformatie
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

// Functie om weerinformatie op te halen
async function haalWeerInformatieOp() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    // Log de volledige API-respons
    console.log('Volledige API-respons:', data);

    // Haal de temperatuur op uit de weerdata
    const temperatuur = data.main.temp;

    // Verwerk de temperatuur (bijvoorbeeld log naar de console)
    console.log(`De temperatuur in Groningen is momenteel ${temperatuur} graden Celsius.`);
  } catch (error) {
    console.error('Fout bij het ophalen van weerinformatie:', error);
  }
}

// Roep de functie aan om weerinformatie op te halen
haalWeerInformatieOp();
