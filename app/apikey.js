

// app/page.js

export async function getApiKey(city) {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&units=metric`
    );
    const data = await res.json()
    return await data;
  } catch (err) {
    console.error("Error fetching API key:", err);
    return null;
  }
}
