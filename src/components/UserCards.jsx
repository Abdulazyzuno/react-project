import { useEffect, useState } from "react";
import Card from "./Card";
export default function UserCards() {
  const post = "https://jsonplaceholder.typicode.com/users";
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    fetch(post)
      .then((res) => res.json())
      .then((data) => setUserData(data))
      .catch((e) => alert(`Error has occured ${e}`));
  }, []);
  return (
    <div className="cards">
      {userData.map((item) => {
        return (
          <Card
            image={`https://robohash.org/${item.id}`}
            name={item.name}
            username={item.username}
            email={item.email}
          />
        );
      })}
    </div>
  );
}

