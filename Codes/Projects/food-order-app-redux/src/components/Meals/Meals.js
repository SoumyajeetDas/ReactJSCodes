import React from 'react'
import AvailaibleMeals from './AvailaibleMeals'
import MealsSummary from './MealsSummary'

export default function Meals() {
    return (
        <div style={{backgroundColor:"#383838",}}>
            <MealsSummary />
            <AvailaibleMeals/>
        </div>
    )
}
