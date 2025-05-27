import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Trophy, Star } from 'lucide-react';

interface TeamStanding {
  position: number;
  team: string;
  played: number;
  won: number;
  lost: number;
  tied: number;
  nrr: number;
  points: number;
  color: string;
}

interface Tournament {
  id: string;
  name: string;
  year: string;
  standings: TeamStanding[];
}

interface FantasyPoint {
  category: string;
  action: string;
  points: number;
  note?: string;
}

const PointsTable: React.FC = () => {
  useEffect(() => {
    document.title = 'Points Table - Crickets11';
  }, []);

  const [activeTournament, setActiveTournament] = useState<string>('ipl2025');
  const [activeTab, setActiveTab] = useState<'standings' | 'fantasy'>('fantasy');

  const fantasyPoints: FantasyPoint[] = [
    { category: 'Batting', action: 'Run scored', points: 1 },
    { category: 'Batting', action: 'Boundary bonus', points: 1, note: 'Additional point for each four' },
    { category: 'Batting', action: 'Six bonus', points: 2, note: 'Additional points for each six' },
    { category: 'Batting', action: 'Half century bonus', points: 20, note: '50-99 runs' },
    { category: 'Batting', action: 'Century bonus', points: 50, note: '100+ runs' },
    { category: 'Bowling', action: 'Wicket taken', points: 50, note: 'Excluding run out' },
    { category: 'Bowling', action: 'Maiden over', points: 20 },
    { category: 'Bowling', action: '3 wicket bonus', points: 25, note: 'Additional points for 3+ wickets' },
    { category: 'Bowling', action: '5 wicket bonus', points: 50, note: 'Additional points for 5+ wickets' },
    { category: 'Fielding', action: 'Catch taken', points: 25 },
    { category: 'Fielding', action: 'Stumping', points: 30 },
    { category: 'Fielding', action: 'Run out', points: 25, note: 'Direct hit' },
    { category: 'Other', action: 'Captain', points: 2, note: '2× points for captain' },
    { category: 'Other', action: 'Vice Captain', points: 1.5, note: '1.5× points for vice captain' }
  ];

  const tournaments: Tournament[] = [
    {
      id: 'ipl2025',
      name: 'Indian Premier League',
      year: '2025',
      standings: [
        { position: 1, team: 'Mumbai Indians', played: 14, won: 10, lost: 4, tied: 0, nrr: 0.381, points: 20, color: 'bg-blue-600' },
        { position: 2, team: 'Chennai Super Kings', played: 14, won: 9, lost: 5, tied: 0, nrr: 0.455, points: 18, color: 'bg-yellow-500' },
        { position: 3, team: 'Royal Challengers Bangalore', played: 14, won: 8, lost: 6, tied: 0, nrr: 0.172, points: 16, color: 'bg-red-600' },
        { position: 4, team: 'Delhi Capitals', played: 14, won: 8, lost: 6, tied: 0, nrr: 0.019, points: 16, color: 'bg-blue-500' },
        { position: 5, team: 'Kolkata Knight Riders', played: 14, won: 7, lost: 7, tied: 0, nrr: 0.214, points: 14, color: 'bg-purple-700' },
        { position: 6, team: 'Rajasthan Royals', played: 14, won: 7, lost: 7, tied: 0, nrr: -0.096, points: 14, color: 'bg-pink-600' },
        { position: 7, team: 'Punjab Kings', played: 14, won: 6, lost: 8, tied: 0, nrr: -0.162, points: 12, color: 'bg-red-500' },
        { position: 8, team: 'Sunrisers Hyderabad', played: 14, won: 6, lost: 8, tied: 0, nrr: -0.379, points: 12, color: 'bg-orange-500' },
        { position: 9, team: 'Gujarat Titans', played: 14, won: 5, lost: 9, tied: 0, nrr: -0.267, points: 10, color: 'bg-blue-400' },
        { position: 10, team: 'Lucknow Super Giants', played: 14, won: 4, lost: 10, tied: 0, nrr: -0.325, points: 8, color: 'bg-cyan-500' }
      ]
    },
    {
      id: 'wc2025',
      name: 'Cricket World Cup',
      year: '2025',
      standings: [
        { position: 1, team: 'India', played: 9, won: 8, lost: 1, tied: 0, nrr: 1.254, points: 16, color: 'bg-blue-600' },
        { position: 2, team: 'Australia', played: 9, won: 7, lost: 2, tied: 0, nrr: 0.923, points: 14, color: 'bg-yellow-500' },
        { position: 3, team: 'England', played: 9, won: 6, lost: 3, tied: 0, nrr: 0.476, points: 12, color: 'bg-blue-500' },
        { position: 4, team: 'New Zealand', played: 9, won: 5, lost: 4, tied: 0, nrr: 0.358, points: 10, color: 'bg-gray-800' },
        { position: 5, team: 'South Africa', played: 9, won: 5, lost: 4, tied: 0, nrr: 0.127, points: 10, color: 'bg-green-600' },
        { position: 6, team: 'Pakistan', played: 9, won: 4, lost: 5, tied: 0, nrr: -0.156, points: 8, color: 'bg-green-700' },
        { position: 7, team: 'Bangladesh', played: 9, won: 3, lost: 6, tied: 0, nrr: -0.459, points: 6, color: 'bg-green-500' },
        { position: 8, team: 'Afghanistan', played: 9, won: 3, lost: 6, tied: 0, nrr: -0.583, points: 6, color: 'bg-blue-700' },
        { position: 9, team: 'Sri Lanka', played: 9, won: 2, lost: 7, tied: 0, nrr: -0.949, points: 4, color: 'bg-blue-400' },
        { position: 10, team: 'West Indies', played: 9, won: 2, lost: 7, tied: 0, nrr: -1.156, points: 4, color: 'bg-red-600' }
      ]
    }
  ];

  const currentTournament = tournaments.find(t => t.id === activeTournament) || tournaments[0];

  return (
    <div className="bg-[#0D1832] min-h-screen">
      <Navbar />
      
      <div className="pt-16 bg-[#0D1832]">
        {/* Hero section */}
        <div className="bg-gradient-to-b from-[#1a3366] to-[#0D1832] py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-block bg-blue-600/20 p-4 rounded-full mb-4">
                <Trophy className="h-8 w-8 text-blue-400" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Points Table</h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Stay updated with the latest standings and fantasy points system
              </p>
            </div>
          </div>
        </div>
        
        {/* Tab selector */}
        <div className="bg-[#132548] py-6">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center space-x-6">
              {/* <button
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeTab === 'standings'
                    ? 'bg-blue-600 text-white'
                    : 'bg-[#0D1832] text-gray-300 hover:bg-[#1a3366]'
                }`}
                onClick={() => setActiveTab('standings')}
              >
                Tournament Standings
              </button>*/}
              <button 
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeTab === 'fantasy'
                    ? 'bg-blue-600 text-white'
                    : 'bg-[#0D1832] text-gray-300 hover:bg-[#1a3366]'
                }`}
                onClick={() => setActiveTab('fantasy')}
              >
                Fantasy Points
              </button>
            </div>
          </div>
        </div>

        {activeTab === 'standings' ? (
          <>
            {/* Tournament selector */}
            <div className="bg-[#132548] py-6 border-t border-[#1a3366]">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-center space-x-6">
                  {tournaments.map(tournament => (
                    <button
                      key={tournament.id}
                      className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                        activeTournament === tournament.id
                          ? 'bg-blue-600 text-white'
                          : 'bg-[#0D1832] text-gray-300 hover:bg-[#1a3366]'
                      }`}
                      onClick={() => setActiveTournament(tournament.id)}
                    >
                      {tournament.name} {tournament.year}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Points table */}
            <div className="py-16">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto bg-[#132548] rounded-xl overflow-hidden shadow-xl">
                  <div className="p-6 bg-[#1a3366]">
                    <h2 className="text-2xl font-bold text-white">
                      {currentTournament.name} {currentTournament.year} Standings
                    </h2>
                  </div>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-[#0D1832]">
                          <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Pos</th>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Team</th>
                          <th className="px-6 py-4 text-center text-sm font-semibold text-gray-300">Played</th>
                          <th className="px-6 py-4 text-center text-sm font-semibold text-gray-300">Won</th>
                          <th className="px-6 py-4 text-center text-sm font-semibold text-gray-300">Lost</th>
                          <th className="px-6 py-4 text-center text-sm font-semibold text-gray-300">Tied</th>
                          <th className="px-6 py-4 text-center text-sm font-semibold text-gray-300">NRR</th>
                          <th className="px-6 py-4 text-center text-sm font-semibold text-gray-300">Points</th>
                        </tr>
                      </thead>
                      <tbody>
                        {currentTournament.standings.map((team, index) => (
                          <tr 
                            key={index} 
                            className={`${index % 2 === 0 ? 'bg-[#132548]' : 'bg-[#152a4f]'} ${
                              team.position <= 4 ? 'border-l-4 border-green-500' : ''
                            }`}
                          >
                            <td className="px-6 py-4 text-gray-300">{team.position}</td>
                            <td className="px-6 py-4">
                              <div className="flex items-center">
                                <div className={`w-8 h-8 rounded-full ${team.color} flex items-center justify-center text-white font-bold mr-3`}>
                                  {team.team.substring(0, 2)}
                                </div>
                                <span className="font-medium text-white">{team.team}</span>
                              </div>
                            </td>
                            <td className="px-6 py-4 text-center text-gray-300">{team.played}</td>
                            <td className="px-6 py-4 text-center text-green-400">{team.won}</td>
                            <td className="px-6 py-4 text-center text-red-400">{team.lost}</td>
                            <td className="px-6 py-4 text-center text-gray-300">{team.tied}</td>
                            <td className="px-6 py-4 text-center text-gray-300">{team.nrr.toFixed(3)}</td>
                            <td className="px-6 py-4 text-center text-blue-300 font-bold">{team.points}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  
                  <div className="p-4 bg-[#0D1832] text-sm text-gray-400">
                    <span className="flex items-center">
                      <span className="inline-block w-3 h-3 bg-green-500 mr-2"></span>
                      Qualified for Playoffs/Semi-finals
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          /* Fantasy Points System */
          <div className="py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-5xl mx-auto">
                <div className="bg-[#132548] rounded-xl overflow-hidden shadow-xl">
                  <div className="p-6 bg-[#1a3366] flex items-center">
                    <Star className="h-6 w-6 text-yellow-400 mr-3" />
                    <h2 className="text-2xl font-bold text-white">Fantasy Points System</h2>
                  </div>
                  
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {['Batting', 'Bowling', 'Fielding', 'Other'].map(category => (
                        <div key={category} className="bg-[#0D1832] rounded-lg overflow-hidden">
                          <div className="bg-[#1a3366] px-4 py-3">
                            <h3 className="text-lg font-semibold text-white">{category}</h3>
                          </div>
                          <div className="p-4">
                            <table className="w-full">
                              <tbody>
                                {fantasyPoints
                                  .filter(point => point.category === category)
                                  .map((point, index) => (
                                    <tr key={index} className="border-b border-[#132548] last:border-0">
                                      <td className="py-3 text-gray-300">{point.action}</td>
                                      <td className="py-3 text-right">
                                        <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm">
                                          {typeof point.points === 'number' ? 
                                            `${point.points} ${point.points === 1 ? 'point' : 'points'}` : 
                                            `${point.points}×`
                                          }
                                        </span>
                                      </td>
                                      {point.note && (
                                        <td className="py-3 pl-4 text-sm text-gray-400">
                                          {point.note}
                                        </td>
                                      )}
                                    </tr>
                                  ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Additional notes */}
                <div className="mt-8 bg-[#132548] rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Important Notes</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Points are calculated in real-time during live matches</li>
                    <li>Captain gets 2× points and Vice Captain gets 1.5× points</li>
                    <li>Economy rate points are calculated only after a minimum of 2 overs bowled</li>
                    <li>Strike rate points are calculated only after a minimum of 10 balls faced</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Upcoming matches */}
        <div className="py-16 bg-[#0D1832] hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Upcoming Matches</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Don't miss the action! Create your fantasy teams for these upcoming matches
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((match) => (
                <div key={match} className="bg-[#132548] rounded-xl overflow-hidden shadow-lg">
                  <div className="bg-[#1a3366] px-4 py-3 flex justify-between items-center">
                    <span className="text-blue-300 text-sm">{currentTournament.name} {currentTournament.year}</span>
                    <span className="bg-blue-600/30 text-blue-300 text-xs px-3 py-1 rounded-full">Match #{match}</span>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex justify-between items-center">
                      <div className="flex flex-col items-center">
                        <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold mb-2 ${
                          match % 2 === 0 ? 'bg-blue-600' : 'bg-yellow-500'
                        }`}>
                          {match % 2 === 0 ? 'MI' : 'CSK'}
                        </div>
                        <span className="text-white font-medium">
                          {match % 2 === 0 ? 'Mumbai Indians' : 'Chennai Super Kings'}
                        </span>
                      </div>
                      
                      <div className="flex flex-col items-center">
                        <span className="text-2xl text-gray-400 font-bold mb-2">VS</span>
                        <span className="text-gray-400 text-sm">Tomorrow • 7:30 PM</span>
                      </div>
                      
                      <div className="flex flex-col items-center">
                        <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold mb-2 ${
                          match % 2 === 0 ? 'bg-red-600' : 'bg-purple-700'
                        }`}>
                          {match % 2 === 0 ? 'RCB' : 'KKR'}
                        </div>
                        <span className="text-white font-medium">
                          {match % 2 === 0 ? 'Royal Challengers' : 'Kolkata Knight Riders'}
                        </span>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 py-3 rounded-lg text-white font-medium transition-colors">
                        Create Fantasy Team
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PointsTable;