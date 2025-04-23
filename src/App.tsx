import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
export function App() {
  return <div className="relative bg-[#0F1822] flex flex-col justify-center items-center w-full min-h-[644px] h-[644px] max-h-[980px] overflow-hidden text-center text-sm bg-blend-overlay" style={{
    backgroundImage: 'radial-gradient(100% 225% at 100% 0%, rgb(255, 0, 0) 0%, rgb(0, 0, 0) 100%), linear-gradient(236deg, rgb(0, 194, 255) 0%, rgb(0, 0, 0) 100%), linear-gradient(135deg, rgb(205, 255, 235) 0%, rgb(205, 255, 235) 36%, rgb(0, 159, 157) 36%, rgb(0, 159, 157) 60%, rgb(7, 69, 111) 60%, rgb(7, 69, 111) 67%, rgb(15, 10, 60) 67%, rgb(15, 10, 60) 100%)',
    backgroundBlendMode: 'overlay, hard-light, normal'
  }}>
      {/* Overlay divs */}
      <div className="absolute top-0 left-0 w-full h-full bg-black hidden"></div>
      <div className="absolute top-0 left-0 w-full h-full hidden animate-appear-opacity" style={{
      backgroundImage: '-webkit-linear-gradient(60deg, rgba(15, 24, 34, 0.565) 0%, rgba(15, 24, 34, 0.565) 10%, rgba(0, 35, 75, 0.565) 48%, rgba(0, 35, 75, 0.565) 52%, rgba(15, 24, 34, 0.565) 90%, rgba(15, 24, 34, 0.565) 100%)'
    }}></div>
      {/* Header */}
      <Header />
      {/* Hero section */}
      <Hero />
    </div>;
}