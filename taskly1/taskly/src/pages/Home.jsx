import Header from "../components/Header";
import Footer from "../components/Footer";
import Imagens from "../components/Imagens";
import Cards from "../components/Cards";
import Reviews from "../components/Reviews";
import Faq from "../components/Faq";
import arquivo from '../assets/arquivo.svg'


function Home() {
  return (
    <div>
      <Header />
      <Imagens/>
      <Cards/>
      <Reviews/>
      <Faq/> 
      <div className="flex  flex-row-reverse mr-80 mt-0 ml-30 b">
        <img src={arquivo} className="h-80 -mt-20" /> 
        </div>

      <Footer />
    </div>
  );
}

export default Home;
