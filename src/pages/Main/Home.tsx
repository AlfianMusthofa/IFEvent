import Navbar from "../../components/navbar";
import Footer from "../../components/Footer";
import Sponsors from "../../components/Home/Sponsors";
import Stats from "./components/stats";
import Content from "./components/Content";
import Hero from "./components/Hero";
import ContactSection from "./components/ContactSection";
import LiveChatButton from "./components/live-chat/LiveChatButton";
import { useState } from "react";
import LiveChatDrawer from "./components/live-chat/LiveChatDrawer";

const Home = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Content />
      <Sponsors />
      <ContactSection />
      <Footer />
      <LiveChatDrawer open={isChatOpen} onClose={() => setIsChatOpen(false)} />
      <LiveChatButton onClick={() => setIsChatOpen((prev) => !prev)} />
    </>
  );
};

export default Home;
