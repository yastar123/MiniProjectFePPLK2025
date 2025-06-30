import { Calendar, Trophy, Clock } from "lucide-react"

const Banner = () => {
  // Data untuk kalender (simulasi Juni 2022)
  const calendarDays = [
    { date: 1, isToday: false },
    { date: 2, isToday: false },
    { date: 3, isToday: false },
    { date: 4, isToday: false },
    { date: 5, isToday: false },
    { date: 6, isToday: false },
    { date: 7, isToday: false },
    { date: 8, isToday: true },
    { date: 9, isToday: false },
    { date: 10, isToday: false },
    { date: 11, isToday: false },
    { date: 12, isToday: false },
    { date: 13, isToday: false },
    { date: 14, isToday: false },
    { date: 15, isToday: false },
    { date: 16, isToday: false },
    { date: 17, isToday: false },
    { date: 18, isToday: false },
    { date: 19, isToday: false },
    { date: 20, isToday: false },
    { date: 21, isToday: false },
    { date: 22, isToday: false },
    { date: 23, isToday: false },
    { date: 24, isToday: false },
    { date: 25, isToday: false },
    { date: 26, isToday: false },
    { date: 27, isToday: false },
    { date: 28, isToday: false },
    { date: 29, isToday: false },
    { date: 30, isToday: false },
  ]

  // Data untuk tabel liga
  const leagueTable = [
    { pos: 1, team: "Manchester City", mp: 38, w: 29, d: 6, l: 3, gf: 99, ga: 26, gd: 73, pts: 93 },
    { pos: 2, team: "Liverpool", mp: 38, w: 28, d: 8, l: 2, gf: 98, ga: 26, gd: 72, pts: 92 },
    { pos: 3, team: "Chelsea", mp: 38, w: 21, d: 9, l: 8, gf: 76, ga: 47, gd: 29, pts: 74 },
    { pos: 4, team: "Tottenham Hotspur", mp: 38, w: 22, d: 5, l: 11, gf: 69, ga: 40, gd: 29, pts: 71 },
    { pos: 5, team: "Arsenal", mp: 38, w: 22, d: 3, l: 13, gf: 61, ga: 48, gd: 13, pts: 69 },
  ]

  return (
    <div className="relative min-h-[400px] bg-gradient-to-r from-green-400 via-green-500 to-green-600 p-8">
      {/* Background Blur Effect */}
      <div className="absolute inset-0 bg-green-500/20 backdrop-blur-sm"></div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Card 1: Calendar */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Calendar className="text-blue-600 mr-2" size={20} />
              <h3 className="font-bold text-gray-800">Jun 2022</h3>
            </div>

            {/* Header */}
            <div className="grid grid-cols-7 gap-1 mb-2">
              {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                <div key={day} className="text-center text-xs font-medium text-gray-500 p-1">
                  {day}
                </div>
              ))}
            </div>

            {/* Hari Kalender */}
            <div className="grid grid-cols-7 gap-1">
              {calendarDays.map((day, index) => (
                <div
                  key={index}
                  className={`text-center p-2 text-sm rounded ${
                    day.isToday ? "bg-blue-600 text-white font-bold" : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {day.date}
                </div>
              ))}
            </div>
          </div>

          {/* Card2 */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Trophy className="text-yellow-600 mr-2" size={20} />
              <h3 className="font-bold text-gray-800">Club</h3>
            </div>

            <div className="overflow-hidden">
              <table className="w-full text-xs">
                <thead>
                  <tr className="text-gray-500 border-b">
                    <th className="text-left p-1">#</th>
                    <th className="text-left p-1">Team</th>
                    <th className="text-center p-1">MP</th>
                    <th className="text-center p-1">W</th>
                    <th className="text-center p-1">D</th>
                    <th className="text-center p-1">L</th>
                    <th className="text-center p-1">GF</th>
                    <th className="text-center p-1">GA</th>
                    <th className="text-center p-1">GD</th>
                    <th className="text-center p-1 font-bold">Pts</th>
                  </tr>
                </thead>
                <tbody>
                  {leagueTable.map((team) => (
                    <tr key={team.pos} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="p-1 font-medium">{team.pos}</td>
                      <td className="p-1 font-medium text-gray-800">{team.team}</td>
                      <td className="p-1 text-center">{team.mp}</td>
                      <td className="p-1 text-center">{team.w}</td>
                      <td className="p-1 text-center">{team.d}</td>
                      <td className="p-1 text-center">{team.l}</td>
                      <td className="p-1 text-center">{team.gf}</td>
                      <td className="p-1 text-center">{team.ga}</td>
                      <td className="p-1 text-center">{team.gd}</td>
                      <td className="p-1 text-center font-bold">{team.pts}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Card 3: Match Preview */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Clock className="text-green-600 mr-2" size={20} />
              <h3 className="font-bold text-gray-800">The Final Round</h3>
            </div>

            <div className="text-center">
              {/* Team Logos & Names */}
              <div className="flex items-center justify-between mb-4">
                <div className="text-center">
                  <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mb-2 mx-auto">
                    <span className="text-sky-600 font-bold text-lg">MCI</span>
                  </div>
                  <p className="text-xs font-medium text-gray-700">Manchester City</p>
                </div>

                <div className="text-2xl font-bold text-gray-400">VS</div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-2 mx-auto">
                    <span className="text-red-600 font-bold text-lg">LIV</span>
                  </div>
                  <p className="text-xs font-medium text-gray-700">Liverpool</p>
                </div>
              </div>

              {/* Match Info */}
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="text-sm font-medium text-gray-600">Sunday, August 8th</p>
                <div className="flex items-center justify-center mt-2">
                  <div className="bg-blue-600 text-white px-3 py-1 rounded-l text-sm font-bold">Manchester City</div>
                  <div className="bg-gray-800 text-white px-2 py-1 text-sm font-bold">00</div>
                  <div className="bg-gray-800 text-white px-2 py-1 text-sm font-bold">00</div>
                  <div className="bg-red-600 text-white px-3 py-1 rounded-r text-sm font-bold">Liverpool</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
