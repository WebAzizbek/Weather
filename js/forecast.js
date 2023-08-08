const KEY = "96b947a45d33d7dc1c49af3203966408";

// request get data

const getData = async (city) => {
  const base = "https://api.openweathermap.org/data/2.5/weather";
  const query = `?q=${city}&units=metric&appid=${KEY}`;
  loading(true);
  const request = await fetch(base + query);
  if (request.status != 200) {
    throw new Error("Mavjud bolmagan daavlat kiritdingiz !");
  }
  loading(false);
  const data = await request.json();
  return data;
};
