import { View, Text, ScrollView } from "react-native";
import { Header } from "../components/Header";
import { DAY_SIZE, HabitDay } from "../components/HabitDay";
import { generateRangeDatesFromYearBegning } from "../utils/generate-range-dates-from-year-begning";
import { useNavigation } from "@react-navigation/native";

const WEEK_DAYS = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
const datesFromYearToStart = generateRangeDatesFromYearBegning()
const minimunSummaryDatesSizes = 12 * 7
const amountOfDaysToFill = minimunSummaryDatesSizes - datesFromYearToStart.length

export function Home(){
    const { navigate } = useNavigation()

    return(
        <View className="flex-1 bg-background px-8 pt-16">
            <Header/>
            <View className="flex-row mt-6 mb-2">
                {
                    WEEK_DAYS.map((weekDay, i) => (
                        <Text 
                            key={`${weekDay}-${i}`}
                            className="text-zinc-400 text-xl font-bold text-center mx-1"   
                            style={{width: DAY_SIZE}} 
                        >
                            {weekDay}
                        </Text>
                    ))
                }
            </View>
            <ScrollView 
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingBottom: 32}}
            >
                <View className="flex-row flex-wrap">
                    {
                        datesFromYearToStart.map((date => (
                            <HabitDay
                                key={date.toISOString()}
                                onPress={() => navigate('habit', {date: date.toISOString()})}
                            />
                        )))
                    }
                    {
                        amountOfDaysToFill > 0 && Array.from({length: amountOfDaysToFill}).map((_, i) => (
                            <View
                                key={i}
                                className="bg-zinc-900 rounded-lg border-2 m-1 border-zinc-800 opacity-40"
                                style={{width: DAY_SIZE, height: DAY_SIZE}}
                            />
                        ))
                    }
                </View>
            </ScrollView>
        </View>
    )
}