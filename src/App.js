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

      <div className='headLine'>
        <h1>
        create your own 
        <br></br>
          MOTİVATİON
        </h1>
      </div>

      <div>
        <form>
            <input onChange={topText}/>
            <input onChange={imgUrl} />
            <button onClick={sendForm}>submit</button>
        </form>
      
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
