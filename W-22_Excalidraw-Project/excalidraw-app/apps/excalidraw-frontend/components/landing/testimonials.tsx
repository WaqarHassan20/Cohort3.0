"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

const testimonials = [
  {
    quote: "Excalidraw completely changed how our team collaborates on design projects. The hand-drawn aesthetic adds a personal touch to our wireframes.",
    author: "Sarah Johnson",
    title: "UX Designer at Dropbox",
    avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    rating: 5
  },
  {
    quote: "We use Excalidraw for all our brainstorming sessions. It's simple, intuitive, and the real-time collaboration works flawlessly.",
    author: "Michael Chen",
    title: "Product Manager at Slack",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    rating: 5
  },
  {
    quote: "As a teacher, Excalidraw has been invaluable for my virtual classroom. I can explain concepts visually and my students love the interactive nature.",
    author: "Emily Rodriguez",
    title: "High School Teacher",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    rating: 4
  },
  {
    quote: "The export options in Excalidraw are perfect for our documentation needs. We can quickly create diagrams and include them in our docs.",
    author: "David Kim",
    title: "Technical Writer at Google",
    avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    rating: 5
  },
  {
    quote: "Excalidraw is my go-to tool for creating simple diagrams for my blog posts. The hand-drawn style makes my technical content more approachable.",
    author: "Jessica Taylor",
    title: "Independent Developer & Blogger",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    rating: 5
  }
]

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      nextTestimonial()
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay])

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from people who use Excalidraw to bring their ideas to life
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div 
            className="relative overflow-hidden p-8 md:p-12 bg-background rounded-xl shadow-lg border border-border"
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={cn(
                  "transition-opacity duration-500 absolute inset-0 p-8 md:p-12 flex flex-col",
                  activeIndex === index ? "opacity-100 z-10" : "opacity-0 z-0"
                )}
              >
                <div className="mb-6 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={cn(
                        "h-5 w-5 mr-1", 
                        i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground"
                      )} 
                    />
                  ))}
                </div>
                <p className="text-xl md:text-2xl italic mb-8 flex-grow">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                    <Image 
                      src={testimonial.avatar} 
                      alt={testimonial.author}
                      width={48}
                      height={48}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}

            <div className={cn(
              "transition-opacity duration-500",
              activeIndex === testimonials.findIndex(t => t.author === testimonials[activeIndex].author) ? "opacity-100 z-10" : "opacity-0 z-0"
            )}>
              <div className="mb-6 flex">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={cn(
                      "h-5 w-5 mr-1", 
                      i < testimonials[activeIndex].rating ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground"
                    )} 
                  />
                ))}
              </div>
              <p className="text-xl md:text-2xl italic mb-8 min-h-[150px]">"{testimonials[activeIndex].quote}"</p>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                  <Image 
                    src={testimonials[activeIndex].avatar} 
                    alt={testimonials[activeIndex].author}
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium">{testimonials[activeIndex].author}</p>
                  <p className="text-sm text-muted-foreground">{testimonials[activeIndex].title}</p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-6 right-8 flex gap-2">
              <Button 
                variant="outline" 
                size="icon" 
                className="h-8 w-8 rounded-full"
                onClick={prevTestimonial}
              >
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Previous</span>
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="h-8 w-8 rounded-full"
                onClick={nextTestimonial}
              >
                <ChevronRight className="h-4 w-4" />
                <span className="sr-only">Next</span>
              </Button>
            </div>

            <div className="absolute bottom-6 left-8 flex gap-1">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "h-2 rounded-full transition-all",
                    activeIndex === index ? "w-6 bg-primary" : "w-2 bg-muted-foreground/30"
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}