import React, { useState } from 'react';

const AgeCalculator = () => {
  const [birthDate, setBirthDate] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    const birthDateObj = new Date(birthDate);
    const currentDate = new Date();
    const ageInMilliseconds = currentDate - birthDateObj;
    const ageInYears = Math.floor(ageInMilliseconds / 31557600000); 

    setAge(ageInYears);
  };
  const style1 ={
  
 marginTop:100,
        width: 600, 
        height: 500,
       
      
}
const style2={
    marginTop:10,
    width:300,
    height:30,
    marginBottom:10
    
    
}
const style3={
    marginBottom:20
}

  return (
    <center>
        <div style={style1}>
    <div  >
      <h1 style={{fontWeight:"bold"}} >Age Calculator</h1>
      <h6 style={{marginTop:20}}  >Enter your date of birth</h6>
      <input  style={style2}
        type="date"
        id="birthDate"
        value={birthDate}
        onChange={(e) => setBirthDate(e.target.value) }
      />
      
      <div>
      <button style={style3} class="btn btn-primary" onClick={calculateAge}>Calculate Age</button>
      {age !== null && <h3>Your are {age} years old</h3>}
      </div>
    </div>
    </div>
    </center>
  );
};

export default AgeCalculator;


