import Banner from "@/components/home/Banner";
import Flats from "@/components/home/Flats";
import InfoCourse from "@/components/home/InfoCourse";
import PaymentMethod from "@/components/home/PaymentMethod";
import Services from "@/components/home/Services";

export default function Home() {
  return (
    <>
      <Banner />
      <Services />
      <Flats />
      <InfoCourse  />
      {/* <PaymentMethod /> */}
    </>
  );
}
