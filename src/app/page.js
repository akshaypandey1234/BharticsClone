// In your Next.js page or layout component
import Navigation from './Navigation';
import ComingSoon from './ComingSoon';
import TopSellingCars from './TopSellingCars';
import CarSelectionBanner from './CarSelectionBanner';
import WhyBuyFromUs from "./WhyBuyFromUs";
import PopularBrands from './PopularBrands';
import Footer from './Footer';
import NavOne from './NavOne';


function YourPage() {
  return (
    <div>
      <Navigation />
      <NavOne/>
      <ComingSoon/>
      <TopSellingCars/>
      <CarSelectionBanner/>
      <WhyBuyFromUs/>
      <PopularBrands />
      <Footer/>
      {/* Your page content */}
    </div>
  );
}

export default YourPage;
