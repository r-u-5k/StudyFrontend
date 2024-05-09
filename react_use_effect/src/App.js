import './App.css';
import Controller from './component/Controller';
import Even from './component/Even';
import Viewer from './component/Viewer';

function App() {
    return (
        <div class='App'>
            <h1>Simple Counter</h1>
            <section>
                <input value='' />
            </section>
            <section>
                {/*Viewer.js start */}
                <Viewer />
                {/*Even.js start */}
                <Even />
                {/*Even.js end */}
                {/*Viewer.js end */}
            </section>
            <section>
                {/*Controller.js start */}
                <Controller />
                {/*Controller.js end */}
            </section>
        </div>
    );
}

export default App;
