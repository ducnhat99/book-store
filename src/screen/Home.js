import Header from '../components/layout/Header'
import HomeBody from '../components/layout/HomeBody'
import '../styles/home.css'

const Home = () => {
    return (
        <div className="home">
            <Header />
            <HomeBody />
        </div>
    )
}

export default Home