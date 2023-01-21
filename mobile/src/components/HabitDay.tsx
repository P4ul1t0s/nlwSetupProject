import { Dimensions, TouchableOpacity, TouchableOpacityProps} from "react-native";
import { generateProgressPercentage } from "../utils/generate-progress-percentage";
import clsx from "clsx";
import dayjs from "dayjs";

interface habitDayProps extends TouchableOpacityProps{
    amountOfHabits?: number
    amountCompleted?: number
    date: Date
}

export const DAY_MARGIN_BETWEEN = 8
export const DAY_SIZE = (Dimensions.get('screen').width / 7) - ((32 * 2) / 5 + 5)

export function HabitDay({amountOfHabits = 0, amountCompleted = 0, date, ...rest}: habitDayProps){
    const amountAcconplishedPercentage = amountOfHabits > 0 ? generateProgressPercentage(amountOfHabits, amountCompleted) : 0
    const today = dayjs().startOf('day').toDate()
    const isCurrentDate = dayjs(date).isSame(today)

    return(
        <TouchableOpacity 
            className={clsx("rounded-lg border-2 m-1", {
                'bg-zinc-900 border-zinc-800': amountAcconplishedPercentage == 0,
                'bg-violet-900 border-violet-800': amountAcconplishedPercentage > 0 && amountAcconplishedPercentage < 20,
                'bg-violet-800 border-violet-700': amountAcconplishedPercentage >= 20 && amountAcconplishedPercentage < 40,
                'bg-violet-700 border-violet-600': amountAcconplishedPercentage >= 40 && amountAcconplishedPercentage < 60,
                'bg-violet-600 border-violet-500': amountAcconplishedPercentage >= 60 && amountAcconplishedPercentage < 80,
                'bg-violet-500 border-violet-400': amountAcconplishedPercentage >= 80 && amountAcconplishedPercentage < 100,
                'bg-violet-400 border-violet-300': amountAcconplishedPercentage == 100,
                'border-zinc-200 border-2': isCurrentDate
            })}
            style={{width: DAY_SIZE, height: DAY_SIZE}}
            activeOpacity={0.7}
            {...rest}
        />
    )
}