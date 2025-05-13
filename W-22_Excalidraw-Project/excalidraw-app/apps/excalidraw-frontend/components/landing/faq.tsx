"use client"

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

type FAQItem = {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: 'Do I need to create an account to use Excalidraw?',
    answer: 'No, you don\'t need an account to start using Excalidraw. You can create and share drawings without signing up. However, creating an account allows you to save your drawings, access them from anywhere, and enjoy additional features.'
  },
  {
    question: 'Is my data secure on Excalidraw?',
    answer: 'Yes, we take security seriously. Your drawings are processed in your browser and not stored on our servers unless you explicitly save them. All data is encrypted in transit and at rest when stored.'
  },
  {
    question: 'Can I use Excalidraw offline?',
    answer: 'Yes, Excalidraw works offline once loaded. You can continue drawing without an internet connection, and your work will be saved locally in your browser.'
  },
  {
    question: 'How many people can collaborate on a single drawing?',
    answer: 'Our free plan allows up to 3 collaborators per board. The Pro and Team plans offer unlimited collaborators, making it perfect for larger teams working together.'
  },
  {
    question: 'Can I export my drawings to use in other applications?',
    answer: 'Yes, you can export your drawings in various formats including PNG, SVG, and PDF (for Pro and Team plans). This makes it easy to include your Excalidraw creations in presentations, documents, and websites.'
  },
  {
    question: 'Is Excalidraw suitable for professional use?',
    answer: 'Absolutely! Excalidraw is used by professionals across industries including software development, education, design, and business consulting. The hand-drawn aesthetic adds a unique touch to professional diagrams and presentations.'
  },
  {
    question: 'Do you offer educational discounts?',
    answer: 'Yes, we offer special pricing for educational institutions. Please contact our sales team with your academic credentials for more information on educational discounts.'
  },
  {
    question: 'How do I get help if I encounter issues?',
    answer: 'Free users can access our community forums and documentation. Pro and Team users get priority support via email. Team plan users also receive dedicated support channels for faster resolution of issues.'
  }
]

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about Excalidraw
          </p>
        </div>

        <div className="max-w-3xl mx-auto divide-y border-t border-b">
          {faqs.map((faq, index) => (
            <div key={index} className="py-5">
              <button
                className="flex justify-between items-center w-full text-left"
                onClick={() => toggleQuestion(index)}
                aria-expanded={openIndex === index}
              >
                <h3 className="text-lg font-medium">{faq.question}</h3>
                <ChevronDown className={cn(
                  "h-5 w-5 transition-transform duration-200",
                  openIndex === index ? "transform rotate-180" : ""
                )} />
              </button>
              <div
                className={cn(
                  "mt-2 text-muted-foreground overflow-hidden transition-all duration-300",
                  openIndex === index ? "max-h-96" : "max-h-0"
                )}
              >
                <p className="py-2">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <Button>Contact Support</Button>
        </div>
      </div>
    </section>
  )
}