import React from 'react';
import './Header.css';
import HomeIcon from '@mui/icons-material/Home';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import SchoolIcon from '@mui/icons-material/School';
import YardIcon from '@mui/icons-material/Yard';
import MobileHeader from './MobileHeader';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme, useMediaQuery } from '@mui/material';


const Header = (prop) => {

  // This will take out the current theme that is been used in the project.
  const theme = useTheme();

  // useMediaWuery will basically check for the breakponts or wwe can seay if it is lower than md
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));



  return (
    <header>
      <nav>
        <ul className='nav-links'>

          {!isMatch ?
            <>
              <div className='d-flex justify-content-center align-items-center' onClick={() => prop.scrollToSection(prop.home)}>
                <HomeIcon />
                <li>Home</li>
              </div>

              <div className='d-flex justify-content-center align-items-center' onClick={() => prop.scrollToSection(prop.skills)}>
                <YardIcon />
                <li>Skills</li>
              </div>

              <div className='d-flex justify-content-center align-items-center' onClick={() => prop.scrollToSection(prop.projects)}>
                <ImportantDevicesIcon />
                <li>My Projects</li>
              </div>


              <div className='d-flex justify-content-center align-items-center' onClick={() => prop.scrollToSection(prop.cert)}>
                <WorkspacePremiumIcon />
                <li>Certificates</li>
              </div>

              <div className='d-flex justify-content-center align-items-center' onClick={() => prop.scrollToSection(prop.qualification)}>
                <SchoolIcon />
                <li>Qualification</li>
              </div>

            </>

            :

            <div className='d-flex justify-content-center align-items-center' onClick={() => prop.show()}>
              <MenuIcon />
              <li>Menus</li>
            </div>
          }


        </ul>
      </nav>

      <MobileHeader
        scrollToSection={prop.scrollToSection}
        home={prop.home}
        skills={prop.skills}
        projects={prop.projects}
        cert={prop.cert}
        qualification={prop.qualification}
        idname={prop.idname}
        variant={prop.variant}
        show={prop.show}
      />

    </header>
  )
}

export default Header
