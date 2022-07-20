import React from 'react';
import './App.scss';



function App() {

  const [formData,setFormData]=React.useState({
    topText:"The motivation came from WISDOM.",
    imgUrl:"https://random.imagecdn.app/850/650"
  })

function topText(e){
  setFormData(prev=>({
    ...prev,
    topText:e.target.value
  }))
}

function imgUrl(e){
  setFormData(prev=>({
    ...prev,
    imgUrl:e.target.value
  }))
}

function sendForm(e){
  e.preventDefault()
}

console.log(formData)


  return (
    <div className="App">
      <div className='firstPage'>
      <svg width="1920" height="153" viewBox="0 0 1920 153" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M206.767 130.323C90.2722 145.945 -39.6172 89.4338 -90 59.2256L-10.7392 -105L2002.12 -46.9202C2012.97 26.6809 2021.04 165.171 1966.48 130.323C1898.28 86.7635 1626.7 98.78 1525.32 130.323C1423.94 161.867 1234.08 130.323 1073.11 98.78C912.126 67.2367 852.527 205.427 662.056 130.323C471.584 55.2201 352.386 110.797 206.767 130.323Z" fill="#56CCF2" fill-opacity="0.19"/>
        </svg>
        <div className='headLine'>
          <h1>
          <span className='own'>create your own</span> 
          <br></br>
            <span className='mot'>MOTİVATİON</span>
          </h1>

        </div>
          <svg className='line' width="459" height="2" viewBox="0 0 459 2" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.5 1H458.5" stroke="black" stroke-width="2"/>
          </svg>

        <div>
          <form>
              <textarea placeholder='your motivation...' onChange={topText}/>
              <input placeholder='inspired image...' onChange={imgUrl} />
              <button onClick={sendForm}>submit</button>
          </form>
      </div>

      
      
      
        <div className='result'>  
              <h1>{formData.topText}</h1>
              <img src={formData.imgUrl}></img>
              <div></div>
        </div>
      </div>
    </div>
  );
}

export default App;
