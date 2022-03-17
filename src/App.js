import logo from './logo.svg';
import './App.css';
//my create
const number = 55555;
const singers =[
       {name: 'Manna', job: 'singer'},
       {name:'Eva Rahman', job:'Singer2'},
       {name: 'Mim', job: 'singer'},
       {name:'Eva Rahman', job:'Singer2'}
]
// custom css
const singerStyle = {
  color: 'purple',
  backgroundColor: 'white',
  padding: '10px',
  borderRadius: '10px'
}
function App() {
 const nayoks = ['Rubel', 'BappaRaz', 'Kuber', 'Jashim', 'Salman Shah','Riyaz','Nobel']
  return (
    <div className="App">
      {/* {
        nayoks.map(nayok =><li>Name: { nayok}</li>)
        
      }
      {
        nayoks.map(nayok =><Person name={nayok}></Person>)
        
      } */}

      {
        singers.map(singer => <Person name={singer.name}></Person>)
        // singers.map(singer => <Person name={singer.job}></Person>)
      }


      {/* <Person name={nayoks[0]} class= '6' ></Person>
      <Person name={nayoks[1]} class= '7' ></Person>
      <Person name={nayoks[2]} class= '8' ></Person> */}
      
  
      <Friend name= 'Hazrat Mohammud (S)' person='shes nobi'></Friend>
      <Friend name= 'Mohammud(s)' person='piyo nobi'></Friend>
      <Friend name= 'Adum (a)' person='First nobi'></Friend>
      
      
    </div>
  );
}
function Person(props){
  // console.log(props);
  return (
    <div className='persongrid'>
      <div className='person'>
        <h1>{props.name}</h1>
        <p> {props.class}</p>
    </div>
   
    </div>
  )
}

function Friend (props) {

  return (
    <div className='persongrid'>
    <div className='container'>
      <h1>{props.name}</h1>
      <p>Person:{props.person} </p>
    </div>
   
    </div>
  ) 
}
export default App;
