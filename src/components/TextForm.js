import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick =()=>{
    //console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("converted to uppercase!","success");
    }

    const handleLoClick =()=>{
    //console.log("Lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("converted to lowercase!","success");
    }
    
    const handleCopy = ()=>{
      console.log("I am copy")
      var text = document.getElementById('myBox');
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("copied to Clipboard!","success");
    }

    const handleExtraSpaces = ()=>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(""));
      props.showAlert("Extra spaces removed","success");
    }

    const handleClearClick =()=>{
    let newText = "";
    setText(newText)
    props.showAlert("Text cleared","success");
    }

    const handleOnChange =(event)=>{
    console.log("On change");
    setText(event.target.value)
    }
      
    // const handleCopy = () =>{
    //   console.log("I am copy")
    //   var text = document.getElementById('myBox');
    //   text.select();
    //   navigator.clipboard.writeText(text.value);
    // }
    
    const [text, setText] = useState('');
   // text = "new text"//wrong way to change the state
   // setText("new text")//correct way to change the state
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#040c79c7'}}>
        <h1>{props.heading} - {text}</h1>
       <div className="mb-3">
  <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#040c79c7'}} rows="8"></textarea>  
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-2" onClick={handleClearClick}>clear text</button>
<button className="btn btn-primary mx-2" onClick={handleCopy}>Copy text</button>
<button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

    </div>
    <div className="container my-4" style={{color: props.mode==='dark'?'white':'#040c79c7'}}>
      <h2>Your text Summary</h2>
      <p>{text.split("").length} words and {text.length} characters</p>
      <p>{0.008 * text.split("").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
    

    
  )
}
