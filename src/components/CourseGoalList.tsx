import CourseGoal from "./CourseGoal";
import { CourseGoals as CGoal } from "../App";

type CourseGoals = {
  goals: CGoal[];
  onDeleteGoal: (id: number) => void
};

const CourseGoalList = ({ goals, onDeleteGoal }: CourseGoals) => {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal key={goal.id} title={goal.title} id={goal.id} onDelete={onDeleteGoal} >
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
};

export default CourseGoalList;
