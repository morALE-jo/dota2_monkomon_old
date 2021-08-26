import HeroList from "./HeroList"
import React, {useState} from 'react'
import axios from 'axios';

function App() {
  const [hero, setHero] = useState(["one", "two"])
  const heroUrl = "https://api.opendota.com/api/heroes"

  axios.get(heroUrl).then(res => {
    setHero(res.data.map(h => h.localized_name))
  })

  return (
    <HeroList hero={hero} />
  );
}

export default App;
