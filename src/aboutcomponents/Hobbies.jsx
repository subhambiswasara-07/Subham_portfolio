import React from 'react'
import "./hobbies.css";
import anime from "../assets/anime.png";
import movies from "../assets/movies.png";
import cricket from "../assets/cricket.png";
import cube from "../assets/cube.png";
import editing from "../assets/editing.png";
import gaming from "../assets/gaming.png";
import photo from "../assets/photo.png";
import singing from "../assets/singing.png";
import sleeping from "../assets/sleeping.png";
import song from "../assets/songs.png";
import standup from "../assets/standup.png";
import travel from "../assets/travel.png";

const Hobbies = () => {

  const things = [
    { id: 1, name: "Anime", image: anime },
    { id: 2, name: "Movies", image: movies },
    { id: 3, name: "Cricket", image: cricket },
    { id: 4, name: "Cube", image: cube },
    { id: 5, name: "Editing", image: editing },
    { id: 6, name: "Gaming", image: gaming },
    { id: 7, name: "Photography", image: photo },
    { id: 8, name: "Singing", image: singing },
    { id: 9, name: "Sleeping", image: sleeping },
    { id: 10, name: "Song", image: song },
    { id: 11, name: "Stand-up", image: standup },
    { id: 12, name: "Travel", image: travel },
  ];


  return (
    <div className="hobbies">
      <h1>
        Things I Love <span>Doing</span>
      </h1>
      <p>
        when i am not coding i would be following my hobbies cause i beleive
        life is not just about some boring studies and stuff. here are the some
        of things that makes me really happy motivatated and cheerful and i
        really enjoy doing this things{" "}
      </p>
      <div className="all-hobbies">
        {things.map((thing) => (
          
            <img src={thing.image} alt={thing.name} key={thing.id} />
          
        ))}
      </div>
    </div>
  );
}

export default Hobbies
