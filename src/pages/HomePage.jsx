import HeroSection from "../components/HeroSection";
import CardsContainer from "../components/CardsContainer";
import JobsList from "../components/JobsList";
import ViewJobs from "../components/ViewJobs";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CardsContainer />
      <JobsList isHome={true}/>
      <ViewJobs />
    </>
  );
}
