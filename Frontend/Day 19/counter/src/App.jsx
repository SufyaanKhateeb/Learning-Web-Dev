import './index.css';
import Counter from './components/counter';

function App() {
    return (
        <div className='container'>
            <h1>COUNTER</h1>
            <div className='countercontainer'>
                <Counter></Counter>
                <Counter></Counter>
                <Counter></Counter>
                <Counter></Counter>
            </div>
        </div>
    )
}

export default App;