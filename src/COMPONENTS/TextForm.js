import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLowClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleUpLowClick = () => {
            let newText = text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
            setText(newText);
    }
    const clearText = () => {
        let newText = '';
        setText(newText)
    }
    const [countWord, setCountWord] = useState(0);

    const handleOnChange = (event) => {
        // console.log("on change");
        setText(event.target.value);
    }
    const copytext = ()=>{
        var text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    // const textCount = () => {
    //     if (text == "") {
    //         let a = setCountWord(0);
    //         return(a)
    //     }
    //     else {
    //         let b = setCountWord(text.split(" ").length)
    //         return(b)
    //     }
    // }
    // const countWords = () => {
    //     let len;
    //     len = text.split(" ").length;
    //     if (len - 1 == "") {
    //       return len.length - 1;
    //     }
    //     return len.length;
    //   }


    const [text, setText] = useState('');
    return (
        <>
            <div className='container'>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" placeholder='enter the text here to convert' value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>

                </div >
                <div>
                    <button className="btn btn-primary mx-3 my-3" onClick={handleUpClick}> Convert Text to Upper_Case</button>
                    <button className="btn btn-primary mx-3 my-3" onClick={handleLowClick}> Convert Text to Lower_Case</button>
                    <button className="btn btn-primary mx-3 my-3" onClick={handleUpLowClick}> All FIrst Letter in Capital</button>
                    <button className="btn btn-primary mx-3 my-3" onClick={clearText}> Clear Text</button>
                    <button className="btn btn-primary mx-3 my-3" onClick={copytext}> Copy Text</button>
                </div>
                
            </div>
            <div className="container my-3">
                <h1>
                    Your Text Summary
                </h1>
                {/* <p>{countWords} hello </p> */}
                <p>  {text.split(" ").length} Words and {text.length} Characters</p>
            </div>
        </>
    )
}
