
import React, { useEffect, useRef } from "react";
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
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hobbies = () => {
  const sectionRef = useRef(null);

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

  useEffect(() => {
    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          onComplete: () => {
            gsap.set([".hobbies h1", ".hobbies p", ".all-hobbies img"], {
              clearProps: "all",
            });
          },
        });

        tl.fromTo(
          ".hobbies h1, .hobbies p",
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.2, ease: "power2.out" },
        ).fromTo(
          ".all-hobbies img",
          { opacity: 0, scale: 0.7, y: 20 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.4,
            stagger: 0.05,
            ease: "back.out(1.5)",
          },
          "-=0.2",
        );
      }, sectionRef);

      ScrollTrigger.refresh();

      return () => ctx.revert();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div ref={sectionRef} className="hobbies">
      <h1>
        Things I Love <span>Doing</span>
      </h1>
      <p>
        When I am not coding I would be following my hobbies cause I believe
        life is not just about some boring studies and stuff. Here are some of
        the things that make me really happy, motivated, and cheerful, and I
        really enjoy doing these things.
      </p>
      <div className="all-hobbies">
        {things.map((thing) => (
          <img src={thing.image} alt={thing.name} key={thing.id} />
        ))}
      </div>
    </div>
  );
};

export default Hobbies;
