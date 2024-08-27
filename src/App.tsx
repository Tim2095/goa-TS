import Header from "./components/Header";
import headerLogo from "./assets/goals.jpg";
import { useState } from "react";
import CourseGoalList from "./components/CourseGoalList";
import NewGoal from "./components/NewGoal";

export type CourseGoals = {
  id: number;
  title: string;
  description: string;
};

export default function App() {
  function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  const [goals, setGoals] = useState<CourseGoals[]>([]);

  function addGoalHandler() {
    setGoals((prevGoals) => {
      const newGoal: CourseGoals = {
        id: getRandomInt(1000),
        title: "The foe",
        description: "The foe",
      };
      return [...prevGoals, newGoal];
    });
  }

  const handleDelete = (id: number) => {
    setGoals(prevGoals => prevGoals.filter(goal => goal.id !== id))
  }

  return (
    <main>
      <Header image={{ src: headerLogo, alt: "A list of goals" }}>
        <h1>Your Course Goal</h1>
      </Header>
      <NewGoal />
      <CourseGoalList goals={goals}  onDeleteGoal={handleDelete}/>
    </main>
  );
}
