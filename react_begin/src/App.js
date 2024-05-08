import './App.css';
import Header from './layout/Header';
import Footer from './layout/Footer';
import ContentJSX from './component/ContentJSX';
import ContentEvent from './component/ContentEvent';
import ContentChild from './component/ContentChild';

function ChildComp() {
    return <div>Child Component</div>;
}

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
            <hr />
            <ContentChild>
                <ChildComp />
                {ChildComp()}
            </ContentChild>
        </div>
    );
}

export default App;
