import { NavLink } from "react-router-dom";
function Home(){
    return(
        <div className="home">
            <p>Homepage</p>
            <ul className="header">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/createSheet">Make Sheet</NavLink></li>
          <li><NavLink to="/noPage">Error</NavLink></li>
        </ul>
        </div>
    );
}

export default Home;