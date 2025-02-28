import React from 'react';

const LeaderboardPage = () => {
  // Leaderboard data
  const leaderboardData = [
    { rank: 1, name: "John Nicholls", return: "51%" },
    { rank: 2, name: "Amy Johnson", return: "44%" },
    { rank: 3, name: "Tom Henry", return: "39%" },
    { rank: 4, name: "Adam Smith", return: "33%" },
    { rank: 5, name: "Milinda Jackson", return: "29%" }
  ];

  // Get top 3 performers for the podium
  const topThree = leaderboardData.slice(0, 3);

  return (
    <div className="bg-black text-white min-h-screen min-w-[80vw]">
      {/* Header */}
      <header className="p-4">
        <h1 className="text-2xl font-bold">LEADERBOARD</h1>
      </header>

      {/* Medals Podium Section */}
      <div className="flex justify-center items-end mb-8 mt-4 relative">
        {/* Silver Medal (2nd place) - Left */}
        <div className="flex flex-col items-center mx-4">
          <div className="relative">
            <svg width="100" height="100" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" fill="#C0C0C0" stroke="#EFEFEF" strokeWidth="2" />
              <text x="50" y="60" textAnchor="middle" fill="#333333" fontSize="40" fontWeight="bold">2</text>
              <text x="50" y="80" textAnchor="middle" fill="#333333" fontSize="12" fontWeight="bold">SILVER</text>
            </svg>
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
              <svg width="40" height="30" viewBox="0 0 40 30">
                <path d="M0,0 L40,0 L35,15 L20,30 L5,15 Z" fill="#cc0000" />
              </svg>
            </div>
          </div>
          <p className="mt-8 text-center">{topThree[1].name}</p>
        </div>

        {/* Gold Medal (1st place) - Center */}
        <div className="flex flex-col items-center mx-4 mb-8">
          <div className="relative">
            <svg width="120" height="120" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" fill="#FFD700" stroke="#FFCC00" strokeWidth="2" />
              <text x="50" y="60" textAnchor="middle" fill="#996515" fontSize="40" fontWeight="bold">1</text>
              <text x="50" y="80" textAnchor="middle" fill="#996515" fontSize="12" fontWeight="bold">GOLD</text>
              <path d="M20,50 C20,30 35,20 50,20 C65,20 80,30 80,50" stroke="#996515" strokeWidth="2" fill="none" />
              <path d="M20,50 C20,70 35,80 50,80 C65,80 80,70 80,50" stroke="#996515" strokeWidth="2" fill="none" />
            </svg>
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
              <svg width="40" height="30" viewBox="0 0 40 30">
                <path d="M0,0 L40,0 L35,15 L20,30 L5,15 Z" fill="#cc0000" />
              </svg>
            </div>
          </div>
          <p className="mt-8 text-center">{topThree[0].name}</p>
        </div>

        {/* Bronze Medal (3rd place) - Right */}
        <div className="flex flex-col items-center mx-4">
          <div className="relative">
            <svg width="100" height="100" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" fill="#CD7F32" stroke="#A57164" strokeWidth="2" />
              <text x="50" y="60" textAnchor="middle" fill="#7E3517" fontSize="40" fontWeight="bold">3</text>
              <text x="50" y="80" textAnchor="middle" fill="#7E3517" fontSize="12" fontWeight="bold">BRONZE</text>
            </svg>
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
              <svg width="40" height="30" viewBox="0 0 40 30">
                <path d="M0,0 L40,0 L35,15 L20,30 L5,15 Z" fill="#cc0000" />
              </svg>
            </div>
          </div>
          <p className="mt-8 text-center">{topThree[2].name}</p>
        </div>
      </div>

      {/* Leaderboard Table */}
      <div className="mx-auto w-full max-w-3xl">
        {leaderboardData.map((item) => (
          <div 
            key={item.rank} 
            className="grid grid-cols-3 border-b border-gray-800 py-3 px-4"
            style={{ backgroundColor: item.rank % 2 === 0 ? '#121212' : '#0a0a0a' }}
          >
            <div className="text-gray-300">{item.rank}</div>
            <div className="text-left">{item.name}</div>
            <div className="text-right text-green-500 font-medium">{item.return}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeaderboardPage;