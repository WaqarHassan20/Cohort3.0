"use client"

import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true)

  const plans = [
    {
      name: 'Free',
      description: 'Perfect for individuals and small teams to get started',
      monthlyPrice: 0,
      annualPrice: 0,
      features: [
        'Unlimited public boards',
        'Basic export options (PNG, SVG)',
        'Up to 3 collaborators per board',
        'Standard shapes and templates',
        '7 days of edit history',
        'Community support'
      ],
      buttonText: 'Get Started',
      buttonVariant: 'outline' as const,
      popular: false
    },
    {
      name: 'Pro',
      description: 'Ideal for professionals and growing teams',
      monthlyPrice: 12,
      annualPrice: 10,
      features: [
        'Everything in Free',
        'Unlimited private boards',
        'Unlimited collaborators',
        'Advanced export options (PDF, JSON)',
        '30 days of edit history',
        'Priority support',
        'Custom templates',
        'No watermarks'
      ],
      buttonText: 'Start Pro Trial',
      buttonVariant: 'default' as const,
      popular: true
    },
    {
      name: 'Team',
      description: 'For teams that need advanced features and controls',
      monthlyPrice: 24,
      annualPrice: 20,
      features: [
        'Everything in Pro',
        'Team management features',
        'Advanced permissions',
        'SSO authentication',
        'Unlimited edit history',
        'Dedicated support',
        'Analytics dashboard',
        'API access'
      ],
      buttonText: 'Contact Sales',
      buttonVariant: 'outline' as const,
      popular: false
    }
  ]

  return (
    <section id="pricing" className="py-16 md:py-24">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that works best for you and your team
          </p>
          
          <div className="flex items-center justify-center mt-8">
            <div className="relative flex items-center bg-muted/50 p-1 rounded-full">
              <button
                onClick={() => setIsAnnual(true)}
                className={cn(
                  "relative z-10 px-4 py-1.5 text-sm font-medium rounded-full transition-colors",
                  isAnnual ? "text-primary-foreground" : "text-muted-foreground"
                )}
              >
                Annual (Save 15%)
              </button>
              <button
                onClick={() => setIsAnnual(false)}
                className={cn(
                  "relative z-10 px-4 py-1.5 text-sm font-medium rounded-full transition-colors",
                  !isAnnual ? "text-primary-foreground" : "text-muted-foreground"
                )}
              >
                Monthly
              </button>
              <div 
                className={cn(
                  "absolute inset-0 h-full transition-all duration-200 rounded-full bg-primary",
                  isAnnual ? "transform translate-x-0" : "transform translate-x-full"
                )}
                style={{ width: '50%' }}
              ></div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={cn(
                "bg-background rounded-xl shadow-lg border border-border overflow-hidden transition-all duration-200 hover:shadow-xl hover:border-primary/20",
                plan.popular ? "relative md:scale-105" : ""
              )}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-lg">
                    MOST POPULAR
                  </div>
                </div>
              )}

              <div className="p-6 md:p-8">
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <p className="text-muted-foreground mt-2 min-h-[48px]">{plan.description}</p>
                
                <div className="mt-6 mb-6">
                  <span className="text-4xl font-bold">
                    ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-muted-foreground">/month</span>
                  
                  {isAnnual && plan.annualPrice > 0 && (
                    <p className="text-sm text-muted-foreground mt-1">
                      Billed annually (${plan.annualPrice * 12}/year)
                    </p>
                  )}
                </div>
                
                <Button 
                  variant={plan.buttonVariant}
                  className="w-full"
                >
                  {plan.buttonText}
                </Button>
              </div>
              
              <div className="border-t border-border px-6 md:px-8 py-6">
                <p className="font-medium mb-4">What's included:</p>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center max-w-3xl mx-auto bg-muted/30 p-8 rounded-lg">
          <h3 className="text-xl font-bold mb-2">Need a custom plan?</h3>
          <p className="text-muted-foreground mb-6">
            If you need specific features or have special requirements, contact our sales team to create a custom plan that works for you.
          </p>
          <Button>Contact Sales</Button>
        </div>
      </div>
    </section>
  )
}