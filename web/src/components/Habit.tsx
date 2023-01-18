interface HabitProps{
    completed: number
}

export function Habit(props: HabitProps){
    return(
        <p>Habit {props.completed}</p>
    )
}