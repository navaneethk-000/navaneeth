// import { useEffect, useState } from "react";

// // id, size, x, y, opacity, animationDuration
// // id, size, x, y, delay, animationDuration

// export const StarBackground = () => {
//   const [stars, setStars] = useState([]);
//   const [meteors, setMeteors] = useState([]);

//   useEffect(() => {
//     generateStars();
//     generateMeteors();

//     const handleResize = () => {
//       generateStars();
//     };

//     window.addEventListener("resize", handleResize);

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const generateStars = () => {
//     const numberOfStars = Math.floor(
//       (window.innerWidth * window.innerHeight) / 10000
//     );

//     const newStars = [];

//     for (let i = 0; i < numberOfStars; i++) {
//       newStars.push({
//         id: i,
//         size: Math.random() * 3 + 1,
//         x: Math.random() * 100,
//         y: Math.random() * 100,
//         opacity: Math.random() * 0.5 + 0.5,
//         animationDuration: Math.random() * 4 + 2,
//       });
//     }

//     setStars(newStars);
//   };

//   const generateMeteors = () => {
//     const numberOfMeteors = 4;
//     const newMeteors = [];

//     for (let i = 0; i < numberOfMeteors; i++) {
//       newMeteors.push({
//         id: i,
//         size: Math.random() * 2 + 1,
//         x: Math.random() * 100,
//         y: Math.random() * 20,
//         delay: Math.random() * 15,
//         animationDuration: Math.random() * 3 + 3,
//       });
//     }

//     setMeteors(newMeteors);
//   };

//   return (
//     <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
//       {stars.map((star) => (
//         <div
//           key={star.id}
//           className="star animate-pulse-subtle"
//           style={{
//             width: star.size + "px",
//             height: star.size + "px",
//             left: star.x + "%",
//             top: star.y + "%",
//             opacity: star.opacity,
//             animationDuration: star.animationDuration + "s",
//           }}
//         />
//       ))}

//       {meteors.map((meteor) => (
//         <div
//           key={meteor.id}
//           className="meteor animate-meteor"
//           style={{
//             width: meteor.size * 50 + "px",
//             height: meteor.size * 2 + "px",
//             left: meteor.x + "%",
//             top: meteor.y + "%",
//             animationDelay: meteor.delay,
//             animationDuration: meteor.animationDuration + "s",
//           }}
//         />
//       ))}
//     </div>
//   );
// };


import { useEffect, useState } from "react";

const Star = ({ size, x, y, opacity, animationDuration, color }) => {
  const starStyle = {
    width: size + "px",
    height: size + "px",
    left: x + "%",
    top: y + "%",
    opacity: opacity,
    animationDuration: animationDuration + "s",
    backgroundColor: color,
  };

  return <div className="star animate-twinkle" style={starStyle} />;
};

const Meteor = ({ size, x, y, delay, animationDuration }) => {
  const meteorStyle = {
    width: size * 50 + "px",
    height: size * 2 + "px",
    left: x + "%",
    top: y + "%",
    animationDelay: delay + "s",
    animationDuration: animationDuration + "s",
  };

  return <div className="meteor animate-meteor" style={meteorStyle} />;
};

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    generateStars();
    generateMeteors();

    const handleResize = () => {
      generateStars();
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 8000 // Adjust density as needed
    );

    const newStars = [];
    const colors = ["#f8f8ff", "#f0fff0", "#e0ffff", "#fffacd", "#ffffff"];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 2 + 0.5, // Smaller stars
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.4 + 0.6, // Slightly higher base opacity
        animationDuration: Math.random() * 3 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    setStars(newStars);
  };

  const generateMeteors = () => {
    const numberOfMeteors = 3; // Adjust number of meteors
    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      const startY = Math.random() * 30 - 10; // Start from slightly above the viewport
      const angle = -45 + (Math.random() * 20 - 10); // Slight variation in angle

      newMeteors.push({
        id: i,
        size: Math.random() * 1.5 + 0.8,
        x: Math.random() * 120 - 20, // Start from outside the left edge
        y: startY,
        delay: Math.random() * 15,
        animationDuration: Math.random() * 2 + 3,
        angle: angle,
      });
    }

    setMeteors(newMeteors);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <Star key={star.id} {...star} />
      ))}

      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            width: meteor.size * 60 + "px", // Slightly longer meteors
            height: meteor.size * 2 + "px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            animationDelay: meteor.delay + "s",
            animationDuration: meteor.animationDuration + "s",
            transform: `rotate(${meteor.angle}deg)`,
          }}
        />
      ))}
    </div>
  );
};
