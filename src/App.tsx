import { Button } from './components/ui'

const App = () => {
    return (
        <main className='max-w-screen-xl mx-auto p-10'>
            <h1>Button Components</h1>
            <Button color='primary' size='md' variant='outline'>
                Outline
            </Button>
        </main>
    )
}

export default App