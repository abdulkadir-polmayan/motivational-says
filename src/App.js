import React from 'react';
import './App.scss';



function App() {

  const [formData,setFormData]=React.useState({
    topText:"The motivation came from WISDOM.",
    imgUrl:"https://random.imagecdn.app/650/650"
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

      <div className='product'>
      <div className='firstPage'>
          <div className='cloud'><svg width="1920" height="153" viewBox="0 0 1920 153" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M206.767 130.323C90.2722 145.945 -39.6172 89.4338 -90 59.2256L-10.7392 -105L2002.12 -46.9202C2012.97 26.6809 2021.04 165.171 1966.48 130.323C1898.28 86.7635 1626.7 98.78 1525.32 130.323C1423.94 161.867 1234.08 130.323 1073.11 98.78C912.126 67.2367 852.527 205.427 662.056 130.323C471.584 55.2201 352.386 110.797 206.767 130.323Z" fill="#56CCF2" fill-opacity="0.19"/>
              </svg>
            </div>

          
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
                  <button onClick={sendForm}>Combine</button>
              </form>
              
              <div className='ok'>
                <svg width="16" height="28" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 1C9 0.447715 8.55228 -2.41411e-08 8 0C7.44772 2.41411e-08 7 0.447715 7 1L9 1ZM7.29289 27.7071C7.68342 28.0976 8.31658 28.0976 8.70711 27.7071L15.0711 21.3431C15.4616 20.9526 15.4616 20.3195 15.0711 19.9289C14.6805 19.5384 14.0474 19.5384 13.6569 19.9289L8 25.5858L2.34315 19.9289C1.95262 19.5384 1.31946 19.5384 0.928933 19.9289C0.538409 20.3195 0.538409 20.9526 0.928933 21.3431L7.29289 27.7071ZM7 1L7 27L9 27L9 1L7 1Z" fill="#505050"/>
              </svg>
              </div>
      </div>
      </div>

      <div className='cLine'> 
        <svg viewBox="0 0 1920 196" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M-80 76.2775C-63.1667 47.4441 -54.5 1.77745 19.5 49.7775C77.8033 87.5958 149.35 78.2365 185.23 62.7826C199.603 56.592 214.131 48.0654 229.727 49.3603C258.183 51.7229 293.321 62.4928 318 76.2775C373.5 107.277 460.767 92.4792 484 76.2775C522 49.7775 584.77 61.5995 616.5 76.2775C690 110.277 686 76.2775 772.5 76.2775C859 76.2775 866.5 83.7775 973 83.7775C1079.5 83.7775 1091.5 23.2775 1194 49.7775C1296.5 76.2775 1422.5 23.2775 1452.5 49.7775C1482.5 76.2775 1492.5 102.777 1519 76.2775C1545.5 49.7775 1582.5 -36.7225 1675 19.7775C1767.5 76.2775 1781 76.2775 1890.5 76.2775C1978.1 76.2775 2000 155.944 2000 195.777" stroke="black"/>
          </svg>
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
