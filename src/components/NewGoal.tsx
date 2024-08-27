import { type FormEvent } from "react"

const NewGoal = () => {
  function handleSubmit(e: FormEvent) {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your Goal</label>
        <input type="text" id="goal" />
      </p>
      <p>
        <label htmlFor="summary">Short Summary</label>
        <input type="text" id="summary" />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  )
}

export default NewGoal