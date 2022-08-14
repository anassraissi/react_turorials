import React from 'react';
import classNames from 'classnames';
import './App.css';

function Classname_pack() {
   
    // if(3<4){
    //   classes.push('color');
    // } 
    // if(3>2){
    //   classes.push('text_bold');
    // }
    // if(1==1){
    //   classes.push('background_color');
    // }
    // or by classname package
    
   let classes=classNames({'color': 2<3,text_bold: 1==1,background_color: 4<6 });  //put the class when the condition is true

     // classes.join(' ') zid espace mabib les classs  katwali color text_bold background_color
return (
  <div className="App">
    <div className={classes}>  
      i'm testing the classNames backage on div in my exp 
    </div>
  </div>
);
}

export default Classname_pack;