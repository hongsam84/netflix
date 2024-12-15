import './App.css';
import { useState, useEffect } from 'react'
import axios from 'axios'
import Container from './Container';
import Navigationlist from './Navigationlist.js';

const SERVER_URL = 'http://localhost:8080/api/netflixlist'


const App = () => {
  const [ netflixlist, setNetflix ] = useState([])

  const getNetflix = async () => {
    try {
      const res = await axios.get(SERVER_URL)
      console.log(res)

      setNetflix(res.data)
    } catch (err) {
      console.log(err)
      
      setNetflix([])
    }
  }

  useEffect(() => {
    getNetflix()
  }, [])


  return (
    <>
      <div className="resize">
        <Header/>
        <Navigationlist/>
        <Watchlist 
          title="내가 찜한 리스트"
          list={netflixlist}
        />
        
      </div>
    </>
  );
}

const Header = () => {
  return(
    <h1 className="header">Netflix list</h1>
  )
}

const Watchlist = props => {
  return(
    <div className="watchlist">
      {props.list.map((list) => (
        <Container key={list.id} list={list} />
      ))}
    </div>
  )
}

export default App;