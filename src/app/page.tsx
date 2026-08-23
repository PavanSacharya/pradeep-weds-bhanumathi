import Hero from "@/components/Hero";
import HostedBy from "@/components/HostedBy";
import EventCard from "@/components/EventCard";
import CountdownTimer from "@/components/CountdownTimer";
import Blessing from "@/components/Blessing";
import Footer from "@/components/Footer";
import LanguageToggle from "@/components/LanguageToggle";

export default function Home() {
  return (
    <main className="relative">
      <LanguageToggle />
      <Hero />

      <CountdownTimer />
      <div id="details">
        <EventCard
          id="wedding"
          eventKey="wedding"
          mapHref="https://maps.app.goo.gl/eTXK8sBSBKqz68wR8"
        />



        <EventCard
          id="reception"
          eventKey="reception"
          mapHref="https://maps.app.goo.gl/59r6hmAakKUwRSJi9"
        />

      </div>

      <Blessing />
      <HostedBy />
      <Footer />
    </main>
  );
}
