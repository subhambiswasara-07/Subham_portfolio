import React from 'react'
import Cards from './Cards'
import './cards.css'

const Projectcard = () => {

    const cardData = [
      {
        id: 1,
        text: "CarAge",
        Url: "https://carage.onrender.com/",
        about: "Car showcasing platform",
        desc: "Carage is a modern car showcase website designed with a clean and engaging automotive-focused interface. It features responsive layouts, smooth interactions, and visually appealing sections to create an immersive browsing experience for exploring different cars.",
      },
      {
        id: 2,
        text: "Eventrax",
        about: "Event booking platform",

        Url: "https://eventrax.onrender.com/",
        desc: "EventraX is a full-stack event booking platform where users can discover events, book seats, manage their bookings .it Includes an admin dashboard for managing events and bookings, with a backend handling authentication and booking management.",
      },
      {
        id: 3,
        text: "Hotelhub",
        about:"Hotel showcasing platform",
        Url: "https://hotelhub-ukw1.onrender.com/",
        desc: "Hotel Hub is a frontend hotel booking concept designed to provide a smooth and visually appealing accommodation browsing experience. It includes responsive layouts, modern UI and interactive sections for exploring hotels, rooms, and essential booking information.",
      },
    ];


  return (
    <div className='projectcard'>
          {cardData.map((card) => (
      <Cards key={card.id} card={card} />
          ))}
    </div>
  )
}

export default Projectcard
