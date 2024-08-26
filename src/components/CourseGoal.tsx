import { Children, ReactNode } from "react";

type CourseGoal = {
  title: string;
  children: ReactNode
};

const CourseGoal = ({ title, children}: CourseGoal) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button>Delete</button>
    </article>
  );
};

export default CourseGoal;
