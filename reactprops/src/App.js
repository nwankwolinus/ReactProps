
import './App.css';
import MyProfile from './profile/profile';

function App() {

  function handleName(){

} 

  return (
    <div className="App">
      <div  style = {{backgroundColor: 'Yellow'}}>
      <MyProfile fullName={'Linus Nwankwo'} proffession={`Student`} bio={`GoMyCode Student`} handleName={handleName}/>
    </div>
    </div>
  );
}

export default App;
