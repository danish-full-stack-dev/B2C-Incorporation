import Link from "next/link";

export default function page() {
  return (
    <div className="pb-20">
      <div className="w-full h-[80vh] relative overflow-hidden">
        <img src="/real1.png" alt="bg pic" className="w-full object-center" />

        <div className="flex bg-black/70 inset-0 absolute text-white">
          <div className="w-8/12 mx-auto flex justify-start h-2/3 my-auto flex-col gap-3">
            <h1 className="text-6xl font-bold leading-tight">Contact us</h1>
            <p className="text-xl w-1/2">
              Whether you need support or have any questions, our friendly team
              is here and always happy to help. Please use the options below to
              get in touch with us.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center pb-20">
        <div className="flex gap-12 absolute text-black -mt-28 w-8/12 px-10">
          <div className="flex flex-col gap-3 w-1/3 px-5 pt-8 pb-10 bg-gray-50 rounded-xl font-medium shadow-md hover:shadow-xl transition-shadow duration-200">
            <img src="/favicon.png" alt="icon" className="size-8" />
            <h2 className="font-bold">CAll</h2>
            <p>Our phone lines are open Monday to Friday, 9am to 5.30pm GMT</p>
            <Link
              href={""}
              className="hover:text-blue-800 transition-colors duration-150 font-bold w-fit"
            >
              +44 7380 594504
            </Link>
          </div>
          <div className="flex flex-col gap-3 w-1/3 px-5 pt-8 pb-10 bg-gray-50 rounded-xl font-medium shadow-md hover:shadow-xl transition-shadow duration-200">
            <img src="/favicon.png" alt="icon" className="size-8" />
            <h2 className="font-bold">Email us</h2>
            <p>We aim to respond to all emails within one business day</p>
            <Link
              href={""}
              className="hover:text-blue-800 transition-colors duration-150 font-bold w-fit"
            >
              Email Us
            </Link>
          </div>
          <div className="flex flex-col gap-3 w-1/3 px-5 pt-8 pb-10 bg-gray-50 rounded-xl font-medium shadow-md hover:shadow-xl transition-shadow duration-200">
            <img src="/favicon.png" alt="icon" className="size-8" />
            <h2 className="font-bold">Schedule a call</h2>
            <p>Schedule a 15-minute call with one of our specialists</p>
            <Link
              href={""}
              className="hover:text-blue-800 transition-colors duration-150 font-bold w-fit"
            >
              Schedule a call
            </Link>
          </div>
        </div>
      </div>
      {/* <ContactForm /> */}
    </div>
  );
}
