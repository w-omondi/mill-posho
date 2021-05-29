import React, { Component } from 'react'
import {motion} from 'framer-motion';


export default class Contact extends Component {
    render() {
        return (
            <>
            <div style={{color:"orange",backgroundColor:"black",width:"100%",height:"90vh",textAlign:"center"}}>

                 <motion.h1
                 initial={{left:-100,x:400,y:200,scale:1.5}}
                  animate={{left:0,x:0,y:0,scale:1}}
                  >This is a contact page</motion.h1>
            </div>
            </>
        )
    }
}
