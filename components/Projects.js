// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import Image from "next/image";
import Carousel from "nuka-carousel";
import Slider from "react-slick";
import React from "react";
import { useMediaQuery } from "react-responsive";

import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

import algolia from "../public/images/tools/algoliaIcon.png";
import firebase from "../public/images/tools/firebaseIcon.png";
import react from "../public/images/tools/reactIcon.png";
import whimsical from "../public/images/tools/whimsicalIcon.png";

import createWorkout from "../public/images/OutworkSlides/CreateWorkout.png";
import home from "../public/images/OutworkSlides/Home.png";
import myWorkouts from "../public/images/OutworkSlides/MyWorkouts.png";
import browse from "../public/images/OutworkSlides/Browse.png";
import reviewWorkout from "../public/images/OutworkSlides/ReviewWorkout.png";

import visualStudio from "../public/images/tools/visualstudio.png";

import menu from "../public/images/ZenithSlides/Menu.png";
import levels from "../public/images/ZenithSlides/Levels.png";

export default function Projects() {
  const outworkCarousalRef = React.useRef();
  const zenithCarousalRef = React.useRef();

  return (
    <div id="Projects" css={{ marginTop: 150 }}>
      <div css={{ display: "flex", justifyContent: "center" }}>
        <h1>Projects</h1>
      </div>
      <Introduction
        title="Outwork"
        icons={[react, algolia, firebase, whimsical]}
        description="A React Native app to let friends create their own workouts, share their favorite workouts, and compare stats."
        link="https://github.com/jeg924/WorkoutsApp"
      />
      <Slider
        infinite
        autoplay
        autoplaySpeed={10000}
        pauseOnHover
        fade={true}
        dots
        ref={outworkCarousalRef}
      >
        <Slide
          carousalRef={outworkCarousalRef}
          headline="Making navigation easy"
          paragraph="Apps like Spotify use the home screen as a springboard into the rest of the app. You can jump back into what you were doing, check out new material that you’ll probably like, or browse what’s popular. I built something similar in Outwork. My algorithm builds a list of workouts the user started but didn’t finish, a profile based on the user’s previous workouts which it uses to recommend new workouts, and a list of the most popular workouts on the app."
          image={home}
        />
        <Slide
          carousalRef={outworkCarousalRef}
          headline="Making the most of space"
          paragraph="In some places I wanted to give users lots of options but didn’t feel I had the space to do it. Two awesome tools that helped me immensely in this regard were segment controls and action sheets. In the MyWorkouts screen I used a segment control to give users access to the workouts in their history, library, and uploads and an action sheet to manage those workouts."
          image={myWorkouts}
        />
        <Slide
          carousalRef={outworkCarousalRef}
          headline="Searching with Aloglia"
          paragraph="I used Algolia for the app’s search engine. Whenever a user or workout is created in the app, a firebase function syncs the firestore database with the Algolia database which allowed me to add custom filters that made searching easy and fast. Algolia requires careful attention to the data structures that are indexed, and I learned how to use the Algolia dashboard as I modified the metadata of my workouts and users so that my app would stay functional."
          image={browse}
        />
        <Slide
          carousalRef={outworkCarousalRef}
          headline="Scrolling for effect"
          image={createWorkout}
          paragraph="When the create-workout flow I wanted a way to show the user what they had built so far and also quickly give them a way to add exercises to a workout. To do this, I decided to automatically scroll down a list of exercises every time the user added a new one and present them the option to add another exercise in the middle of the screen. I used a reference to the flat-list and a function that fired every time an exercise was added to scroll down with animation."
        />
        <Slide
          carousalRef={outworkCarousalRef}
          headline="Sharing content between two screens"
          paragraph="One of the challenges I faced early on was sharing content between screens. Because of the way React Stack Navigator stacks screens when navigating back and forth, a screen’s content can’t normally be updated by another screen. To solve this, I passed callbacks with references to state variables to React navigation and used the callback in a modal screen to update the state in the previous screen. Elsewhere in my app I used firebase listeners to automatically refresh a screen once the database had been updated."
          image={reviewWorkout}
        />
      </Slider>
      <SectionBreak />
      <Introduction
        title="Zenith"
        icons={[visualStudio]}
        description="A retro spaceship game I built in collaboration with three classmates. I worked primarily on the level design and saving mechanism."
        link="https://github.com/CpS-209-Team3/Zenith"
      />
      <Slider
        infinite
        autoplay
        autoplaySpeed={10000}
        pauseOnHover
        fade={true}
        dots
        ref={zenithCarousalRef}
      >
        <Slide
          carousalRef={zenithCarousalRef}
          headline="Building with a team"
          paragraph="One thing I learned while working on Zenith was the importance of playing off the strengths of my team. During level design I initially wanted the levels to progress based off of time, with enemies spawning at regular intervals. However, the game engine and physics of the spaceships that my teammate built ended up working much better when the levels were redesigned as a series of waves culminating in a boss fight."
          image={levels}
          switchTextAndImage
        />
        <Slide
          carousalRef={zenithCarousalRef}
          headline="Using inheritance to save"
          paragraph="My primary responsibility for this project was to build a way for games to save and load. One awesome thing that my teammate and I used to help save time and the game was inheritance. Since saving requires all of the data at that instance to be serialized, having classes inherit a serialize method from their base class made adding features later easy and quick."
          image={menu}
          switchTextAndImage
        />
      </Slider>
      <SectionBreak />
    </div>
  );
}

const Slide = ({
  carousalRef,
  headline,
  paragraph,
  image,
  switchTextAndImage,
}) => {
  return (
    <div
      css={{
        display: "flex",
        flexDirection: switchTextAndImage ? "row" : "row-reverse",
        "@media (max-width: 500px)": {
          flexDirection: "column",
          alignItems: "center",
        },
      }}
    >
      <div
        css={{
          flex: 1.5,
          position: "relative",
          width: "100%",
        }}
      >
        <Image src={image} objectFit="contain" width={500} height={400} />
      </div>
      <div
        css={{
          flex: 1,
          marginRight: "auto",
          marginLeft: "auto",
          "@media (max-width: 500px)": { marginTop: 20 },
        }}
      >
        <div
          css={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
            "@media (max-width: 500px)": {
              flexDirection: "column",
              alignItems: "center",
            },
          }}
        >
          <SlideNavButton direction="left" action={carousalRef} />
          <h3>{headline}</h3>
          <SlideNavButton direction="right" action={carousalRef} />
        </div>
        <p>{paragraph}</p>
      </div>
    </div>
  );
};

const SlideNavButton = ({ direction, action }) => {
  return (
    <div
      css={{
        "@media (max-width: 500px)": {
          display: "none",
        },
      }}
    >
      <button
        css={{
          border: "none",
          background: "none",
          ":hover": {
            transform: "scale(1.2, 1.2)",
          },
        }}
        onClick={() => {
          direction === "left"
            ? action.current.slickPrev()
            : action.current.slickNext();
        }}
      >
        {direction === "left" ? (
          <BsArrowLeftShort size={25} />
        ) : (
          <BsArrowRightShort size={25} />
        )}
      </button>
    </div>
  );
};

const SectionBreak = () => {
  return (
    <div
      css={{
        border: "solid gainsboro 1px",
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        marginTop: 50,
        marginBottom: 50,
      }}
    ></div>
  );
};

const Introduction = ({ title, icons, description, link }) => {
  return (
    <div
      css={{
        border: "solid gainsboro 1px",
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        marginTop: 50,
        marginBottom: 50,
      }}
    >
      <div
        css={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          "@media (max-width: 500px)": {
            flexDirection: "column",
            justifyContent: "center",
          },
        }}
      >
        <h2>{title}</h2>
        <div
          css={{ display: "flex", flexDirection: "row", alignItems: "center" }}
        >
          {icons.map((icon, index) => {
            return (
              <Image
                key={String(index)}
                src={icon}
                width={30}
                height={30}
                objectFit="contain"
              />
            );
          })}
        </div>
      </div>
      <p>{description}</p>
      <a href={link} css={{ textDecorationColor: "blue" }} target="_blank">
        <p css={{ color: "blue" }}>See project on GitHub</p>
      </a>
    </div>
  );
};

const ToolsUsed = ({ icons }) => {
  return <div css={{ border: "solid #565656 1px", borderRadius: 20 }}></div>;
};
