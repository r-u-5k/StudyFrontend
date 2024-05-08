import './App.css';
import Header from './layout/Header';
import Footer from './layout/Footer';
import ContentJSX from './component/ContentJSX';
import ContentEvent from './component/ContentEvent';
import ContentChild from './component/ContentChild';
import ContentProps from './component/ContentProps';

function ChildComp() {
    return <div>Child Component</div>;
}

function App() {
    let id = 'guard';
    let name = '김가드';
    let address = '서울시';
    let age = 56;
    let phone = ['010-1234-5678', '010-9999-0000']

    return (
        <div className="App">
            <Header />
            <hr />
            <ContentJSX />
            <hr />
            <ContentEvent />
            <hr />
            <ContentChild>
                <ChildComp />
                {ChildComp()}
            </ContentChild>
            <ContentProps id={id} name={name} age={age} address={address} gender={'남'} phone={phone} />
            <Footer />
        </div>
    );
}

export default App;
