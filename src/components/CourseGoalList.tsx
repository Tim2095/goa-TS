import CourseGoal from "./CourseGoal";
import { CourseGoals as CGoal } from "../App";
import InfoBox from "./InfoBox";
import { ReactNode } from "react";
type CourseGoals = {
  goals: CGoal[];
  onDeleteGoal: (id: number) => void;
};

const CourseGoalList = ({ goals, onDeleteGoal }: CourseGoals) => {
  if (goals.length === 0) {
    return (
      <InfoBox mode="hint">
        <p>You have no course goals yet, start adding some</p>
      </InfoBox>
    );
  }

  let warningBox: ReactNode

  if(goals.length >= 4) {
    warningBox = <InfoBox mode="warning" severity="medium">You are collecting a lot of goals.</InfoBox>
  }

  return (
    <>
    {warningBox}
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal
              key={goal.id}
              title={goal.title}
              id={goal.id}
              onDelete={onDeleteGoal}
            >
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CourseGoalList;
