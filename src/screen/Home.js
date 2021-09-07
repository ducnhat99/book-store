import { Switch, Route, Redirect } from "react-router-dom";
import Header from '../components/layout/Header'
import HomeBody from '../components/layout/HomeBody'
import Footer from '../components/layout/Footer'
import '../styles/home.scss'
import NewBookMore from '../components/common/card/NewBookMore'
import Detail from '../components/common/card//detail/Detail'
import SaleBookMore from '../components/common/card/SaleBookMore'
import FeaturedBookMore from '../components/common/card/FeaturedBookMore'
import CategoryBook from '../components/common/card/CategoryBook'
import SearchBook from '../components/common/card/SearchBook'
import Cart from '../components/common/card/cart/Cart'
import Checkout from '../components/common/card/form/Checkout'
import Notification from '../components/common/card/notification/Notification'
import App from '../App'
import Admin from "./Admin";
import ROUTE from '../constants/Router'

const Home = () => {
    return (
        <div className="home">
            <Header />
            <Route path={ROUTE.CUSTOMER} component={Notification} />
            <Route path={ROUTE.CHECKOUT} component={Checkout} />
            <Route path={ROUTE.CART} component={Cart} />
            <Route path={ROUTE.SEARCH} component={SearchBook} />
            <Route path={ROUTE.CATEGORY} component={CategoryBook} />
            <Route path={ROUTE.SALEBOOK} component={SaleBookMore} />
            <Route path={ROUTE.NEWBOOK} component={NewBookMore} />
            <Route path={ROUTE.FEATUREDBOOK} component={FeaturedBookMore} />
            <Route path={ROUTE.DETAIL} component={Detail} />
            <Route path={ROUTE.HOME} component={HomeBody} />
            <Redirect to={ROUTE.HOME} />
            <Footer />
        </div>
    )
}
export default Home;
