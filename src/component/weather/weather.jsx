import { Sun, Cloud, CloudRain, CloudSnow } from "lucide-react";

const Weather = () => {
  const hourlyData = [
    { time: "5 AM", temp: 27 },
    { time: "8 AM", temp: 19 },
    { time: "11 AM", temp: 26 },
    { time: "2 PM", temp: 25 },
    { time: "5 PM", temp: 21 },
    { time: "8 PM", temp: 28 },
    { time: "11 PM", temp: 29 },
    { time: "2 AM", temp: 21 },
  ];

  const weeklyForecast = [
    { day: "Tue", icon: Sun, temp: "29°", tempLow: "20°" },
    { day: "Wed", icon: Cloud, temp: "29°", tempLow: "20°" },
    { day: "Thu", icon: CloudRain, temp: "29°", tempLow: "20°" },
    { day: "Fri", icon: CloudRain, temp: "29°", tempLow: "20°" },
    { day: "Sat", icon: Cloud, temp: "29°", tempLow: "20°" },
    { day: "Sun", icon: CloudSnow, temp: "29°", tempLow: "20°" },
    { day: "Mon", icon: CloudRain, temp: "30°", tempLow: "20°" },
    { day: "Tue", icon: CloudRain, temp: "30°", tempLow: "20°" },
  ];

  const cities = [
    {
      name: "Ankara",
      temp: "32°",
      time: "Tuesday 2:00 PM",
      precipitation: "0%",
      humidity: "41%",
      wind: "22 Km/H",
      bg: "bg-gradient-to-br from-orange-400 to-red-500",
      icon: Sun,
    },
    {
      name: "Alaska",
      temp: "16°",
      time: "Tuesday 3:00 AM",
      precipitation: "18%",
      humidity: "32%",
      wind: "16 Km/H",
      bg: "bg-gradient-to-br from-blue-400 to-blue-600",
      icon: CloudRain,
    },
    {
      name: "Berlin",
      temp: "24°",
      time: "Tuesday 1:00 PM",
      precipitation: "70%",
      humidity: "50%",
      wind: "14 Km/H",
      bg: "bg-gradient-to-br from-green-400 to-green-600",
      icon: Cloud,
    },
    {
      name: "Paris",
      temp: "27°",
      time: "Tuesday 10:00 PM",
      precipitation: "10%",
      humidity: "44%",
      wind: "12 Km/H",
      bg: "bg-gradient-to-br from-purple-400 to-purple-600",
      icon: Cloud,
    },
  ];

  return (
    <div className="p-6 bg-gray-50  my-10 md:my-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main weather card */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-sm">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center">
                <Sun className="text-yellow-400 mr-4" size={48} />
                <div>
                  <div className="text-4xl font-light">29°</div>
                  <div className="text-sm text-gray-500 mt-1">
                    Precipitation: 2%
                    <br />
                    Humidity: 70%
                    <br />
                    Wind: 3 Km/H
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xl font-medium">New York, NY</div>
                <div className="text-gray-500">Wednesday 04:00</div>
              </div>
            </div>

            {/* Temperature chart */}
            <div className="mb-8">
              <div className="flex items-end justify-between h-32 mb-4">
                {hourlyData.map((item, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="text-xs text-gray-600 mb-2">
                      {item.temp}
                    </div>
                    <div
                      className="w-2 bg-yellow-300 rounded-full"
                      style={{ height: `${(item.temp / 30) * 80}px` }}
                    ></div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between text-xs text-gray-500">
                {hourlyData.map((item, index) => (
                  <span key={index}>{item.time}</span>
                ))}
              </div>
            </div>

            {/* Weekly forecast */}
            <div className="grid grid-cols-8 gap-4">
              {weeklyForecast.map((day, index) => {
                const IconComponent = day.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="text-sm font-medium mb-2">{day.day}</div>
                    <IconComponent
                      className={`mx-auto mb-2 ${
                        day.icon === Sun
                          ? "text-yellow-400"
                          : day.icon === Cloud
                          ? "text-gray-400"
                          : day.icon === CloudRain
                          ? "text-blue-400"
                          : "text-blue-300"
                      }`}
                      size={24}
                    />
                    <div className="text-sm font-medium">{day.temp}</div>
                    <div className="text-xs text-gray-500">{day.tempLow}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* City cards */}
          <div className="grid grid-cols-2 gap-4">
            {cities.map((city, index) => {
              const IconComponent = city.icon;
              return (
                <div
                  key={index}
                  className={`${city.bg} rounded-2xl p-6 text-white relative overflow-hidden`}
                  style={{
                    backgroundImage: `url('/src/assets/background_weather/card_back.jpeg')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundBlendMode: "overlay",
                  }}
                >
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <div className="text-sm opacity-90">
                          Precipitation: {city.precipitation}
                          <br />
                          Humidity: {city.humidity}
                          <br />
                          Wind: {city.wind}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-medium">{city.name}</div>
                        <div className="text-sm opacity-90">{city.time}</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-center">
                      <IconComponent className="text-white mr-3" size={32} />
                      <span className="text-3xl font-light">{city.temp}</span>
                    </div>
                  </div>

                  {/* Background overlay */}
                  <div className="absolute inset-0 opacity-80">
                    <div
                      className={`w-full h-full ${city.bg.replace(
                        "bg-gradient-to-br",
                        "bg-gradient-to-br"
                      )}`}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
