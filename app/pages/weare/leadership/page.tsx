import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-white">
       <section className="w-full py-16 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Side - Text Content */}
          <div className="max-w-xl">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Guiding minds<span className="text-blue-600">.</span>
            </h2>

            <p className="mt-8 text-lg text-gray-600 leading-relaxed">
              We invite you on a captivating journey into the realm of
              inspiring leaders and strategists. Discover stories and insights
              that unveil unique approaches to success from the forefront
              personalities at EffectiveSoft.
            </p>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              From transparent profiles of key executives to narratives about
              the leadership culture, this section aims to highlight values
              and vision that form the core of the EffectiveSoft company.
            </p>
          </div>

          {/* Right Side - Geometric Design Grid */}
          <div className="w-full">
            <div className="grid grid-cols-3 gap-0 max-w-2xl ml-auto">
              {/* Row 1 */}
              {/* Top Left - Blue Circle */}
              <div className="aspect-[1/0.8] relative overflow-hidden">
                <div className="absolute inset-0 flex items-end">
                  <div className="w-full h-full bg-blue-600 rounded-t-full"></div>
                </div>
              </div>

              {/* Top Middle - Light Blue Circle */}
              <div className="aspect-[1/0.8] relative overflow-hidden">
                <div className="absolute inset-0 flex items-end">
                  <div className="w-full h-full bg-blue-200 rounded-t-full"></div>
                </div>
              </div>

              {/* Top Right - Conference Room Image Circle */}
              <div className="aspect-[1/0.8] relative overflow-hidden rounded-full">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                  alt="Conference room"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Row 2 - Combined wrapper for equal heights */}
              <div className="col-span-3 grid grid-cols-3 gap-0">
                {/* Middle Left - Business People Silhouettes */}
                <div className="col-span-2 aspect-[2/0.8] relative overflow-hidden rounded-[12%]">
                  <img
                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&q=80"
                    alt="Business team"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Middle Right - Gradient Blue Circle */}
                <div className="aspect-[1/0.8] relative overflow-hidden rounded-full">
                  <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-600"></div>
                </div>
              </div>

              {/* Row 3 */}
              {/* Bottom Left - Light Blue Semi-circle */}
              <div className="aspect-[1/0.8] relative overflow-hidden">
                <div className="absolute inset-0 flex items-start">
                  <div className="w-full h-full bg-blue-200 rounded-b-full"></div>
                </div>
              </div>

              {/* Bottom Middle - Woman Presenting Circle */}
              <div className="aspect-[1/0.8] relative overflow-hidden rounded-full">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
                  alt="Woman presenting"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Bottom Right - Green Semi-circles (Quote marks) */}
              <div className="aspect-[1/0.8] relative overflow-hidden">
                <div className="w-full h-full flex gap-2">
                  {/* Left quote mark */}
                  <div className="flex-1 relative">
                    <div className="absolute inset-0 flex items-start">
                      <div className="w-full h-full bg-lime-400 rounded-b-full"></div>
                    </div>
                  </div>
                  {/* Right quote mark */}
                  <div className="flex-1 relative">
                    <div className="absolute inset-0 flex items-start">
                      <div className="w-full h-full bg-lime-400 rounded-b-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
      <section className="w-full py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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
                <p className="mt-1 text-gray-600">Location Head, Costa Rica</p>
              </div>
            </div>

            <div className="flex flex-col gap-8">
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
                  <p className="mt-1 text-gray-600">Chief Executive Officer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-16 ">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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
                <p className="mt-2 text-gray-500">Location Head, Costa Rica</p>
              </div>
            </div>

            <div className="lg:col-span-2 flex flex-col gap-8">
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
