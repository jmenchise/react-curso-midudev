import './App.css';
import TwitterFollowCard from './components/TwitterFollowCard';

function App() {
  const users = [
    {
      userName: 'midudev',
      name: 'Miguel Angel Duran',
      isFollowing: true
    },
    {
      userName: 'pheralb',
      name: 'Pablo Hernandez',
      isFollowing: false
    },
    {
      userName: 'elonmusk',
      name: 'Elon Musk',
      isFollowing: true
    },
    {
      userName: 'vxnder',
      name: 'Vander Heart',
      isFollowing: true
    }
  ]

  return (
    <div className="App">
      {users.map(({ userName, name, isFollowing }, index) => (
        <TwitterFollowCard
          key={index}
          userName={userName}
          name={name}
          initialFollowing={isFollowing}
        />
      ))}
    </div>
  );
}

export default App;
