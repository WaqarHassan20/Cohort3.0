import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'

export function Cta() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 to-background">
      <div className="container px-4 mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 max-w-3xl mx-auto">
          Ready to bring your ideas to life?
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          Start drawing, diagramming, and collaborating with your team today. No credit card required.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="gap-2">
            <span>Start drawing now</span>
            <ChevronRight size={16} />
          </Button>
          <Button size="lg" variant="outline">
            See pricing plans
          </Button>
        </div>
        <p className="mt-8 text-sm text-muted-foreground">
          Join thousands of teams already using Excalidraw
        </p>
      </div>
    </section>
  )
}