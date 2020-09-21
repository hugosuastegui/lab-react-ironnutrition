import React, {useState, useEffect} from 'react';
import './App.css';
import foods from './foods.json'
import FoodBox from './components/FoodBox'


function App() {
  const [food, setfood] = useState(foods)
  const [query, setquery] = useState('')
  const [results, setresults] = useState()
  const [form, setform] = useState(false)
  const [name, setname] = useState('Turkey')
  const [image, setimage] = useState('https://upload.wikimedia.org/wikipedia/commons/4/4d/Wild_turkey_eastern_us.jpg')
  const [calories, setcalories] = useState(100)
    
  useEffect(() => {
    setfood(foods)
  }, [])
  
  async function searchQuery(value){
    await setquery(value)
  }
  
  useEffect(() => {
    const search = food.filter(item => {
      return item.name.toLowerCase().includes(query.toLowerCase())
    })
    setresults(search)
    console.log(results)
  }, [query])
  
  const handleFormSubmit = (e) => {
    e.preventDefault()
    setfood([...food, {name, image, calories}])
    setname('')
    setimage('')
    setcalories(0)
}

  return results ? (
    <div className="App">
      <button onClick={() => setform(!form)}>Add Food</button>
      {form ? (
        <form onSubmit={handleFormSubmit}>
        <label>Name:</label>
        <input
          type='text'
          name='name'
          value={name}
          onChange={e => setname(e.target.value)}
        />

        <label>Director:</label>
        <input
          type='text'
          name='image'
          value={image}
          onChange={e => setimage(e.target.value)}
        />

        <label>calories:</label>
        <input
          type='text'
          name='calories'
          value={calories}
          onChange={e => setcalories(e.target.value)}
        />
        <button>Submit</button>
      </form>
      ) : ''}
      <label>Search:</label>
      <input
        type='text'
        name='query'
        value={query}
        onChange={e => searchQuery(e.target.value)}
      />
      {results.map((el, ind) => (
        <FoodBox key={ind} food={el}></FoodBox>
      ))}
    </div>
  ) : <h1>"Loading"</h1>
}

export default App;
