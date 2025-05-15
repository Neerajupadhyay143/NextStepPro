import HeroSection from "@/components/Hero";
import { Accordion, AccordionItem, AccordionContent, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { faqs } from "@/data/faqs";
import { features } from "@/data/features";
import { howItWorks } from "@/data/howItWorks";
import { testimonial } from "@/data/testimonial";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { ArrowRight } from "lucide-react";

import Image from "next/image";
import Link from "next/link";

export default function Home() {

  return (
    <>
      <div className="grid-background " />
      <div >
        <HeroSection />
      </div>

      <section className=" bg-background w-full py-12 md:py-24 lg:py-32 ">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-bold text-3xl tracking-tighter text-center mb-12">Powerful Features for Your Career Growth</h2>
        </div>

        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4 md:px-0 ">
          {features.map((feature, index) => {
            return <>
              <Card key={index} className="group  rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 transition-colors duration-300">
                <CardContent className=' text-center flex flex-col items-center' >
                  <div className="flex flex-col text-center justify-center items-center">
                    {feature.icon}
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            </>
          })}
        </div>


      </section>

      {/* *********************************************************************************************************************************************** */}

      <section className=" bg-muted w-full py-12 md:py-24 lg:py-32 ">

        <div className="container mx-auto px-4 md:px-6">
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-6 max-w-6xl mx-auto px-4 md:px-0 ">
            <div className="flex flex-col justify-center space-y-2 items-center">
              <h3 className="text-4xl font-bold"> 50+</h3>
              <p className=" text-muted-foreground">Industries Coverd</p>
            </div>

            <div className="flex flex-col justify-center space-y-2 items-center">
              <h3 className="text-4xl font-bold"> 1000+</h3>
              <p className=" text-muted-foreground">Interview Questions</p>
            </div>

            <div className="flex flex-col justify-center space-y-2 items-center">
              <h3 className="text-4xl font-bold"> 95%</h3>
              <p className=" text-muted-foreground">Success Rate</p>
            </div>

            <div className="flex flex-col justify-center space-y-2 items-center">
              <h3 className="text-4xl font-bold"> 24/7</h3>
              <p className=" text-muted-foreground">AI Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* *********************************************************************************************************************************************** */}

      <section className=" bg-background w-full py-12 md:py-24 lg:py-32 ">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-bold text-3xl  text-center mb-4 md:mb-6">How It Works  </h2>
          <p className="text-center text-muted-foreground  mb-12 ">Four simple steps tp accelerate yout career growth</p>
        </div>

        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 max-w-6xl mx-auto px-4 md:px-0 ">
          {howItWorks.map((items, index) => {
            return <>

              <div key={index} className="flex flex-col justify-center items-center space-y-4" >
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 transition-colors duration-300  rounded-full w-16 h-16 flex justify-center items-center ">
                  <p className=""> {items.icon}</p>
                </div>
                <h3 className="text-xl font-bold">{items.title}</h3>
                <p className="text-muted-foreground text-center">{items.description}</p>
              </div>
            </>
          })}
        </div>
      </section>

      {/* *********************************************************************************************************************************************** */}

      <section className="  w-full py-12 md:py-24 lg:py-32 ">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-bold text-3xl  text-center mb-12">What our Users says</h2>
        </div>

        <div className=" grid grid-cols-1 md:grid-cols-3  gap-8 max-w-6xl mx-auto px-4 md:px-0 ">
          {testimonial.map((testimonial, index) => {
            return <>
              <Card key={index} className="group  rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 transition-colors duration-300">
                <CardContent className='  flex flex-col space-x-3 ' >
                  <div>
                    <div className="flex items-center space-x-4">
                      <div className=" relative h-12 w-12 flex  flex-shrink-0 ">
                        <Image
                          src={testimonial.image}
                          width={50}
                          height={50}
                          alt={testimonial.author}
                          className="rounded-full" />
                      </div>
                      <div className="flex flex-col">
                        <p className="text-sm font-semibold ">{testimonial.author}</p>
                        <p className="text-purple-300 font-bold ">{testimonial.role}</p>
                        <p className="text-sm text-dark-500 ">{testimonial.company}</p>
                      </div>

                    </div>
                    <blockquote className="mt-4 flex flex-col justify-center w-full items-center content-center space-x-3">
                      <p className="text-white italic relative">
                        <span className="text-3xl text-primary absolute -top-4 -left-2">
                          &quot;
                        </span>
                        {testimonial.quote}
                        <span className="text-3xl text-primary p-1 absolute -bottom-4">
                          &quot;
                        </span>
                      </p>
                    </blockquote>
                  </div>

                </CardContent>
              </Card >
            </>
          })}
        </div>
      </section >


      {/* *********************************************************************************************************************************************** */}

      <section className=" bg-background w-full py-12 md:py-24 lg:py-32 ">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-bold text-3xl  text-center mb-4 md:mb-6">Frequently Asked Questions</h2>
          <p className="text-center text-muted-foreground  mb-12 ">Find answers to common questions about our platform</p>
        </div>

        <div className="max-w-6xl mx-auto px-4 md:px-0 ">
          {faqs.map((items, index) => {
            return <>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem key={index} value={`items${index}`}>
                  <AccordionTrigger className='text-muted-foreground'>{items.question}</AccordionTrigger>
                  <AccordionContent>
                    {items.answer}
                  </AccordionContent>
                </AccordionItem>
                <Separator className="h-2 py-2 text-white" />
              </Accordion>
            </>
          })}
        </div>
      </section>
      {/* *********************************************************************************************************************************************** */}

      <section className="w-full">
        <div className="mx-auto py-24 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg">
          <div className="flex flex-col items-center justify-center space-y-4 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter text-primary-foreground sm:text-4xl md:text-5xl">
              Ready to Accelerate Your Career?
            </h2>
            <p className="mx-auto max-w-[600px] text-primary-foreground/80 md:text-xl">
              Join thousands of professionals who are advancing their careers
              with AI-powered guidance.
            </p>
            <Link href="/dashboard" passHref>
              <Button
                size="lg"
                variant="secondary"
                className="h-11 mt-5 animate-bounce"
              >
                Start Your Journey Today <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>

  );
}
