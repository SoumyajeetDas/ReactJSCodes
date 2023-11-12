import 'bootstrap/dist/css/bootstrap.min.css';
import { useRef, useState } from 'react';
import './App.css';
import Certificate from './component/Content/Certificates/Certificate';
import Footer from './component/Footer/Footer';
import Home from './component/Content/Home/Home';
import Project from './component/Content/Projects/Project';
import Skills from './component/Content/Skills/Skills';
import Timeline from './component/Content/Timeline/Timeline';
import Header from './component/Header/Header';


function App() {

  const home = useRef();
  const skills = useRef();
  const projects = useRef();
  const cert = useRef(null);
  const qualification = useRef();


  const [status, setStatus] = useState(false);

  // Initially the menubar wil be kept as display: none so that it is not visible
  const [idname, setIdName] = useState('mob-menubar-initial');


  const [variant, setVariant] = useState({});


  // This show part will be used for the Menu Bar
  const show = () => {
    if (status === false) {
      setVariant({
        variantName: "MenuVaraints1",
        initial: "hidden",
        animate: "visible"
      })
      setStatus(true);
      setIdName("mob-menubar")
    }
    else {
      setVariant({
        variantName: "MenuVaraints2",
        initial: "visible",
        animate: "hidden"
      })
      setStatus(false);
    }
  }


  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behaviour: 'smooth'
    })
  }

  return (
    <div className="App">

      {status && <div id="backdrop" onClick={show}>

      </div>}

      <Header
        scrollToSection={scrollToSection}
        home={home}
        skills={skills}
        projects={projects}
        cert={cert}
        qualification={qualification}
        idname={idname}
        variant={variant}
        show={show}
      />

      <Home home={home} />
      <Skills skills={skills} />
      <Project projects={projects} />
      <Certificate cert={cert} />
      <Timeline qualification={qualification} />
      <Footer />
    </div>
  );
}

export default App;
