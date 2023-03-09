import React, {useState} from 'react';

//wherever i use text its value will be updated here

export default function TextForm(props) {
    const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!", "Success")
}

    const handleDownClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!", "Success")
    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text has been cleared", "Success")
    }

    const handleCopy= () => {
        let newtext = document.getElementById("myBox");
        newtext.select();
        navigator.clipboard.writeText(newtext.value);
        props.showAlert("Copied to Clipboard", "Success")
    }

    const handleFirstCapital = () => {
        //we are performing all operations with text
        const newText = text
        .toLowerCase()
        .split(' ')
        .map(word => {
          return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join(' ');
        setText(newText);
        props.showAlert("First letters has been capitalised", "Success")
    }

    const handleExtraSpaces= () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces are Removed!", "Success")
    }

    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    // text = "new text"; // wrong way
    // setText("newText"); //Correct way to change the state
  return ( 
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
            <textarea className="form-control" value ={text} onChange={handleOnChange} 
                      style={{backgroundColor: props.mode==='dark'?'grey':'white', 
                      color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button className={`btn btn-outline-${props.mode==='dark'?'light':'dark'} mx-2 my-2`} onClick ={handleUpClick}>Convert to Uppercase</button>
        <button className={`btn btn-outline-${props.mode==='dark'?'light':'dark'} mx-2 my-2`} onClick ={handleDownClick}>Convert to Lowercase</button>
        <button className={`btn btn-outline-${props.mode==='dark'?'light':'dark'} mx-2 my-2`} onClick ={handleFirstCapital}>Convert to Titlecase</button>
        <button className={`btn btn-outline-${props.mode==='dark'?'light':'dark'} mx-2 my-2`} onClick ={handleClearClick}>Clear Text</button>
        <button className={`btn btn-outline-${props.mode==='dark'?'light':'dark'} mx-2 my-2`} onClick ={handleCopy}>Copy Text</button>
        <button className={`btn btn-outline-${props.mode==='dark'?'light':'dark'} mx-2 my-2`} onClick ={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words, {text.length} characters.</p>
        <p>{0.008*text.split(" ").length} Minutes read.</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter something in the TextBox to preview here"}</p>
    </div>
    </>
  )
}