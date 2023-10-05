import { Link } from "react-router-dom"
import * as userService from '../../utilities/users-service'
import styles from './NavBar.module.css'
function NavBar(props) {

    const handleLogOut = () => {
        // Delegate to the users-service
        userService.logOut();
        // Update state will also cause a re-render
        setUser(null);
    }

    return (
        <div>
            <nav>
                <ul>
                    <Link to="/">Home</Link>
                    <Link to="/todo/new">New List</Link>
                    <li> Create Task</li>
                    <li>Previous Tasks</li>
                    <Link to="" onClick={handleLogOut}>Log out</Link>
                </ul>

                <h1>Welcome, {props.user.name}</h1>
                <h2> To-Do project</h2>
                <h3> WELCOME!!!</h3>

            </nav>
        </div>
    )
}

export default NavBar