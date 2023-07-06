import Hero from "../components/Hero";
import HomepageCardHolder from "../components/HomepageCardHolder";

function Index() {
  document.title = "Hari Acharya - Web Developer";
  return (
    <>
      <Hero />
      <HomepageCardHolder />
    </>
  );
}

export default Index;
