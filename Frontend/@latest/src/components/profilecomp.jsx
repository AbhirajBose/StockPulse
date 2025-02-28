import React from 'react';

const UserProfilePage = () => {
  // Leaderboard data
  const leaderboardData = [
    { rank: 1, name: "Jayden", return: "33%" },
    { rank: 2, name: "Angel", return: "29%" },
    { rank: 3, name: "Kevin", return: "25%" },
    { rank: 4, name: "David", return: "17%" },
    { rank: 5, name: "Peter", return: "12%" }
  ];

  // Achievement badges
  const badges = [
    { color: "#8e7cc3", border: "#674ea7" }, // Purple
    { color: "#e69138", border: "#b45f06" }, // Orange
    { color: "#c9daf8", border: "#9fc5e8" }, // Light Blue
    { color: "#ffd966", border: "#f1c232" }, // Gold
    { color: "#b4a7d6", border: "#8e7cc3" }, // Light Purple
    { color: "#ea9999", border: "#e06666", ribbon: true } // Pink with ribbon
  ];

  return (
    <div className="bg-black text-white min-h-screen min-w-[80vw]">
      {/* Profile header with horizontal line and avatar */}
      <div className="relative pt-10">
        <hr className="border-gray-700 mt-6" />
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
          <div className="bg-black rounded-full p-2 border-2 border-gray-700 inline-block">
            <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* User info section */}
      <div className="mx-4 my-6 border border-gray-700 rounded-lg p-6">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <div className="mb-6">
              <p className="text-lg mb-2">Name:</p>
            </div>
            <div>
              <p className="text-lg mb-2">Username:</p>
            </div>
          </div>
          <div>
            <div className="mb-6">
              <p className="text-lg mb-2">E-mail:</p>
            </div>
            <div>
              <p className="text-lg mb-2">Phone:</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main content with Achievements and Leaderboard */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-4 mb-6">
        {/* Achievements section */}
        <div className="border border-gray-700 rounded-lg p-4">
          <h2 className="text-xl text-center mb-6">Achievements</h2>
          <div className="flex justify-center gap-2">
            {badges.map((badge, index) => (
              <div key={index} className="relative">
                <svg width="40" height="50" viewBox="0 0 40 50">
                  <path 
                    d="M20 0 L40 12 L40 36 L20 48 L0 36 L0 12 Z" 
                    fill={badge.color} 
                    stroke={badge.border} 
                    strokeWidth="2"
                  />
                </svg>
                {badge.ribbon && (
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                    <svg width="24" height="24" viewBox="0 0 24 24">
                      <path d="M12 3 L16 10 L24 10 L18 15 L20 23 L12 19 L4 23 L6 15 L0 10 L8 10 Z" fill="#ff6b6b" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Leaderboard section */}
        <div className="border border-gray-700 rounded-lg p-4">
          <h2 className="text-xl text-center mb-6">Leaderboard</h2>
          
          {/* Leaderboard table header */}
          <div className="grid grid-cols-3 gap-2 mb-2">
            <div className="text-center">Rank</div>
            <div className="text-center">Name</div>
            <div className="text-center">Return</div>
          </div>
          
          {/* Leaderboard rows */}
          {leaderboardData.map((item) => (
            <div key={item.rank} className="grid grid-cols-3 gap-2 mb-2">
              <div className="text-center border border-gray-700 p-2">{item.rank}</div>
              <div className="text-center border border-gray-700 bg-gray-900 p-2">{item.name}</div>
              <div className="text-center border border-gray-700 bg-black p-2">
                <span className="text-green-500">{item.return}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;