"use client";
import Script from "next/script";

export default function ContactUs() {
  return (
    <section className="w-screen min-h-screen bg-gray-800 text-white ">
      <div className="flex min-h-screen items-center justify-between px-6 lg:px-20 ">

        <div className="">
          <h1 className="text-4xl lg:text-[48px] leading-tight font-medium">
            Seeking a Partner? Our <br />
            expert team is here for you
          </h1>

          <h3 className="mt-4 text-gray-400 font-medium max-w-xl">
            To get started, we like to gather more information about your needs.
            We will evaluate your application and set up a free estimation call.
          </h3>

         <div className="mt-[150] grid grid-cols-2 gap-x-20 text-gray-400">
  <div>
    <h3 className="font-semibold mb-6">Partnerships</h3>
    <div className="grid grid-cols-3 gap-6 items-center">
      <img src="/salesforce.png" alt="Partner 1" className="h-12 mx-auto" />
      <img src="/aws.png" alt="Partner 2" className="h-12 mx-auto" />
      <img src="/microsoft.png" alt="Partner 3" className="h-12 mx-auto" />
    </div>
  </div>

  <div>
    <h3 className="font-semibold mb-6">Awards</h3>
    <div className="grid grid-cols-3 gap-6 items-center">
      <img src="/award1.svg" alt="Award 1" className="h-12 mx-auto" />
      <img src="/award2.svg" alt="Award 2" className="h-12 mx-auto" />
      <img src="/award3.svg" alt="Award 3" className="h-12 mx-auto" />
    </div>
  </div>
</div>

        </div>

        <div className="flex-1 max-w-lg w-full mr-[360] py-14">
          <iframe
            src="https://api.leadconnectorhq.com/widget/form/zSNZykfGXVwGnQxHpQnO"
            className="w-full h-[557px] rounded-lg border-none"
            title="Form"
          />
          <Script
            src="https://link.msgsndr.com/js/form_embed.js"
            strategy="afterInteractive"
          />
        </div>

      </div>
      
    </section>
  );
}
