import React from 'react';
import Home from './components/Home/Home'

class App extends React.Component {
  
    render() {
        return (
            <React.Fragment> <Home/></React.Fragment>
            // <Router>
            //     <div className="nav">
            //         <ul>
            //             <li>
            //                 <Link to="/" className="nav-title">Home</Link>
            //             </li>
            //             <li>
            //                 <Link to="/search" className="nav-title">Search</Link>
            //             </li>
            //         </ul>
            //     </div>
            //     <Switch>
            //         <Route exact path="/">
            //             <Home/>
            //         </Route>
            //         <Route exact path="/search">
            //             <Search />
            //         </Route>
            //     </Switch>
            // </Router>

        );

    }
}

export default App;