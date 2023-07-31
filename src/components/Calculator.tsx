import { FC } from 'react'

interface CalculatorProps {}

const Calculator: FC<CalculatorProps> = () => {
    const numbers: number[] = [...Array(10).keys()].reverse()

    return (
        <div className='bg-zinc-100 border-2 border-zinc-500 rounded-lg p-5'>
            <form className='flex flex-col items-center'>
                <div className='w-full'>
                    <input
                        type='text'
                        className='w-full rounded-lg p-2 border-2 border-zinc-500 disabled:bg-zinc-50'
                        disabled
                    />
                </div>
                <div>
                    {numbers.map((number) => (
                        <button
                            key={number}
                            className='px-6 py-3 border-2 border-zinc-500 rounded-lg text-lg'
                            type='button'
                        >
                            {number}
                        </button>
                    ))}
                </div>
            </form>
        </div>
    )
}

export default Calculator
