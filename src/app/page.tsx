'use client'

import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Capabilities from '../components/Capabilities'
import Transformation from '../components/Transformation'
import Usage from '../components/Usage'
import Pricing from '../components/Pricing'
import Testimonials from '../components/Testimonials'
import Registration from '../components/Registration'
import CallToAction from '../components/CallToAction'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Capabilities />
      <Transformation />
      <Usage />
      <Pricing />
      <Testimonials />
      <Registration />
      <CallToAction />
      <Footer />
    </main>
  )
}
