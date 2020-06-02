import React from "react";

export default function UserList({ users, query }) {
  const filter = (users, query) => {
    console.log("FILTRADO PORRA")
    return users.filter((user) => user.name.toLowerCase().includes(query.toLowerCase()));
  };

  const filtered = React.useMemo(()=> filter(users, query),[users, query]);
  

  return filtered.map((user) => <div key={user.id}>{user.name}</div>);
}
