import React from 'react';

const TradingEducationPage = () => {
  // Data for tutorial and video cards
  const cards = [
    {
      title: "Stocks & `Charts`",
      description: "Describe various levels of stocks and its values at trading level.",
      image: "/src/assets/tutvd1.jpg"
    },
    {
      title: "Trade Analysis",
      description: "Analyse trade limits and group its sections to safer levels.",
      image: "/src/assets/tutvd2.jpg"
    },
    {
      title: "Graph Analysis",
      description: "Recognize the graph patterns and trade accordingly",
      image: "/src/assets/tutvd3.jpg"
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen p-8 min-w-[70vw]">
      {/* TUTORIALS SECTION */}
      <h1 className="text-4xl font-bold mb-8">TUTORIALS</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {cards.map((card, index) => (
          <div key={`tutorial-${index}`} className="bg-gray-900 rounded-lg overflow-hidden p-4">
            <img 
              src={card.image} 
              alt={card.title}
              className="w-full h-32 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-bold mb-2">{card.title}</h2>
            <p className="text-gray-300 text-sm">{card.description}</p>
          </div>
        ))}
      </div>

      {/* VIDEOS SECTION */}
      <h1 className="text-4xl font-bold mb-8">VIDEOS</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div key={`video-${index}`} className="bg-gray-900 rounded-lg overflow-hidden p-4">
            <img 
              src={card.image} 
              alt={card.title}
              className="w-full h-32 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-bold mb-2">{card.title}</h2>
            <p className="text-gray-300 text-sm">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TradingEducationPage;