import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-white">

      {/* ================= GUIDING MINDS SECTION ================= */}
      <section className="w-full py-16 lg:py-24">
  <div className="mx-auto max-w-7xl px-6">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

      {/* LEFT TEXT */}
      <div>
        <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900">
          Guiding minds<span className="text-blue-600">.</span>
        </h2>

        <p className="mt-6 text-gray-600 leading-relaxed max-w-xl">
          We invite you on a captivating journey into the realm of inspiring
          leaders and strategists. Discover stories and insights that unveil
          unique approaches to success from the forefront personalities.
        </p>

        <p className="mt-4 text-gray-600 leading-relaxed max-w-xl">
          From transparent profiles of key executives to narratives about
          leadership culture, this section highlights values and vision.
        </p>
      </div>

      {/* RIGHT DESIGN */}
      <div className="flex justify-center lg:justify-end">
        <div className="relative h-[140px] sm:h-[160px] w-full max-w-[620px] bg-white overflow-hidden flex items-start">

          {/* LEFT – TOP BLUE CUT CIRCLE */}
          <div className="relative w-[140px] sm:w-[160px] h-full overflow-hidden">
            <div className="absolute -top-[70px] sm:-top-[80px] left-0 w-[140px] sm:w-[160px] h-[140px] sm:h-[160px] bg-blue-600 rounded-full" />
          </div>

          {/* LEFT – BOTTOM BLUE HALF */}
          <div className="relative w-[140px] sm:w-[160px] h-full overflow-hidden">
            <div className="absolute top-[36px] sm:top-[40px] left-0 w-[140px] sm:w-[160px] h-[140px] sm:h-[160px] bg-blue-600 rounded-t-full" />
          </div>

          {/* CENTER – LIGHT BLUE CIRCLE */}
          <div className="w-[140px] sm:w-[160px] h-[140px] sm:h-[160px] bg-blue-200 rounded-full" />

          {/* RIGHT – IMAGE CIRCLE CUT */}
          <div className="relative w-[200px] sm:w-[220px] h-full overflow-hidden">
            <div className="absolute right-0 w-[140px] sm:w-[160px] h-[140px] sm:h-[160px] rounded-full overflow-hidden">
              <Image
                src="/office.jpg"
                alt="Office"
                fill
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
</section>

      {/* ================= LEADERSHIP CARDS SECTION ================= */}
      <section className="w-full py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* LEFT BIG CARD */}
            <div className="lg:col-span-2 border rounded-md overflow-hidden">
              <div className="relative w-full h-[420px] sm:h-[520px]">
                <Image
                  src="/AI.png"
                  alt="Mayela Zúñiga"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  Mayela Zúñiga
                </h3>
                <p className="mt-1 text-gray-600">
                  Location Head, Costa Rica
                </p>
              </div>
            </div>

            {/* RIGHT STACK */}
            <div className="flex flex-col gap-8">

              {/* CARD 1 */}
              <div className="border rounded-md overflow-hidden">
                <div className="relative w-full h-[240px]">
                  <Image
                    src="/AI.png"
                    alt="Karina Kashuba"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Karina Kashuba
                  </h3>
                  <p className="mt-1 text-gray-600">
                    Head of Digital Experience
                  </p>
                </div>
              </div>

              {/* CARD 2 */}
              <div className="border rounded-md overflow-hidden">
                <div className="relative w-full h-[240px]">
                  <Image
                    src="/AI.png"
                    alt="Alexander Kachaev"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Alexander Kachaev
                  </h3>
                  <p className="mt-1 text-gray-600">
                    Chief Executive Officer
                  </p>
                </div>
                
              </div>

            </div>

            

          </div>
        </div>
      </section>
      {/* ================= LEADERSHIP CARDS SECTION ================= */}
<section className="w-full py-16 ">
  <div className="mx-auto max-w-7xl px-6">

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

      {/* LEFT TALL CARD */}
      <div className="border border-gray-200 bg-white">
        <div className="relative w-full h-[520px]">
          <Image
            src="/AI.png"
            alt="Mayela Zúñiga"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900">
            Mayela Zúñiga
          </h3>
          <p className="mt-2 text-gray-500">
            Location Head, Costa Rica
          </p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="lg:col-span-2 flex flex-col gap-8">

        {/* TOP TWO SMALL CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

          <div className="border border-gray-200 bg-white">
            <div className="relative w-full h-[240px]">
              <Image
                src="/AI.png"
                alt="Karina Kashuba"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Karina Kashuba
              </h3>
              <p className="mt-2 text-gray-500">
                Head of Digital Experience
              </p>
            </div>
          </div>

          <div className="border border-gray-200 bg-white">
            <div className="relative w-full h-[240px]">
              <Image
                src="/AI.png"
                alt="Alexander Kachaev"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Alexander Kachaev
              </h3>
              <p className="mt-2 text-gray-500">
                Chief Executive Officer
              </p>
            </div>
          </div>

        </div>

        {/* BOTTOM WIDE CARD */}
        <div className="border border-gray-200 bg-white">
          <div className="relative w-full h-[320px]">
            <Image
              src="/AI.png"
              alt="Vlad Movsikov"
              fill
              className="object-cover"
            />
          </div>

          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900">
              Vlad Movsikov
            </h3>
            <p className="mt-2 text-gray-500">
              Director, Global Delivery
            </p>
          </div>
        </div>

      </div>

    </div>
  </div>
</section>


    </main>
  );
}
