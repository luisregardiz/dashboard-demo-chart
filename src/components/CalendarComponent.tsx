import { useState } from 'react'
import HeaderText from './ui/HeaderText'
import moment from 'moment'

import 'react-calendar/dist/Calendar.css'
import { Value } from 'react-calendar/dist/cjs/shared/types'
import Calendar from 'react-calendar'

export const CalendarComponent = () => {
    const actualMonth = new Date().getMonth()
    const actualYear = new Date().getFullYear()

    const lastDayOfMonth: Date = new Date(actualYear, actualMonth + 1, 0)
    const firstDayOfMonth = new Date(actualYear, actualMonth, 1)

    const [value, onChange] = useState<Date | Value>(firstDayOfMonth)
    const [showCalendar, setShowCalendar] = useState<boolean>()

    const calendarValueFormat: string = moment(value as Date).format('DD/MM/YYYY')
    const onCloseCalendar = () => {
        setShowCalendar(false)
    }
    const resetCalendar = () => {
        onChange(new Date())
    }
    return (
        <div>
            <HeaderText className='text-4xl font-bold mb-6'>Calendar Test</HeaderText>

            <input
                value={calendarValueFormat}
                type='button'
                className='cursor-pointer border border-neutral-300 rounded-xl px-4 py-1 bg-white'
                onClick={() => setShowCalendar((prev) => !prev)}
            />
            {showCalendar && (
                <div className='flex flex-col items-center bg-white rounded-xl max-w-[380px] p-5 mt-5 shadow-xl'>
                    <Calendar
                        onChange={onChange}
                        value={value}
                        defaultValue={firstDayOfMonth}
                        maxDate={lastDayOfMonth}
                    />
                    <div className='w-full flex gap-x-4 mt-4'>
                        <button
                            onClick={resetCalendar}
                            className='border border-neutral-300 py-2 w-1/2 rounded-lg shadow'
                        >
                            Today
                        </button>
                        <button
                            onClick={onCloseCalendar}
                            className='w-1/2 bg-neutral-900 text-white rounded-lg shadow'
                        >
                            Apply
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}
