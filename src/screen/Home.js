import Header from '../components/layout/Header'
import HomeBody from '../components/layout/HomeBody'
import Footer from '../components/layout/Footer'
import { Switch, Route } from 'react-router-dom'
import '../styles/home.css'
import NewBookMore from '../components/common/card/NewBookMore'
import Detail from '../components/common/card/Detail'

const Home = () => {
    return (
        <div className="home">
            <Header />
            <Route path="/newbook" component={NewBookMore} />
            <Route path="/detail" component={Detail} />
            <Route path="/" exact component={HomeBody} />
            <Footer />
        </div>
    )
}
export default Home;
