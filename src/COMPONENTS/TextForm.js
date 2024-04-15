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
       2    }
    const clearText = () => {
        let newText = '';
        setText(newText)
    }
    const [countWord, setCountWord] = useState(0);

    const handleOnChange = (event) => {
        // console.log("on change");
        setText(event.target.value);
        console.log(text, text.length)
        // text = event.target.value
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



    const [text, setText] = useState('');
    return (
        <>
            <div className='container'>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" placeholder='enter the text here to convert' value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>

                </div >
                <div>
                    <button className="btn btn-primary mx-3 my-2" onClick={handleUpClick}> Convet Text to Upper_Case</button>
                    <button className="btn btn-primary mx-3 my-2" onClick={handleLowClick}> Convet Text to Lower_Case</button>
                    <button className="btn btn-primary mx-3 my-2" onClick={clearText}>Clear Text</button>
                    <button className="btn btn-primary mx-3 my-2" onClick={handleUpLowClick}>All FIrst letter capital</button>
                </div>
                
            </div>
            <div className="container my-3">
                <h1>
                    Your Text Summary
                </h1>
                <p> {text.split(' ').length} Words and {text.length} Characters</p>

            </div>
        </>
    )
}
