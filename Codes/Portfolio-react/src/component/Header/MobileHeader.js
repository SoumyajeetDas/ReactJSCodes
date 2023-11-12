import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import SchoolIcon from '@mui/icons-material/School';
import YardIcon from '@mui/icons-material/Yard';
import CancelIcon from '@mui/icons-material/Cancel';
import './MobileHeader.css';
import { motion } from 'framer-motion'


const MobileHeader = (prop) => {


    // Animation for showing the Menu Bar
    const MenuVaraints1 = {
        hidden: {
            opacity: 0,
            x: -200
        },
        visible: {
            opacity: 1,
            x: 5
        }
    }


    // Animation for removing the Menu Bar
    const MenuVaraints2 = {
        visible: {
            opacity: 1,
            x: 5
        },
        hidden: {
            opacity: 0,
            x: -200
        }
    }

    return (
        <motion.div
            variants={prop.variant.variantName === "MenuVaraints1" ? MenuVaraints1 : MenuVaraints2}
            initial={`${prop.variant.initial}`}
            animate={`${prop.variant.animate}`}
            transition={{ type: "spring" }}
            id={prop.idname}
        >

            <div id="close-button">
                <img src="slogo.png" height="40" width="40" alt="Loading..."></img>
                <motion.div
                    whileHover={{ scale:1.1 }}
                    whileTap={{ scale: 0.9 }}

                    onClick={()=>prop.show()}
                >
                    <CancelIcon sx={{ color: "black"}} />
                </motion.div>
            </div>

            <button className='btn' onClick={() => prop.scrollToSection(prop.home)}>
                <HomeIcon />
                <p className='m-0'>Home</p>
            </button>
            <button className='btn' onClick={() => prop.scrollToSection(prop.skills)}>
                <YardIcon />
                <p className='m-0'>Skills</p>
            </button>
            <button className='btn' onClick={() => prop.scrollToSection(prop.projects)}>
                <ImportantDevicesIcon />
                <p className='m-0'>My Projects</p>
            </button>
            <button className='btn' onClick={() => prop.scrollToSection(prop.cert)}>
                <WorkspacePremiumIcon />
                <p className='m-0'>Certification</p>
            </button>
            <button className='btn' onClick={() => prop.scrollToSection(prop.qualification)}>
                <SchoolIcon />
                <p className='m-0'>Qualification</p>
            </button>
        </motion.div>
    )
}

export default MobileHeader
