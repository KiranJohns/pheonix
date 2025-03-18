"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Zap, Shield, Layers, ArrowRight } from 'lucide-react';
import Carousel, { CarouselItem } from 'components/Carousal/NpmCarousal';
import FeatureCard from '@/components/Button/FeatureCard';
import { Button } from '@/components/Button/Button';



// Sample carousel items
const carouselItems: CarouselItem[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1539485630551-061fb583fa41?auto=format&fit=crop&w=1920&h=1080&q=80',
    title: 'Innovative Technology Solutions',
    description: 'Discover how our technology can transform your digital experience',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1465566829994-b8da8cae5909?auto=format&fit=crop&w=1920&h=1080&q=80',
    title: 'Precision Engineered',
    description: 'Every detail matters in the pursuit of excellence',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1522635442916-3acd8dcad9ce?auto=format&fit=crop&w=1920&h=1080&q=80',
    title: 'Seamless Integration',
    description: 'Connect and expand your capabilities with our platform',
  },
];

const NewCarousel = () => {
  return (
    <div className="flex flex-col min-h-screen">
        {/* Hero Section with Carousel */}
        <section className="relative h-screen">
          <Carousel 
            items={carouselItems} 
            className="h-screen"
          />
          
       <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 px-4 bg-black/30 ">
            <motion.div 
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.span 
                className="inline-block px-3 py-1 mb-4 text-sm font-medium bg-primary/80 rounded-full"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                 High Quality Printing Services   
              </motion.span>
              <motion.h1 
                className="text-5xl md:text-6xl lg:text-7xl font-semibold mb-6 tracking-tight "
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                 Where Creativity Meets Precision Printing
              </motion.h1>
              <motion.p 
                className="text-xl opacity-90 mb-8 max-w-3xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                At Phoenix Arts, we bring your ideas to life with vibrant prints and impeccable craftsmanship, right here in Thiruvananthapuram
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
             
              </motion.div>
            </motion.div>
  
            <motion.div 
              className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              <button 
                className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20"
                onClick={() => window.scrollTo({
                  top: window.innerHeight,
                  behavior: 'smooth'
                })}
                aria-label="Scroll down"
              >
                <ChevronDown className="text-white" />
              </button>
            </motion.div>
          </div>
        </section>
       

       

        {/* Features Section */}
        {/* <section className="py-24 px-4 bg-gradient-to-b from-background to-secondary/50">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <motion.span 
                className="inline-block px-3 py-1 mb-4 text-sm font-medium bg-primary/10 text-primary rounded-full"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                Core Features
              </motion.span>
              <motion.h2 
                className="text-4xl font-semibold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                Designed for Excellence
              </motion.h2>
              <motion.p 
                className="text-xl text-muted-foreground max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Our technology embodies the principles of simplicity, functionality, and beauty,
                delivering an unparalleled user experience.
              </motion.p>
            </div>
  
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                title="Lightning Fast"
                description="Experience remarkable speed and responsiveness with our optimized architecture."
                icon={<Zap size={24} />}
              />
              <FeatureCard
                title="Secure by Design"
                description="Built with security at its core, ensuring your data remains protected."
                icon={<Shield size={24} />}
              />
              <FeatureCard
                title="Seamless Integration"
                description="Connects effortlessly with your existing systems and workflows."
                icon={<Layers size={24} />}
              />
            </div>
  
            <motion.div 
              className="mt-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Button 
                className="group px-8 py-6 rounded-full text-lg"
                variant="outline"
              >
                <span>View All Features</span>
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Button>
            </motion.div>
          </div>
        </section>
   */}
        {/* Footer Section */}
        {/* <footer className="py-12 px-4 bg-card text-card-foreground border-t">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} YourCompany. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Terms
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </footer> */}
      </div>
  )
}

export default NewCarousel