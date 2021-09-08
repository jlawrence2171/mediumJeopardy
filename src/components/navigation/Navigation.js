import { Link } from "react-router-dom";

const Navigation = (props) => {

    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/users">Users</Link>
                </li>
                <li>
                    <Link to="/jeopardy">Play Jeopardy</Link>
                </li>
            </ul>
        </nav>
    );

}

export default Navigation;