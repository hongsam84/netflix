import './App.css';
import { useState, useEffect } from 'react'
import axios from 'axios'
import Container from './Container'
import Navigationlist from './Navigationlist.js'

const api_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080/api/netflixlist'

const App = () => {
  const [ netflixlist, setNetflix ] = useState([])

  const fetchNetflix = async () => {
    try {
      
      const response = await axios.get(api_URL)
      console.log(response)

      setNetflix(response.data)
    } catch (err) {
      console.log(err)
      
      setNetflix([])
    }
  }

  useEffect(() => {
    fetchNetflix()
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