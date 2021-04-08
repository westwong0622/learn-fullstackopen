import React from "react";
import "./App.css";

import Header from "./comp/Header";
import Content from "./comp/Content";

const App: React.FC = () => {
  const courseName = "Half Stack application development";

  interface CoursePartBase {
    name: string;
    exerciseCount: number;
    type: string;
  }

  interface CourseNormalPart extends CoursePartBase {
    type: "normal";
    description: string;
  }
  interface CourseProjectPart extends CoursePartBase {
    type: "groupProject";
    groupProjectCount: number;
  }

  interface CourseSubmissionPart extends CoursePartBase {
    type: "submission";
    description: string;
    exerciseSubmissionLink: string;
  }

  type CoursePart = CourseNormalPart | CourseProjectPart | CourseSubmissionPart;

  const courseParts: CoursePart[] = [
    {
      name: "Fundamentals",
      exerciseCount: 10,
      description: "This is the leisured course part",
      type: "normal",
    },
    {
      name: "Advanced",
      exerciseCount: 7,
      description: "This is the harded course part",
      type: "normal",
    },
    {
      name: "Using props to pass data",
      exerciseCount: 7,
      groupProjectCount: 3,
      type: "groupProject",
    },
    {
      name: "Deeper type usage",
      exerciseCount: 14,
      description: "Confusing description",
      exerciseSubmissionLink: "https://fake-exercise-submit.made-up-url.dev",
      type: "submission",
    },
  ];

  return (
    <div>
      <Header name={courseName} />
      <Content courseParts={courseParts} />
      <p>
        Number of exercises{" "}
        {courseParts.reduce((carry, part) => carry + part.exerciseCount, 0)}
      </p>
    </div>
  );
};

export default App;
