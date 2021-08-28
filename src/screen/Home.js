import Header from '../components/layout/Header'
import HomeBody from '../components/layout/HomeBody'
import Footer from '../components/layout/Footer'
import '../styles/home.css'

const Home = () => {
    return (
        <div className="home">
            <Header />
            <HomeBody />
            <Footer />
        </div>
    )
}

export default Home