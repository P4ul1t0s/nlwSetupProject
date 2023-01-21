import { Dimensions, TouchableOpacity, TouchableOpacityProps} from "react-native";

interface habitDayProps extends TouchableOpacityProps{
    amountOfHabits?: number
    amountCompleted?: number
    date: Date
}

export const DAY_MARGIN_BETWEEN = 8
export const DAY_SIZE = (Dimensions.get('screen').width / 7) - ((32 * 2) / 5 + 5)

export function HabitDay({amountOfHabits = 0, amountCompleted = 0, date, ...rest}: habitDayProps){
    return(
        <TouchableOpacity 
            className="bg-zinc-900 rounded-lg border-2 m-1 border-zinc-800"
            style={{width: DAY_SIZE, height: DAY_SIZE}}
            activeOpacity={0.7}
            {...rest}
        />
    )
}