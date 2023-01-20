import Head from "next/head";
import { Header, Banner, SmallCard, LargeCard, Footer, MediumCard } from "../components";

const Home = ({ exploreData, cardsData }) => {
  return (
    <div>
      <Head>
        <title>Airbnb Clone</title>
        <link rel="icon" href="/airbnb_icon.png" />
      </Head>
      {/* Header */}
      <Header />
      {/* Banner */}
      <Banner />
      <main className="mx-auto px-8 sm:px-16 max-w-7xl">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData.map(({ img, distance, location }) => (
              <SmallCard
                key={img}
                img={img}
                distance={distance}
                location={location}
              />
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>

          <div className="flex space-x-3 overflow-x-scroll scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-red-400 p-3 -ml-3">
            {cardsData.map(({ img, title }) => (
              <MediumCard key={img} img={img} title={title} />
            ))}
          </div>
        </section>
        <LargeCard
          img="/card/large/largeCard.webp"
          title="The Greatest Outdoors"
          description="Wishlists curated by Airbnb."
          buttonText="Get Inspired"
        />
      </main>
      <Footer />
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const exploreData = await fetch("https://www.jsonkeeper.com/b/2FD5").then(
    (res) => res.json()
  );
  const cardsData = await fetch("https://www.jsonkeeper.com/b/QS2O").then(
    (res) => res.json()
  );

  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}
