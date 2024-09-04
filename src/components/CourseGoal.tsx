import { FC, ReactNode } from "react";

type CourseGoal = {
  id: number;
  title: string;
  children: ReactNode;
  onDelete: (id: number) => void;
};

// type CourseGoal = PropsWithChildren<{title: string}>

const CourseGoal: FC<CourseGoal> = ({ title, children, id, onDelete }) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  );
};

export default CourseGoal;
