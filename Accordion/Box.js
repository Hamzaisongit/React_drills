import React, { useRef, useState } from "react";





const Box = (props)=>{

    const k = useRef(2);

    const [boxStyle,setBoxStyle] = useState([{
        background : '#efefef',
        height : 'fit-content',
        width : '300px',
        margin : '10px',
        padding : '10px',
        borderRadius : '10px',
        transition : '0.3s all'
    },
    {
        display : 'none'
    }
]);

    const click = ()=>{

        k.current =  k.current + 1;

        if(k.current%2===0){
            setBoxStyle([{
                background : '#efefef',
                height : 'fit-content',
                width : '300px',
                margin : '10px',
                padding : '10px',
                borderRadius : '10px',
                transition : '0.3s all'
            },
            {
                display : 'none'
            }
        ])
        }else{
        setBoxStyle((p)=>{
            return [{
                ...p[0]
            },
            {
               display : 'inline-block'
            }
        ]
        })
    }}

    return(
        <>
        <div style={boxStyle[0]}>
        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between',alignItems:'flex-start'}}>
                <p style={{display:'inline-block', color:'grey'}}>{props.que}</p>
                <button style={{display : 'inline-block', marginLeft:'5px', padding:'2px'}} onClick={click}>toggle</button>
            </div>
            <p style={boxStyle[1]}>{props.ans}</p>
        </div>
           
        </>
    )
}

export default Box;