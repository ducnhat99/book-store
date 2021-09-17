import SideBar from '../common/card/home/SideBar';
import SlideShow from '../common/card/home/SlideShow';
import NewCardContainer from '../common/card/home/NewCardContainer';
import SaleCardContainer from '../common/card/home/SaleCardContainer';
import '../../styles/homebody.css';
import FeaturedCardContainer from '../common/card/home/FeaturedCardContainer';

const HomeBody = () => {
  return (
    <div className="home--body">
      <div className="container">
        <div className="homebody-menu">
          <SideBar />
          <SlideShow />
        </div>
        <NewCardContainer />
        <SaleCardContainer />
        <FeaturedCardContainer />
      </div>
    </div>
  );
};

export default HomeBody;
