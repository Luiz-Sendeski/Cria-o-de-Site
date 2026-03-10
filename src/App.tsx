/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Favorites from './components/Favorites';
import Delivery from './components/Delivery';
import DailyMenu from './components/DailyMenu';
import Events from './components/Events';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-madero-black text-madero-cream selection:bg-madero-gold selection:text-madero-black">
      <Navbar />
      <main>
        <Hero />
        <Favorites />
        <About />
        <DailyMenu />
        <Delivery />
        <Events />
      </main>
      <Footer />
    </div>
  );
}
