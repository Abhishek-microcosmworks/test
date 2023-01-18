import './App.css';
import { Source } from '@abhishek_vats/bit-demo-production.youtube-components-lib';
import YOUTUBEICON from '../src/assets/images/g10.png';
import spinner  from '../src/assets/images/spinner.gif';

const CLIENT_ID = process.env.REACT_APP_YOUTUBE_CLIENT_ID;
const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

function App() {
  return (
    <div className="App">
      <Source
         youtubeIcon={YOUTUBEICON} 
         spinner={spinner}
         clientId={CLIENT_ID} 
         apiKey={API_KEY}
      />
    </div>
  );
}

export default App;
