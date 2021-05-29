import React, { Component } from 'react'
import { motion } from 'framer-motion';

class home extends Component {
    render() {
        return (
            <div style={{ backgroundColor: "black", width: "100%", height: "90vh", textAlign: "center" }}>
                <div>
                    <motion.p
                    initial={{ fontSize: "50px", color: "blue",x: 400, y: 200  }}
                    animate={{ fontSize: "20px", color: "skyblue", x:0, y: 0 }}
                    >This is home page</motion.p>
                    
                </div>

                <motion.button
                    initial={{ x: "-100vw" }}
                    animate={{ x: 0 }}
                    transition={{ type: "spring", stiffness: 150 }}>
                    get started
                 </motion.button>
            </div>
        )
    }
}

export default home
