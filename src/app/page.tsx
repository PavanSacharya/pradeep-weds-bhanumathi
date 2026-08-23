import Hero from "@/components/Hero";
import HostedBy from "@/components/HostedBy";
import EventCard from "@/components/EventCard";
import CountdownTimer from "@/components/CountdownTimer";
import Blessing from "@/components/Blessing";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <HostedBy />

      <div id="details">
        <EventCard
          id="wedding"
          eyebrow="The Wedding"
          title="Ceremony"
          day="Monday"
          date="31 August 2026"
          time="11:00 AM"
          venueName="Sri Vishwakarma Samudaya Bhavana"
          venueAddress="Udupi district, Karnataka"
          mapHref="https://maps.app.goo.gl/eTXK8sBSBKqz68wR8"
        />

        <CountdownTimer />

        <EventCard
          id="reception"
          eyebrow="The Reception"
          title="Celebration"
          day="Wednesday"
          date="2 September 2026"
          time="6:00 PM onwards"
          venueName="Mangalya Sabhabhavana"
          venueAddress="Perdoor, Udupi district, Karnataka"
          mapHref="https://share.google/9s2wEQAg8dQemLNpV"
        />
      </div>

      <Blessing />
      <Footer />
    </main>
  );
}
