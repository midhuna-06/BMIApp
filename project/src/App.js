import React, { useState } from 'react';
import './App.css'
const App = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [result, setResult] = useState('');
  const [value, setValue] = useState(null);
  const [errormsg, setErrormsg] = useState('');
  const [suggestion, setSuggestion] = useState('');

  function calculate() {
    const isValidHeight = /^\d+$/.test(height);
    const isValidWeight = /^\d+$/.test(weight);
    if (isValidHeight && isValidWeight) {
      const bmiValue = Number(weight) / (Number(height / 100) * Number(height / 100));
      setValue(bmiValue.toFixed(2));
      setErrormsg('');
      if (bmiValue < 19) {
        setResult('Underweight');
        setSuggestion('Consider eating more nutritious, calorie-dense foods. Include protein, whole grains, and healthy fats in your diet.');
      } else if (bmiValue >= 19 && bmiValue <= 25) {
        setResult('Normal');
        setSuggestion('Great job! Maintain a balanced diet and regular exercise to stay healthy.');
      } else {
        setResult('Overweight');
        setSuggestion('Incorporate more physical activity into your routine. Focus on portion control and a balanced, low-calorie diet.');
      }
    } else {
      setErrormsg('Please enter valid height and weight values.');
    }
  }

  function clear() {
    setHeight('');
    setWeight('');
    setResult('');
    setValue('');
    setErrormsg('');
    setSuggestion('');
  }

  return (
    <div>
      <h2>BMI Calculator</h2>
      {errormsg && <p>{errormsg}</p>}
      <div className="input">
        <label>Enter Height (cm)</label>
        <input type="text" value={height} onChange={(e) => setHeight(e.target.value)} />
        <label>Enter Weight (kg)</label>
        <input type="text" value={weight} onChange={(e) => setWeight(e.target.value)} />
      </div>
      <button onClick={calculate}>Calculate</button>
      <button onClick={clear}>Clear</button>
      {value && (
        <>
          <p>BMI VALUE: {value}</p>
          <p>BMI STATUS: {result}</p>
          <div className="suggestion">
            <h4>Suggestion:</h4>
            <p>{suggestion}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
