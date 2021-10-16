import React, {useState}from 'react'

const Position = () => {
    const [enterMouse, setEnterMouse] = useState("");
    const [enterMouseLeft, setEnterMouseLeft] = useState("");
    const [enterMouseRight, setEnterMouseRight] = useState("");
    const [enterMouseBottom, setEnterMouseBottom] = useState("");
    const [mouseOut, setMouseOut] = useState("");
    
    const onMouseTop = ()=>{
        setEnterMouse(!enterMouse);   
    }
    const onMouseLeft = ()=> {
        setEnterMouseLeft(!enterMouseLeft);
    }
    const onMouseRight = ()=> {
        setEnterMouseRight(!enterMouseRight);
    }
    const onMouseBottom = ()=> {
        setEnterMouseBottom(!enterMouseBottom);
    }
    const onMouseOut = ()=> {
        setMouseOut(!mouseOut);
    }
    return (
        <div>
            <div className={`tooltip ${enterMouse ? "active" : mouseOut}`}>This is Top Tooltip</div>
            <button className="tooltip-btn" 
            onMouseEnter={() => setEnterMouse(onMouseTop)}
            onMouseLeave={() => setEnterMouse(onMouseOut)}
            >Click me to see Tooltip</button>

            <div className={`tooltip_left ${enterMouseLeft ? "active" : mouseOut}`}>This is Left Tooltip</div>
            <button className="tooltip_btn_left" 
            onMouseEnter={() => setEnterMouseLeft(onMouseLeft)}
            onMouseLeave={() => setEnterMouseLeft(onMouseOut)}
            >Click me to see Tooltip</button>

            <div className={`tooltip_right ${enterMouseRight ? "active" : mouseOut}`}>This is Right Tooltip</div>
            <button className="tooltip_btn_right" 
            onMouseEnter={() => setEnterMouseRight(onMouseRight)}
            onMouseLeave={() => setEnterMouse(onMouseOut)}
            >Click me to see Tooltip</button>

            <div className={`tooltip_bottom ${enterMouseBottom ? "active" : mouseOut}`}>This is Bottom Tooltip</div>
            <button className="tooltip_btn_bottom" 
            onMouseEnter={() => setEnterMouseBottom(onMouseBottom)}
            onMouseLeave={() => setEnterMouseBottom(onMouseOut)}
            >Click me to see Tooltip</button>
        </div>
    )
}

export default Position
