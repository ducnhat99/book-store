import SideBar from '../common/card/SideBar';
import SlideShow from '../common/card/SlideShow';
import NewCardContainer from '../common/card/NewCardContainer';
import SaleCardContainer from '../common/card/SaleCardContainer';
import '../../styles/homebody.css';
import FeaturedCardContainer from '../common/card/FeaturedCardContainer';

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
