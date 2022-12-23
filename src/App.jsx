import FormCont from './components/formCont'
import Steps from './components/steps'
import { BrowserRouter } from 'react-router-dom'

function App() {

    return (
        <div className='container app'>
        <BrowserRouter>
            <Steps />
            <FormCont />
        </BrowserRouter>
        </div>
    )
}

export default App
