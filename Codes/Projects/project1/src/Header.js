import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function header(props) {

    return (
        <header>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link"  to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">{props.aboutText}</Link>
                            </li>

                        </ul>

                        <div className="form-check form-switch me-2" >
                            <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" onChange={props.toggleMode} />
                            <label class={`form-check-label text-${props.mode==="light"?'dark':'light'}`} htmlFor="flexSwitchCheckChecked">Enable Dark Mode</label>

                        </div>

                        <form className="d-flex">
                            <input className={`form-control me-2 bg-${props.mode}`} type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>

        </header>


    );
}


header.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string
}

header.defaultProps = {
    title: "Tiltle should be here",
    aboutText: "Your text should be here"
}