import React from 'react'
import Image1 from '../../assets/carousel/high court.jpg'
import Image2 from '../../assets/carousel/kp.jpg'
import Image3 from '../../assets/carousel/mahamaya_temple-transformed.jpeg'
import Image4 from '../../assets/carousel/mt.jpg'
import Image5 from '../../assets/carousel/ratanpur-transformed.jpeg'

export default function Carousel() {
  return (
    <header className="relative bg-gray-200 py-4 overflow-hidden">
        <div className="flex items-center space-x-4 animate-scroll">
          {/* First set of images */}
          <img src={Image1} alt="Feature 1" className="h-48 w-auto object-cover" />
          <img src={Image2} alt="Feature 2" className="h-48 w-auto object-cover" />
          <img src={Image3} alt="Feature 3" className="h-48 w-auto object-cover" />
          <img src={Image4} alt="Feature 4" className="h-48 w-auto object-cover" />
          <img src={Image5} alt="Feature 5" className="h-48 w-auto object-cover" />
          {/* Second set of images (duplicate of the first set) */}
          <img src={Image1} alt="Feature 1" className="h-48 w-auto object-cover" />
          <img src={Image2} alt="Feature 2" className="h-48 w-auto object-cover" />
          <img src={Image3} alt="Feature 3" className="h-48 w-auto object-cover" />
          <img src={Image4} alt="Feature 4" className="h-48 w-auto object-cover" />
          <img src={Image5} alt="Feature 5" className="h-48 w-auto object-cover" />
        </div>
      </header>
  )
}
