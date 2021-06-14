import { Link } from 'react-router-dom'
// import '../styles/nav.css'

export default function Nav() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link className="link" exact to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="link" exact to="/login">Login</Link>
                    </li>
                    <li>
                        <Link className="link" exact to="/movieList">Movie List</Link>
                    </li>
                </ul>
            </nav>
        </div>

    )
}