import './App.css';
import Header from './layout/Header';
import Footer from './layout/Footer';
import ContentJSX from './component/ContentJSX';
import ContentEvent from './component/ContentEvent';

function App() {
    return (
        <div className="App">
            <Header />
            <hr />
            <ContentJSX />
            <hr />
            <ContentEvent />
            <hr />
            <Footer />
        </div>
    );
}

export default App;
