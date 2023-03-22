import React from 'react'
import axios from 'axios'
import baseUrl from '../config'

const App = () => {
  const getdata = async () => {
    const res = await axios.get(`${baseUrl}/api/v1/books`)
    console.log(res.data)
  }
  getdata()

  return <div>My first component</div>
}

export default App
