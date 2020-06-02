import React from "react";
import "./App.css";

import axios from "axios";

import UserList from "./components/UserList";

function App() {
  const [query, setQuery] = React.useState("");
  const [users, setUsers] = React.useState([]);

  const getUsers = React.useCallback(async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users/"
    );
    setUsers(data);
  }, []);

  React.useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <div className="App">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <UserList query={query} users={users}></UserList>
    </div>
  );
}

export default App;
