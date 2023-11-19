"use client"
import { useState, useEffect } from 'react'

export default function Home() {
  const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
  <main>
    <section id='header'>
      <div>LOGO</div>
      <h1 className='text-2xl font-semibold md:mb-1'>
        #1 Client Aqusition Agency
      </h1>
      <div className='font-semibold md:text-6xl md:leading-[4.5rem] md:font-bold md:mb-1'>
        We Gaurantee We&apos;ll Fill Your Calendar With Qualified <span className='text-red-500'>Quote-Ready Leads FOR FREE</span>
      </div>
      <div className='md:text-xl md:font-semibold md:mb-4'>
        Yes we&apos;ll work as your companies resonalised sales & marketing team
      </div>
      <div className='md:text-xl md:font-semibold md:mb-4'>
        YES WE WORK <span className='text-red-500'>COMPLETELY FOR FREE !!!</span>
      </div>
      <div className='mx-auto basis-auto'>
        <iframe width="560" height="315" src="https://youtu.be/embed/vobW_6dhESA&amp;controls=0&amp;start=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
      </div>
      {
        isClient && (
          <div id='booking' className=''>
            <div className="calendly-inline-widget" data-url="https://calendly.com/renoblade/30min" style={{minWidth:"320px",height:"700px"}}></div>
            <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
          </div>
        )
      }
    </section>

    <section className='md:mb-12 md:leading-[3rem]'>
      <div className='md:mb-12'>
        <h1 className='font-semibold md:text-5xl md:leading-[4rem] md:font-bold md:mb-3'>
          You want to grow your business and <span className='text-red-500'>add an extra 50k-1m</span> or more to your <span className='text-red-500'>monthly revenue</span> 
        </h1>
        <h3 className='md:text-3xl md:px-20 md:leading-[4rem]'>
          Maybe you&apos;re struggling to find customers or you&apos;re spreading yourself too thin across so many tasks that need your attention.
          It seems like every other day, there’s a new fire to put out, a new problem that comes up.
        </h3>
        <div className=' bg-black rounded-lg md:mt-5 inline-block'> 
          <a href='#booking' className='text-white md:p-5'>
            Book a meeting with us
          </a>
        </div>
      </div>

      <div className='md:mb-12'>
        <h1 className='font-semibold md:text-5xl md:leading-[4rem] md:font-bold md:mb-3'>
          We&apos;ll Take You There. Secure <span className='text-red-500'>More Clients</span>, Aquire <span className='text-red-500'>More Revenue</span>, Expand Your Business
        </h1>

        <h3 className='md:text-3xl md:px-20 md:leading-[3rem] text-left'>
          <div className='text-center'>We&apos;ll handle:</div>
          <br/>
          1) Generate Leads for you business (<span className='text-red-500'>Lead Generation</span>)
          <br/>
          <br/>
          2) Build effective and long-term relationships with potential customers (<span className='text-red-500'>Client Nurturing</span>)
          <br/>
          <br/>
          3) Book leads into your calander (<span className='text-red-500'>Appointment Setting</span>)
          <br/>
          <br/>
          4) Run and optimising you marketing campaign ads (<span className='text-red-500'>Marketing</span>)
          <br/>
          <br/>
          5) Negotiate or convince a lead to purchase your offer over your competitors (<span className='text-red-500'>Sales/Closing</span>)
          <br/>
          <br/>
          6) Obtain <span className='text-red-500'>Google</span>, <span className='text-red-500'>Facebook</span> & <span className='text-red-500'>Trustpilot Reviews</span> from customers on your behalf to boots you companies ranking on google search; leading to more organic traffic
          <br/>
          <br/>
          <div className='text-center'>all you need to do is issue a quote and deliver a 5* service</div>
        </h3>

        <div className='bg-black rounded-lg md:mt-10 inline-block'> 
          <a href='#booking' className='text-white md:p-5'>
            Convinced already ? click here to book a meeting then !
          </a>
        </div>
      </div>

      <div className='md:mb-12'>
        <h1 className='font-semibold md:text-5xl md:leading-[4rem] md:font-bold md:mb-3'>
          YES!! WE&apos;RE SERIOUS, WE&apos;LL DO IT <span className='text-red-500'>ALL FOR FREE</span>, YOU DON&apos;T HAVE TO PAY US A PENNY!!!
        </h1>
        <h3 className='md:text-3xl md:px-20 md:leading-[3rem] text-left'>
        <div className='text-center'>Kinda... There are some conditions; All you need to cover is the ad expense and we&apos;ll work our magic. You do not pay us a penny UNLESS we meet 2 conditions</div>
          <br/>
          <span className='text-red-500'>1</span>) we make you a profit. This also takes into account the ad spend and our potencial service charge (so no matter what you make a profit)
          <br/>
          <br/>
          <span className='text-red-500'>2</span>) we get AT MINIMUM 5 leads booked into your calander within the first month
          <br/>
          <br/>
          <div className='text-center'>If we fail to meet these conditions then <span className='text-red-500'>you do not pay us a dime</span></div>
        </h3>
        <div className='md:mt-12 bg-black rounded-lg inline-block'> 
        <a href='#booking' className='text-white md:p-5'>
          Come on, you know you wonna, click here to book a meeting !
        </a>
      </div>
      </div>
    </section>

    <section className='md:mb-12 md:leading-[3rem]'>
      <h1 className='font-semibold md:text-5xl md:leading-[4rem] md:font-bold md:mb-4'>
        who are we
      </h1>
      <div className='flex gap-10 '>
        <div className='w-[60%]'>
          <h3 className='md:text-xl md:font-semibold md:mb-4'>About Us</h3>
          <div>
            <h3 className='text-left font-light text-xl mb-3 md:leading-10'>
              We serve as your business growth partner, committed to the 
              profitable expansion of your business through strategic social media marketing.
            </h3>
            <h3 className='text-left font-light text-xl mb-3 md:leading-10'>
              We develop dynamic strategies that are finely tuned to your brand,
              delivering faster customer conversions, optimizing your advertising budget,
              and supporting your journey towards scalability.
            </h3>
            <h3 className='text-left font-light text-xl md:leading-10'>
              We also implement high-performing email retention strategies, enabling you to acquire a larger
              customer base at a more favorable cost per acquisition,
              ultimately leading to a profitable return on your marketing investment.
            </h3>
          </div>
        </div>

        <div className='w-[40%]'>
          <h3 className='md:text-xl md:font-semibold md:mb-4'>our process in 4 steps</h3>
          <div>
            <div>
              <h3 className='text-right font-bold'>01. Evaluation</h3>
              <div className='text-right font-medium'>Define your ICP (Ideal Customer Profile)</div>
              <p className='text-right font-light mb-3 md:leading-7'>
                We provide 1-to-1 onboarding, target market panals & review past client campaigns to get a better understanding of your ideal customer profile
              </p>
            </div>
            <div>
              <h3 className='text-left font-bold'>02. Preporation</h3>
              <div className='text-left font-medium'>Create a game plan</div>
              <p className='text-left font-light mb-3 md:leading-7'>
                based off your ICP we can create relevent copy, attain relevant prospects and setup a step by step game plan to crack the TOF
              </p>
            </div>
            <div>
              <h3 className='text-right font-bold'>03. Execution</h3>
              <div className='text-right font-medium'>Manage Sequences</div>
              <p className='text-right font-light mb-3 md:leading-7'>
                Once we start campaigns through calling, email & Linkedin, we track the response to book leads into your sales teams calander
              </p>
            </div>
            <div>
              <h3 className='text-left font-bold'>04. Optimization</h3>
              <div className='text-left font-medium'>Optimise and Scale</div>
              <p className='text-left font-light md:leading-7'>
                Each week we are making improvements so we can book around 1%-2.5% of contacts we reach, once we hit 
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-black rounded-lg md:mt-12 inline-block'> 
        <a href='#booking' className='text-white md:p-5'>
          Ok, stop with the games, we both know you wonna book a meeting so just click here already !
        </a>
      </div>
    </section>
    
    <footer className='md:mb-20 md:leading-[3rem]'>
      <div>AAAAND...YOU&apos;RE STILL SCROLLING</div>
      <h1 className='font-semibold md:text-5xl md:leading-[4rem] md:font-bold md:mb-4'>
        THERE&apos;S NOTHING DOWN HERE
      </h1>
      <div>But since you&apos;re here, we might as well put this cool button for you to click and book a lil strategy session.</div>
      <div className='bg-black rounded-lg md:mt-10 inline-block'> 
        <a href='#booking' className='text-white md:p-5'>
          BOOK THE MEETING... NOWW !!! 
        </a>
      </div>
    </footer>
  </main>
  )
}