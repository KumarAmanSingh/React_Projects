import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpperCaseclick=()=>{
        let newText = Text.toUpperCase();
        setText(newText);
    }

    const handleLowerCaseclick=()=>{
        let newText = Text.toLowerCase();
        setText(newText);
    }
    const handleClearText=()=>{
        let newText = ''
        setText(newText);
    }
    const handleReverseText=()=>{
        let newText=''
        for(let i=Text.length-1;i>=0;i--){
            newText+=Text[i];
        }
        setText(newText);
    }
    // taken from comments
    const speak = () => {
        let msg = new SpeechSynthesisUtterance(Text);
        window.speechSynthesis.speak(msg);
        const toogle = document.getElementById('toggle')
        if (toogle.textContent === "Speak") {
            toogle.innerHTML = "Stop"
        }
        else {
            toogle.innerHTML = "Speak"
            if(toogle.innerHTML = "Speak"){
                window.speechSynthesis.cancel()
            }
        }
    }

    const handleOnchange=(event)=>{
        setText(event.target.value)
    }
    const [Text, setText] = useState(''); //sets useState value 
    // Text="new Text" //wrong way to set text
    // setText("new Text");
  return (
    <>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
      <form>
      <div className="mb-3">
        <h1>{props.heading}</h1>
    <textarea className="form-control" id="mybox" onChange={handleOnchange} style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='light'?'black':'white'}} rows="8" value={Text}></textarea>
    </div>
    </form>
    <button className="btn btn-primary mx-2" onClick={handleUpperCaseclick}>Convert to UpperCase</button>
    <button className="btn btn-primary mx-2" onClick={handleLowerCaseclick}>Convert to LowerCase</button>
    <button className="btn btn-primary mx-2"  onClick={handleClearText}>Clear Text</button>
    <button className="btn btn-primary"  onClick={handleReverseText}>ReverseText</button>
    <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2" id="toggle">Speak</button>
    </div>
    <div className="container my-2" style={{color:props.mode==='dark'?'white':'black'}}> 
        <h1>Your Text Summary</h1>
        <p>{Text.split(" ").length} words and {Text.length} characters</p>
        <p>{0.008*Text.split(" ").length} minutes to read</p>
        <p>{Text}</p>

    </div>
    </>
  )
}
