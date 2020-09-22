import React, {useState, useEffect} from 'react';
// import {Form, Button, InputNumber} from 'antd'

function FoodBox({foods}) {
    const [food, setfood] = useState(foods)
    const [results, setresults] = useState()
    const [query, setquery] = useState('')
    const [toggleForm, settoggleForm] = useState(false)
    const [name, setname] = useState('Turkey')
    const [image, setimage] = useState('https://upload.wikimedia.org/wikipedia/commons/4/4d/Wild_turkey_eastern_us.jpg')
    const [calories, setcalories] = useState(100)
    const [quantity, setquantity] = useState(0)
    const [diet, setdiet] = useState([])

    async function searchQuery(value){
      await setquery(value)
    }
    
    useEffect(() => {
      const search = food.filter(item => {
        return item.name.toLowerCase().includes(query.toLowerCase())
      })
      setresults(search)
    }, [query, food])
    
    const handleFormSubmit = (e) => {
      e.preventDefault()
      console.log(name)
      setfood([...food, {name, image, calories}])
      setname('')
      setimage('')
      setcalories(0)
  }
  
  async function addToTable(index){
    let tableItem = food[index]
    tableItem.quantity = quantity
    tableItem.onTable = true
    const newArr = [...food].filter((el, ind) => ind !== index)
    await newArr.splice(index, 0, tableItem)
    setfood(newArr)
    const onDiet = food.filter(el => el.onTable)
    console.log(onDiet)
    setdiet(onDiet)
  }
  

    return results? (
        <div className="container">
        <h1 className="title">IronNutrition</h1>
        <button style={{float: 'left', margin: '1rem'}} onClick={() => settoggleForm(!toggleForm)}>Add Food</button>
        {toggleForm ? (
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
        <input
          className="input search-bar"
          type='text'
          name='query'
          placeholder="Search"
          value={query}
          onChange={e => searchQuery(e.target.value)}
        />
        <div className="columns">
            <div className='column'>
              {results.map((el, ind) => (
                <div key={ind} className="box">
                  <article className="media">
                      <div className="media-left">
                      <figure className="image is-64x64">
                          <img src={el.image} alt="FoodImage"/>
                      </figure>
                      </div>
                      <div className="media-content">
                      <div className="content">
                          <p>
                          <strong>{el.name}</strong> <br />
                          <small>{el.calories} cal</small>
                          </p>
                      </div>
                      </div>
                      <div className="media-right">
                        <div className="field has-addons">
                            <div className="control">
                                <input type="number" className="input" defaultValue={0} min={0} onChange={e => setquantity(e.target.value)}/>
                            </div>
                            <div className="control">
                                <button className="button is-info" onClick={() => addToTable(ind)}>+</button>
                            </div>
                        </div>
                      </div>
                  </article>
              </div>
              ))}
            </div>
            <div className='column content'>
                <h3>Today's foods</h3>
                <ul>
                    {diet.map((el, ind) => (
                        <li key={ind}>{el.quantity} - {el.name}</li>
                    ))}
                </ul>
                <strong>Total calories on the table {diet.reduce((acc, curr) => acc + (curr.quantity * curr.calories),0)}</strong>
            </div>
          </div>
        </div>
    ) : (
        <h1>Loading...</h1>
    )
}

export default FoodBox
