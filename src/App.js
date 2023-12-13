import TextField from '@mui/material/TextField'
import './App.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button'
import { useState } from 'react';


function App() {
  const [principle, setPriniciple] = useState(0);
  const [interest, setInterest] = useState(0);
  const [year, setYear] = useState(0);
  const [result, setResult] = useState(0);
  const [isPrinciple, setIsPrinciple] = useState(true)
  const[isInterest,setIsInterest]=useState(true)
  const[isYear,setIsYear]=useState(true)


  const calculateInterest = (e) => {
    e.preventDefault();
    const result = (principle * interest * year) / 100;
    console.log("total interest:", result);
    setResult(result)
  }


  const handleReset = () => {
    setPriniciple(0);
    setInterest(0);
    setYear(0);
    setResult(0);
  }

  const validate = (e) => {
    const { name, value } = e.target;
    

    if (name === 'principleValue') {
      setPriniciple(value)
      let res = (!!value.match(/^[0-9]+$/));
      if (res === true) {
        setIsPrinciple(true)
      }
      else {
        setIsPrinciple(false)
      }
    }
    else if (name === 'interestfield') {
      setInterest(value)
      let res = (!!value.match(/^[0-9]+$/));
      if (res === true) {
        setIsInterest(true)
      }
      else {
        setIsInterest(false)
      }
    }
    else{
      setYear(value)
      let res = (!!value.match(/^[0-9]+$/));
      if (res === true) {
        setIsYear(true)
      }
      else {
        setIsYear(false)
      }
    }
  }
  return (
    <>
      <div className='d-flex justify-content-center align-items-center bg-dark ' style={{ height: "100vh" }}>
        <div className='bg-light p-5 rounded' style={{ width: "500px" }}>
          <h1>Simple Interest App</h1>
          <p>Calculate your Simple Interest Easily</p>
          <div style={{ height: "150px" }} className=' flex-column    bg-warning mt-3 rounded d-flex justify-content-center align-items-center'>
            <h2>&#8377;{result}</h2>
            <p>Total Simple Interest</p>
          </div>
          <form action="" className='mt-3' onSubmit={(e) => calculateInterest(e)} >
            <TextField id="outlined-basic" label="&#8377; Principle Amount" variant="outlined" className='w-100' value={principle} name='principleValue'
              onChange={(e) => validate(e)} />
            {
              !isPrinciple &&
              <div>
                <p className='text-danger'>Invalid Input</p>
              </div>
            }

            <TextField id="outlined-basic" label="Rate of Interest(p.a)%" variant="outlined" className='w-100 mt-2' 
            value={interest}
            name='interestfield'
            onChange={(e) => validate(e)} />
            {
              !isInterest&&
              <div>
                <p className='text-danger'>Invalid Input</p>
              </div>
            }

            <TextField id="outlined-basic" label="Year(Yr)" variant="outlined" className='w-100 mt-2'
              
               value={year}
               name="yearz"
               onChange={(e) => validate(e)}
                />
                  {
              !isYear&&
              <div>
                <p className='text-danger'>Invalid Input</p>
              </div>
            }


            <Stack direction="row" spacing={2} className='mt-3'>
              <Button  disabled={isPrinciple && isInterest &&isYear?false:true}      variant="contained" className='bg-success' style={{ height: "50px", width: "200px" }} type='submit'>Calculate</Button>
              <Button variant="contained" style={{ height: "50px", width: "200px", color: "blue" }} className='bg-light' onClick={handleReset}>Reset</Button>
            </Stack>

          </form>



        </div>
      </div>

    </>
  );
}

export default App;
