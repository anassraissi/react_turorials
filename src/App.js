import logo from './logo.svg';
import './App.css';

function App() {
      let classes='';
      if(true){
          classes+='color ';
      }
      if(true){
        classes+='text_bold ';
      }
      if(true){
        classes+='background_color ';
      }
      classes=[''];
      if(true){
        classes.push('color');
      }
      if(true){
        classes.push('text_bold');
      }
      if(true){
        classes.push('background_color');
      }

       // classes.join(' ') zid espace mabib les classs  katwali color text_bold background_color
  return (
    <div className="App">
      <div className={classes.join(' ')}>  
        Test
      </div>
    </div>
  );
}

export default App;
