import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLowClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
    }


    const handleOnChange = (event)=>{
        // console.log("on change");
        setText(event.target.value);
        // text = event.target.value;
    }
    const [text, setText] = useState('');
    return (
        <>
        <div className='container'>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" placeholder='enter the text here to convert' value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
                     
                </div >
                <div>
                <button className="btn btn-primary mx-3 my-3" onClick={handleUpClick}> Convet Text to Upper_Case</button>
                <button className="btn btn-primary mx-3 my-3" onClick={handleLowClick}> Convet Text to lower_Case</button>
                </div>
        </div>
        <div className="container my-3">
            <h1>
                Your Text Summary
            </h1>
            <p> {text.split(" ").length} Words and {text.length} Characters</p>
        </div>
        </>
    )
}
