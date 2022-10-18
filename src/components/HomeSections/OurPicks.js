import './OurPicks.css'

export default function OurPicks() {
    return (
      <section className="py-24 lg:py-24">
        <div className="container px-4 mx-auto flex flex-wrap justify-between items-start">
          <div className="w-full lg:w-3/4 lg:pt-0 pt-12">
            <div className="flex flex-wrap -mx-3">
              <div className="w-1/2 md:w-1/3 px-3 pb-4 lg:pb-0">
                <div className="picture mb-3">
                  <a href={`/shop`}>
                    <img
                      src="https://images.unsplash.com/photo-1589365252845-092198ba5334?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmFtYm9vJTIwdG9vdGhicnVzaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                      alt=""
                    />
                  </a>
                </div>
                <div className="info">
                  <div className="name text-xl font-tenor">Ecofreaky</div>
                  <div className="description text-base">Bamboo Toothbrush</div>
                </div>
              </div>

              <div className="w-1/2 md:w-1/3 px-3 pb-4 lg:pb-0 border border-yellow pt-2">
                <div className="picture mb-3">
                  <a href={`/shop`}>
                    <img
                      src="https://images.unsplash.com/photo-1634068966402-86a27b9d57c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJhbWJvbyUyMHRvb3RoYnJ1c2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                      alt=""
                    />
                  </a>
                </div>
                <div className="info">
                  <div className="name text-xl font-tenor">Ecofreaky</div>
                  <div className="description text-base">Nano Bristles</div>
                </div>
              </div>

              <div className="w-1/2 md:w-1/3 px-3 pb-4 lg:pb-0 border pt-2">
                <div className="picture mb-3 rounded-md">
                  <a href={`/products/decor`}>
                    <img
                      src="https://images.unsplash.com/photo-1656214383297-342889f31bdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJhbWJvbyUyMGRlY29yfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                      alt=""
                    />
                  </a>
                </div>
                <div className="info">
                  <div className="name text-xl font-tenor">Bamboo Products</div>
                  <div className="description text-base">Sustainable Home</div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/4 lg:pl-8 order-first lg:order-none">
            <h2 className="mb-4 md:mb-6 lg:mb-12 text-dark text-base heading-border">
              Editors Pick
            </h2>

            <h3 className="font-tenor text-3xl lg:text-2-5rem text-dark leading-10">
              The best of the best! Our editors' favorite products.
            </h3>

            <a href="/" className="btn-1 mt-8">
              Shop our picks
            </a>
          </div>
        </div>
      </section>
    );
}