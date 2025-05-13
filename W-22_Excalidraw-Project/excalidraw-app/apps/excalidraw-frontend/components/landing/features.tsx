"use client"

import { useState } from 'react'
import Image from 'next/image'
import { 
  Paintbrush, 
  Share2, 
  Lock, 
  Download, 
  Palette,
  Users,
  Sparkles, 
  Smartphone
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

type Feature = {
  id: string
  icon: React.ReactNode
  title: string
  description: string
  image: string
}

const features: Feature[] = [
  {
    id: 'sketch',
    icon: <Paintbrush className="h-5 w-5" />,
    title: 'Sketch & Draw',
    description: 'Create hand-drawn diagrams, charts, and illustrations with our simple yet powerful drawing tools.',
    image: 'https://images.pexels.com/photos/6444/pencil-typography-black-design.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: 'collaborate',
    icon: <Users className="h-5 w-5" />,
    title: 'Real-time Collaboration',
    description: 'Work together with your team in real-time, see changes instantly, and collaborate seamlessly.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: 'share',
    icon: <Share2 className="h-5 w-5" />,
    title: 'Easy Sharing',
    description: 'Share your work with a single link. No account needed for your collaborators to edit or view.',
    image: 'https://images.pexels.com/photos/6224/hands-people-woman-working.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: 'export',
    icon: <Download className="h-5 w-5" />,
    title: 'Multiple Export Options',
    description: 'Export your drawings as PNG, SVG, or copy them to your clipboard for use anywhere.',
    image: 'https://images.pexels.com/photos/5926389/pexels-photo-5926389.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: 'customize',
    icon: <Palette className="h-5 w-5" />,
    title: 'Customization',
    description: 'Choose from a variety of colors, fonts, and styles to make your drawings unique.',
    image: 'https://images.pexels.com/photos/4792282/pexels-photo-4792282.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: 'privacy',
    icon: <Lock className="h-5 w-5" />,
    title: 'Privacy First',
    description: 'Your data stays in your browser. We don\'t track or store your drawings on our servers.',
    image: 'https://images.pexels.com/photos/60504/security-protection-defense-sure-60504.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: 'ai',
    icon: <Sparkles className="h-5 w-5" />,
    title: 'AI Assistance',
    description: 'Get intelligent suggestions and help with your drawings using our AI assistant.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: 'responsive',
    icon: <Smartphone className="h-5 w-5" />,
    title: 'Responsive Design',
    description: 'Draw on any device - desktop, tablet, or mobile with a responsive interface.',
    image: 'https://images.pexels.com/photos/4384147/pexels-photo-4384147.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  }
]

export function Features() {
  const [activeFeature, setActiveFeature] = useState<string>(features[0].id)

  const currentFeature = features.find(f => f.id === activeFeature) || features[0]

  return (
    <section id="features" className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to create beautiful diagrams and collaborate effectively with your team.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-8">
          {features.map((feature) => (
            <Button
              key={feature.id}
              variant={activeFeature === feature.id ? "default" : "outline"}
              className={cn(
                "h-auto flex-col py-4 px-3 gap-2 text-start",
                activeFeature === feature.id ? "shadow-md" : "shadow-sm"
              )}
              onClick={() => setActiveFeature(feature.id)}
            >
              <div className="flex items-center justify-start w-full gap-3">
                <div className={cn(
                  "p-1.5 rounded-md",
                  activeFeature === feature.id ? "bg-primary-foreground" : "bg-muted"
                )}>
                  {feature.icon}
                </div>
                <span className="font-medium">{feature.title}</span>
              </div>
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mt-12">
          <div>
            <div className="bg-white dark:bg-card rounded-lg shadow-xl overflow-hidden">
              <Image
                src={currentFeature.image}
                alt={currentFeature.title}
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div>
            <div className="inline-flex items-center gap-2 bg-muted px-3 py-1 rounded-full mb-4">
              {currentFeature.icon}
              <span className="text-sm font-medium">{currentFeature.title}</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">{currentFeature.title}</h3>
            <p className="text-lg text-muted-foreground mb-6">{currentFeature.description}</p>
            <ul className="space-y-3">
              {currentFeature.id === 'sketch' && (
                <>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full h-6 w-6 flex items-center justify-center bg-primary/10 text-primary mt-0.5">✓</div>
                    <span>Intuitive drawing tools designed for ease of use</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full h-6 w-6 flex items-center justify-center bg-primary/10 text-primary mt-0.5">✓</div>
                    <span>Hand-drawn aesthetic that gives your diagrams character</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full h-6 w-6 flex items-center justify-center bg-primary/10 text-primary mt-0.5">✓</div>
                    <span>Pre-built shapes and templates to get started quickly</span>
                  </li>
                </>
              )}
              {currentFeature.id === 'collaborate' && (
                <>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full h-6 w-6 flex items-center justify-center bg-primary/10 text-primary mt-0.5">✓</div>
                    <span>See changes from collaborators in real-time</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full h-6 w-6 flex items-center justify-center bg-primary/10 text-primary mt-0.5">✓</div>
                    <span>Built-in chat functionality for better communication</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full h-6 w-6 flex items-center justify-center bg-primary/10 text-primary mt-0.5">✓</div>
                    <span>Unlimited participants can join your drawing session</span>
                  </li>
                </>
              )}
              {currentFeature.id !== 'sketch' && currentFeature.id !== 'collaborate' && (
                <>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full h-6 w-6 flex items-center justify-center bg-primary/10 text-primary mt-0.5">✓</div>
                    <span>Simple and intuitive interface</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full h-6 w-6 flex items-center justify-center bg-primary/10 text-primary mt-0.5">✓</div>
                    <span>Works seamlessly across all devices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full h-6 w-6 flex items-center justify-center bg-primary/10 text-primary mt-0.5">✓</div>
                    <span>No account required to get started</span>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}