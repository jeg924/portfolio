// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import Image from "next/image";
import Carousel from "nuka-carousel";
import Slider from "react-slick";
import React from "react";
import { useMediaQuery } from "react-responsive";

import { BiChevronLeftCircle, BiChevronRightCircle } from "react-icons/bi";

import createWorkout from "../public/images/OutworkSlides/CreateWorkout.png";
import home from "../public/images/OutworkSlides/Home.png";
import myWorkouts from "../public/images/OutworkSlides/MyWorkouts.png";
import browse from "../public/images/OutworkSlides/Browse.png";
import reviewWorkout from "../public/images/OutworkSlides/ReviewWorkout.png";

import menu from "../public/images/ZenithSlides/Menu.png";
import levels from "../public/images/ZenithSlides/Levels.png";
import saving from "../public/images/ZenithSlides/Saving.png";

import csharp from "../public/images/languages/csharpIcon.png";
import javascript from "../public/images/languages/javascriptIcon.png";
import python from "../public/images/languages/pythonIcon.png";
import html from "../public/images/languages/htmlIcon.png";
import cpp from "../public/images/languages/CppIcon.png";
import cssicon from "../public/images/languages/cssIcon.png";

import algolia from "../public/images/tools/algoliaIcon.png";
import docker from "../public/images/tools/dockerIcon.png";
import figma from "../public/images/tools/figmaIcon.png";
import firebase from "../public/images/tools/firebaseIcon.png";
import github from "../public/images/tools/githubIcon.png";
import react from "../public/images/tools/reactIcon.png";

export default function Projects() {
  const wideScreen = useMediaQuery({
    query: "(min-width: 1120px)",
  });
  const narrowScreen = useMediaQuery({
    query: "(max-width: 500px)",
  });

  const outworkCarousalRef = React.useRef();
  const zenithCarousalRef = React.useRef();

  return (
    <div id="Projects" css={{ marginTop: 150 }}>
      <div css={{ display: "flex", justifyContent: "center" }}>
        <h1>Projects</h1>
      </div>
      <Introduction
        title="Outwork"
        description="A React Native app to let friends create their own workouts, share their favorite workouts, and compare stats."
        link="https://github.com/jeg924/WorkoutsApp"
      />
      <Slider
        infinite
        autoplay
        autoplaySpeed={10000}
        pauseOnHover
        fade={narrowScreen ? false : true}
        dots
        ref={outworkCarousalRef}
      >
        <Slide
          carousalRef={outworkCarousalRef}
          headline="Making navigation easy"
          paragraph="Apps like Spotify use the home screen as a springboard into the rest of the app. You can jump back into what you were doing, check out new material that you’ll probably like, or browse what’s popular. I built something similar in Outwork. My algorithm builds a list of workouts the user started but didn’t finish, a profile based on the user’s previous workouts which it uses to recommend new workouts, and a list of the most popular workouts on the app."
          image={home}
          icons={[react, firebase]}
        />
        <Slide
          carousalRef={outworkCarousalRef}
          headline="Making the most of space"
          paragraph="In some places I wanted to give users lots of options but didn’t feel I had the space to do it. Two awesome tools that helped me immensely in this regard were segment controls and action sheets. In the MyWorkouts screen I used a segment control to give users access to the workouts in their history, library, and uploads and an action sheet to manage those workouts."
          image={myWorkouts}
          icons={[react, firebase]}
        />
        <Slide
          carousalRef={outworkCarousalRef}
          headline="Searching with Aloglia"
          paragraph="I used Algolia for the app’s search engine. Whenever a user or workout is created in the app, a firebase function syncs the firestore database with the Algolia database which allowed me to add custom filters that made searching easy and fast. Algolia requires careful attention to the data structures that are indexed, and I learned how to use the Algolia dashboard as I modified the metadata of my workouts and users so that my app would stay functional."
          image={browse}
          icons={[react, algolia, firebase]}
        />
        <Slide
          carousalRef={outworkCarousalRef}
          headline="Scrolling for effect"
          image={createWorkout}
          paragraph="When the create-workout flow I wanted a way to show the user what they had built so far and also quickly give them a way to add exercises to a workout. To do this, I decided to automatically scroll down a list of exercises every time the user added a new one and present them the option to add another exercise in the middle of the screen. I used a reference to the flat-list and a function that fired every time an exercise was added to scroll down with animation."
          icons={[react, firebase]}
        />
        <Slide
          carousalRef={outworkCarousalRef}
          headline="Sharing content between two screens"
          paragraph="One of the challenges I faced early on was sharing content between screens. Because of the way React Stack Navigator stacks screens when navigating back and forth, a screen’s content can’t normally be updated by another screen. To solve this, I passed callbacks with references to state variables to React navigation and used the callback in a modal screen to update the state in the previous screen. Elsewhere in my app I used firebase listeners to automatically refresh a screen once the database had been updated."
          image={reviewWorkout}
          icons={[react, firebase]}
        />
      </Slider>
      <SectionBreak />
      <Introduction
        title="Zenith"
        description="A retro spaceship game I built in collaboration with three classmates. I worked primarily on the level design and saving mechanism."
        link="https://github.com/CpS-209-Team3/Zenith"
      />
      <Slider
        infinite
        autoplay
        autoplaySpeed={10000}
        pauseOnHover
        fade={narrowScreen ? false : true}
        dots
        ref={zenithCarousalRef}
      >
        <Slide
          carousalRef={zenithCarousalRef}
          headline="Building with a team"
          paragraph="One thing I learned while working on Zenith was the importance of playing off the strengths of my team. During level design I initially wanted the levels to progress based off of time, with enemies spawning at regular intervals. However, the game engine and physics of the spaceships that my teammate built ended up working much better when the levels were redesigned as a series of waves culminating in a boss fight."
          image={levels}
          icons={[react]}
          switchTextAndImage
        />
        <Slide
          carousalRef={zenithCarousalRef}
          headline="Using inheritance to save"
          paragraph="My primary responsibility for this project was to build a way for games to save and load. One awesome thing that my teammate and I used to help save time and the game was inheritance. Since saving requires all of the data at that instance to be serialized, having classes inherit a serialize method from their base class made adding features later easy and quick."
          image={menu}
          icons={[react]}
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
  icons,
}) => {
  console.log(icons);
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
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <h3>{headline}</h3>
          {icons.map((icon) => {
            return (
              <div
                css={{
                  width: 30,
                  height: 30,
                  position: "relative",
                }}
              >
                <Image src={icon} width={30} height={30} objectFit="contain" />
              </div>
            );
          })}
        </div>

        <p>{paragraph}</p>
        <div css={{ display: "flex", flexDirection: "row" }}>
          <SlideNavButton direction="left" action={carousalRef} />
          <SlideNavButton direction="right" action={carousalRef} />
        </div>
      </div>
    </div>
  );
};

const SlideNavButton = ({ direction, action }) => {
  return (
    <div
      css={{
        width: 50,
        margin: "auto",
        "@media (max-width: 500px)": { display: "none" },
      }}
    >
      <button
        css={{
          border: "none",
          background: "none",
          color: "#565656",
          ":hover": {
            color: "black",
          },
        }}
        onClick={() => {
          direction === "left"
            ? action.current.slickPrev()
            : action.current.slickNext();
        }}
      >
        {direction === "left" ? (
          <BiChevronLeftCircle size={40} />
        ) : (
          <BiChevronRightCircle size={40} />
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
        marginTop: 20,
        marginBottom: 50,
      }}
    ></div>
  );
};

const Introduction = ({ title, description, link }) => {
  return (
    <div
      css={{
        border: "solid gainsboro 1px",
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        marginTop: 50,
        marginBottom: 20,
      }}
    >
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={link} css={{ textDecorationColor: "blue" }} target="_blank">
        <p css={{ color: "blue" }}>See project on GitHub</p>
      </a>
    </div>
  );
};
