import React from "react";
import java from "../assets/java.png";
import python from "../assets/python.webp";
import mongoDB from "../assets/mongodb.jpg";
import express from "../assets/express.png";
import reactjs from "../assets/reactjs.png";
import nodejs from "../assets/node.png";
import PortfolioCard from "./PortfolioCard";
import forg from "../assets/forg.png"
import bc from "../assets/bc.png"

function PxortFolio() {
  const cardItem = [
    {
      id: 1,
      logo: mongoDB,
      name: "MongoDB",
    },
    {
      id: 2,
      logo: express,
      name: "Express",
    },
    {
      id: 3,
      logo: reactjs,
      name: "ReactJS",
    },
    {
      id: 4,
      logo: nodejs,
      name: "NodeJS",
    },
    {
      id: 5,
      logo: python,
      name: "Python",
    },
    {
      id: 6,
      logo: java,
      name: "Java",
    },
  ];
  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">PortFolio</h1>
        <span className=" underline font-semibold">Featured Projects</span>
        <div className="flex flex-wrap gap-x-6 my-5">
          <PortfolioCard
            imageUrl={
              forg
            }
            title={"Image Forgery Detection"}
            description={
              "An image forgery detection system powered by Convolutional Neural Networks (CNN). It analyzes image patterns to detect manipulations with high accuracy. This project showcases my expertise in deep learning and pattern recognition."

            }
            demoLink={"https://github.com/Codeharishh/Mini-Project"}
            // projectLink={"https://github.com/UttkarrshhPal/Movie-App"}
          />
          <PortfolioCard
            imageUrl={
              bc
            }
            title={"Bites & Cheers"}
            description={
              "App design whih is named as Bites & Cheers is a modern UI/UX design for nightlife and dining. The wireframing process shaped user flows, from basic layouts to polished designs. Key features include sweets and beverages listings and order placing , and social interactions."
            }
            demoLink={"https://www.behance.net/harishsenthil3"}
            // projectLink={"https://github.com/UttkarrshhPal/Spotify_Clone"}
          />
          {/* <PortfolioCard
            imageUrl={
              "https://utfs.io/f/bca7e4a9-a7b7-408b-9d6a-55923b780283-hoodjr.png"
            }
            title={"Algorithm Visualiser"}
            description={
              "An engaging algorithm visualizer designed to make complex concepts accessible. Built with HTML, CSS, and JavaScript, this project showcases my ability to create educational tools with clear, real-time visual representations of sorting, searching, and graph algorithms."
            }
            demoLink={"https://splendorous-croquembouche-09ba47.netlify.app/"}
            projectLink={
              "https://github.com/UttkarrshhPal/Algorithm-Visualiser"
            }
          /> */}
        </div>
      </div>
    </div>
  );
}

export default PxortFolio;
