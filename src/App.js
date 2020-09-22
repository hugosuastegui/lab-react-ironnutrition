import React, {useState} from 'react';
import FoodBox from './components/FoodBox'
import meals from './foods.json'


function App() {
  const [foods] = useState(meals)
  return(
    <FoodBox foods={foods}></FoodBox>
  )
}

export default App;

// return results ? (
//   <div className="container">
//     <h1 class="title">IronNutrition</h1>
//     <button style={{float: 'left', margin: '1rem'}} onClick={() => setform(!form)}>Add Food</button>
//     {form ? (
//       <form onSubmit={handleFormSubmit}>
//       <label>Name:</label>
//       <input
//         type='text'
//         name='name'
//         value={name}
//         onChange={e => setname(e.target.value)}
//       />
//       <label>Director:</label>
//       <input
//         type='text'
//         name='image'
//         value={image}
//         onChange={e => setimage(e.target.value)}
//       />

//       <label>calories:</label>
//       <input
//         type='text'
//         name='calories'
//         value={calories}
//         onChange={e => setcalories(e.target.value)}
//       />
//       <button>Submit</button>
//     </form>
//     ) : ''}
//     <input
//       className="input search-bar"
//       type='text'
//       name='query'
//       placeholder="Search"
//       value={query}
//       onChange={e => searchQuery(e.target.value)}
//     />
//     <div className="columns">
//         <div className='column'>
//           {results.map((el, ind) => (
//             <FoodBox key={ind} food={el}></FoodBox>
//           ))}
//           </div>
//         <div className='column content'>
//             <h2>Tabla Nutrimental</h2>
//         </div>
//       </div>


//     </div>

// ) : <h1>"Loading"</h1>