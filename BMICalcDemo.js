import React, {useState} from 'react';

function BMICalcDemo() {
	const [height,setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [name, setName] = useState("");
 
   const calculateBMI  = ()=> {

      var heightSquared = (height/100  * height/100);
      var bmi = weight / heightSquared;
          
      if( bmi < 16)
          window.alert("Hi.."+name+"...You are completely UnderWeight (Severe Thinner)");
      else if( bmi >=16 && bmi < 17)
          window.alert("Hi.."+name+"...You are Moderately UnderWeight (Moderate Thinner)");
      else if( bmi >=17 && bmi < 18.5)
          window.alert("Hi.."+name+"...You are little UnderWeight (Mild Thinness)");
      else if( bmi >= 18.5  && bmi <= 24.99 ){
          window.alert("Hi.."+name+"...You are in a healthy weight range");
      }
      else if(bmi >= 25 && bmi <= 29.9){
        window.alert("Hi.."+name+"...You are overweight");
      }
      else if(bmi >= 30){
        window.alert("Hi.."+name+"...You are obese");
      }  
      bmi = Math.round(bmi * 100) / 100;  
  }  
  return (
    <div className="App">
      <h1>BMI Calculator</h1>
      <label>Please enter your name : </label>
      <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)}/><br/><br/>
      <label>Enter your height in cm : </label>
      <input type="text" name="height" value={height} onChange={(e)=>setHeight(e.target.value)}/><br/><br/>
      <label>Enter your weight in kg : </label>
      <input type="text" name="weight" value={weight} onChange={(e)=>setWeight(e.target.value)}/><br/><br/>
      <button onClick={()=>calculateBMI()}>Calculate BMI</button>
    </div>
  );
}
export default BMICalcDemo;