async function getDogs() {
  const response = await fetch(
    "https://api.thedogapi.com/v1/images/search?limit=10&api_key=live_0XRQZtR5mvWdxdo1qYiWXGp2AQQoR9unQx09x3g8IliT3OdTlG6CO5zYxSgMbyY0"
  );
  const data = await response.json();
  console.log(data);
}

getDogs().catch((error) => console.error(error));
console.log("Dogs list");
