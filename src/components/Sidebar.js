import { Link } from "react-router-dom";

function Sidebar() {

    return (

        <aside className="sidebar">

            <h2 className="sidebar-logo">
                🤖 AIFlow
            </h2>

            <ul>

                <li>
                    <Link to="/">🏠 Home</Link>
                </li>

                <li>
                    <Link to="/dashboard">📊 Dashboard</Link>
                </li>

                <li>
                    <a href="/">🤖 AI Agents</a>
                </li>

                <li>
                    <a href="/">⚡ Workflows</a>
                </li>

                <li>
                    <a href="/">📈 Analytics</a>
                </li>

                <li>
                    <a href="/">⚙ Settings</a>
                </li>

            </ul>

        </aside>

    );

}

export default Sidebar;