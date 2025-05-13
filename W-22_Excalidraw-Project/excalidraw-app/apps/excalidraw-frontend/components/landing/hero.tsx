import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="pt-28 md:pt-32 pb-16 md:pb-24">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-1/2 text-center mt-32 lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
              Collaborative whiteboard for your ideas
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              Create beautiful hand-drawn diagrams, wireframes, and notes with your team in real-time. No sign-up required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href={"/signup"}>
                <Button size="lg" variant="outline" className="hover:bg-black hover:text-white font-bold cursor-pointer">
                  Sign Up
                </Button>
              </Link>
              <Link href={"/signin"}>
                <Button size="lg" variant="outline" className="hover:bg-black hover:text-white font-bold cursor-pointer">
                  Sign In
                </Button>
              </Link>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              No credit card required. Free to use.
            </p>
          </div>
          <div className="w-full lg:w-1/2 ">
            <div className="relative rounded-lg overflow-hidden shadow-2xl border border-border">
              <Image 
                src="https://images.pexels.com/photos/3182834/pexels-photo-3182834.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                alt="Excalidraw in action"
                width={500}
                height={300}
                className="w-full h-auto "
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}