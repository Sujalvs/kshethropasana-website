import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f4f1ed] to-white text-[#3b2f2f] font-serif">
      <header className="p-6 md:p-12 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold tracking-wide"
        >
          Kshethropasana Temple Construction
        </motion.h1>
        <p className="mt-4 text-lg md:text-xl text-[#5c4a3f]">
          Traditional Kerala-Style Temple Builders
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 md:p-12">
        <Card className="rounded-2xl shadow-xl">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4">About Us</h2>
            <p>
              With decades of experience, Kshethropasana specializes in crafting temples that honor Kerala’s sacred architectural traditions. Each structure is built with precision, devotion, and time-honored techniques.
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-xl">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4">Our Services</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Temple Construction & Renovation</li>
              <li>Traditional Wood & Stone Carving</li>
              <li>Vaastu Consultation</li>
              <li>Temple Mural Painting</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className="p-6 md:p-12 text-center">
        <h2 className="text-3xl font-bold mb-6">Gallery Preview</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gray-300 h-40 rounded-xl" />
          <div className="bg-gray-300 h-40 rounded-xl" />
          <div className="bg-gray-300 h-40 rounded-xl" />
          <div className="bg-gray-300 h-40 rounded-xl" />
        </div>
        <Button className="mt-6 text-lg rounded-xl px-6 py-3">View Full Gallery</Button>
      </section>

      <footer className="bg-[#3b2f2f] text-white p-6 mt-12">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-xl font-bold mb-2">Contact Us</h3>
            <p>Kshethropasana Temple Construction</p>
            <p>Email: contact@kshethropasana.com</p>
            <p>Phone: +91-XXXXXXXXXX</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Follow Our Journey</h3>
            <p>Instagram | Facebook | YouTube</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
