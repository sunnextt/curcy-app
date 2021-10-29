import { Layout } from 'antd';
import Hero from './sectionHero';
import About from './sectionAbout';
import Story from './sectionOurStory';
import WhyCurrenxi from './sectionWhyCurrenxi';
import GetStarted from './sectionGetStarted';
import ABetterWay from './sectionABetterWay';
import FAQ from './FAQ';

const Home = () => {
  return (
    <Layout.Content>
      <Hero />
      <About />
      <Story />
      <WhyCurrenxi />
      <GetStarted />
      <ABetterWay />
      <FAQ />
    </Layout.Content>
  );
};

export default Home;
