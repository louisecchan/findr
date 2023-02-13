import React, { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import database from "./firebase";
import "./TinderCards.css";

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "Ryan Reynolds",
      url: "https://res.cloudinary.com/dlmgs0z2s/image/upload/v1676082346/Ryan_Reynolds_v8brvu.jpg",
    },
    {
      name: "Ryan Gosling",
      url: "https://res.cloudinary.com/dlmgs0z2s/image/upload/v1676082574/Ryan_Gosling_yjic2n.png",
    },
  ]);

  // Piece of code which runs based on a condition
  useEffect(() => {
    // [] below means this will run ONCE only when the component loads

    const unsubscribe = database.collection("people").onSnapshot(snapshot) => (
     setPeople(snapshot.docs.map(doc => doc.data())
    ))

    return () => {
      // this is the cleanup...
      unsubscribe();
    }  

  }, []);
  




  // BAD
  // const people = [];
  // people.push('Erlich', 'Richard')

  // Good (Push to an array)
  // setPeople([...people, 'Erlich','Richard'])

  return (
    <div>
      <h1>Tinder Cards</h1>

      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
