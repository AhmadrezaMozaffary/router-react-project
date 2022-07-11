import { Link, Route } from "react-router-dom";

const Welcome = () => {
  return (
    <section>
      <h1> Welcome page</h1>
      <p>Are you new user ? {<Link to="/welcome/new-user">Click Me</Link>}</p>
      <Route path="/welcome/new-user">🎉Welcome new user</Route>
    </section>
  );
};

export default Welcome;
