// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css, Global } from "@emotion/react";
import React from "react";
import Image from "next/image";
import Carousel from "nuka-carousel";

import createWorkout from "../public/images/OutworkSlides/CreateWorkout.png";
import home from "../public/images/OutworkSlides/Home.png";
import myWorkouts from "../public/images/OutworkSlides/MyWorkouts.png";
import browse from "../public/images/OutworkSlides/Browse.png";
import workoutAndReview from "../public/images/OutworkSlides/WorkoutAndReview.png";
import video from "../public/images/OutworkSlides/Video.png";
import profile from "../public/images/OutworkSlides/Profile.png";

import menu from "../public/images/ZenithSlides/Menu.png";
import levels from "../public/images/ZenithSlides/Levels.png";
import boss from "../public/images/ZenithSlides/Boss.png";

export default function Projects() {
  return (
    <div>
      <div css={{ display: "flex", justifyContent: "center" }}>
        <h1>Projects</h1>
      </div>
      <Introduction
        title="Outwork"
        description="A react-native app to let friends create their own workouts, share their favorite workouts, and compare stats."
      />
      <Carousel
        autoplay
        autoplayInterval={15000}
        renderCenterRightControls={null}
        renderCenterLeftControls={null}
      >
        <Slide
          headline="Easy to jump around and pick up where you left off"
          paragraph="I modeled the home screen after the home screen in the Spotify app. The main idea is that users can quickly jump back into whatever they were doing. Whether they were finishing a workout, updating their profile, or looking for a popular or new workout that fits their style."
          image={home}
        />
        <Slide
          headline="Previous workouts are easy to access"
          paragraph="The My Workouts screen allows users to browse their history, favorites (library), and uploads. It also gives  them a chance to start or remove any of the workouts that they find in these three categories, or in the case of a workout that they uploaded, it gives them the chance to edit or delete that workout however they choose."
          image={myWorkouts}
        />
        <Slide
          headline="Browsing made easy"
          paragraph="The browse screen works with Algolia ( a search engine tool ) to provide advanced filtering and lightning quick results, even if there are thousands of data points to sort through."
          image={browse}
        />
        <Slide
          headline="Easy to create your own workouts"
          paragraph="The create-workout flow uses the same large button that appears elsewhere in the app for familiarity. Automatic scrolling and minimalistic active buttons make the user-experience easy and intuitive."
          image={createWorkout}
        />
        <Slide
          headline="Competing with your friends is easy."
          paragraph="Simply review your stats and choose a friend to compare with. The workout flow is robust; taking into account unfinished workouts, blank stats input, and requests to compare with friends who haven't completed that particular workout yet."
          image={workoutAndReview}
        />
        <Slide
          headline="Move through the workout one exercise at a time"
          paragraph="The exercise videos guide the users through the workout and use a custom interface for inputting stats. If the exercise tracks reps, or weight and reps, or time, the interface will adapt accordingly to make the user experience as smooth as possible."
          image={video}
          switchTextAndImage
        />
        <Slide
          headline="Add friends and edit your profile"
          paragraph="It's easy to edit your profile in Outwork. The UI is minimalistic, which means you don't have to scroll through settings you don't need to edit your profile. To add or remove a friend, you can simply use the Browse tab to search users by name and click the 'Add Friend' button beneath their profile picture."
          image={profile}
        />
      </Carousel>
      <SectionBreak />
      <Introduction
        title="Zenith"
        description="A retro spaceship game I helped build with three of my schoolmates. I worked primarily on the level design and saving mechanism."
      />
      <Carousel
        autoplay
        autoplayInterval={10000}
        pauseOnHover
        renderCenterRightControls={null}
        renderCenterLeftControls={null}
      >
        <Slide
          headline="Classic Arcade Style"
          paragraph="We built a familiar title screen that features game loading, difficulty settings, instructions, high scores, and credits."
          image={menu}
        />
        <Slide
          headline="Level Design"
          paragraph="Levels are made up of waves of enemy ships and asteroids to juke and shoot down with lasers."
          image={levels}
        />
        <Slide
          headline="Saving Mechanism"
          paragraph="I learned how to serialize data and extract it again for loading from a save. The use of classes and inheritance from my teammates made my job much simpler."
          image={boss}
        />
      </Carousel>
      <SectionBreak />
    </div>
  );
}

const Introduction = ({ title, description }) => {
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
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

const Slide = ({ headline, paragraph, image, switchTextAndImage }) => {
  return switchTextAndImage ? (
    <div
      css={{
        display: "flex",
        flexDirection: "row",
        "@media (max-width: 300px)": {
          flexDirection: "column",
          alignItems: "center",
        },
      }}
    >
      <div css={{ flex: 1.5, position: "relative", width: "100%" }}>
        <Image src={image} layout="responsive" objectFit="contain" />
      </div>
      <div css={{ flex: 1 }}>
        <h3>{headline}</h3>
        <p>{paragraph}</p>
      </div>
    </div>
  ) : (
    <div
      css={{
        display: "flex",
        flexDirection: "row",
        "@media (max-width: 300px)": {
          flexDirection: "column",
          alignItems: "center",
        },
      }}
    >
      <div css={{ flex: 1 }}>
        <h3>{headline}</h3>
        <p>{paragraph}</p>
      </div>
      <div css={{ flex: 1.5, position: "relative", width: "100%" }}>
        <Image src={image} layout="responsive" objectFit="contain" />
      </div>
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