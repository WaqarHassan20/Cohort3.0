import Image from 'next/image'
import { ChevronRight } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Create a new canvas',
    description: 'Start with a blank canvas or choose from our templates to kickstart your project.',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    number: '02',
    title: 'Start drawing',
    description: 'Use our intuitive tools to sketch, write, and create diagrams with a hand-drawn feel.',
    image: 'https://images.pexels.com/photos/6224/hands-people-woman-working.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    number: '03',
    title: 'Collaborate with others',
    description: 'Share a link and collaborate in real-time with your team, no sign-up required.',
    image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    number: '04',
    title: 'Export and share',
    description: 'Export your creation as PNG, SVG, or share a link for others to view or edit.',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  }
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 md:py-24">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get started with Excalidraw in just a few simple steps
          </p>
        </div>

        <div className="space-y-24">
          {steps.map((step, index) => (
            <div key={index} className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
              <div className={index % 2 === 1 ? "md:order-2" : ""}>
                <div className="bg-muted/30 px-4 py-1.5 rounded-full inline-flex items-center mb-4">
                  <span className="text-sm font-medium">{step.number}</span>
                  <ChevronRight className="h-4 w-4 mx-1 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{`Step ${index + 1}`}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{step.title}</h3>
                <p className="text-lg text-muted-foreground mb-6">{step.description}</p>
                
                <div className="h-1 w-24 bg-primary rounded-full mt-8"></div>
              </div>
              <div className={index % 2 === 1 ? "md:order-1" : ""}>
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <Image 
                    src={step.image} 
                    alt={step.title}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}