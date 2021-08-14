import Hero from "components/layout/Hero";
import Header from "components/layout/Header";
import AddConsultation from "components/common/AddConsultation";
import MedicineList from "components/layout/MedicineList";
import Faqs from "components/layout/Faqs";
import Footer from "components/layout/Footer";

function HomeView() {
  return (
    <>
      <Header />
      <Hero />
      <AddConsultation />
      <MedicineList />
      <Faqs />
      <Footer />
    </>
  );
}

export default HomeView;
