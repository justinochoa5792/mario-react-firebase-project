import Navbar from "./component/layout/Navbar";
import { Switch, Route } from "react-router-dom";

import Dashboard from "./component/Dashboard/Dashboard";
import ProjectDetails from "./component/projects/ProjectDetails";
import SignIn from "./component/auth/SignIn";
import SignUp from "./component/auth/SignUp";
import CreateProject from "./component/projects/CreateProject";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/project/:id" component={ProjectDetails} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/create" component={CreateProject} />
      </Switch>
    </div>
  );
}

export default App;
