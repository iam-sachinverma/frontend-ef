import './OurPicks.css'

export default function OurPicks() {
    return (
        <section className="py-24 lg:py-24">
            <div className="container px-4 mx-auto flex flex-wrap justify-between items-start">
                <div className="w-full lg:w-3/4 lg:pt-0 pt-12">
                    <div className="flex flex-wrap -mx-3">
                        <div className="w-1/2 md:w-1/3 px-3 pb-4 lg:pb-0">
                            <div className="picture mb-3">
                                <a href="#">
                                    <img src="https://raw.githubusercontent.com/emfaizan/tailwind-ecommerce-app/main/assets/images/product-1.png" alt=""/>
                                </a>
                            </div>
                            <div className="info">
                                <div className="name text-xl font-tenor">Abiha</div>
                                <div className="description text-base">
                                    Nafisa Dalal
                                </div>
                                <div className="price text-base">
                                    Rs.1500.00
                                </div>
                            </div>
                        </div>

                        <div className="w-1/2 md:w-1/3 px-3 pb-4 lg:pb-0">
                            <div className="picture mb-3">
                                <a href="#">
                                    <img src="https://github.com/emfaizan/tailwind-ecommerce-app/blob/main/assets/images/product-2.png?raw=true" alt=""/>
                                </a>
                            </div>
                            <div className="info">
                                <div className="name text-xl font-tenor">Khaki Green Abaya</div>
                                <div className="description text-base">
                                    Asiyam
                                </div>
                                <div className="price text-base">
                                Rs.1500.00
                                </div>
                            </div>
                        </div>

                        <div className="w-1/2 md:w-1/3 px-3 pb-4 lg:pb-0">
                            <div className="picture mb-3">
                                <a href="#">
                                    <img src="https://raw.githubusercontent.com/emfaizan/tailwind-ecommerce-app/main/assets/images/product-1.png" alt=""/>
                                </a>
                            </div>
                            <div className="info">
                                <div className="name text-xl font-tenor">Halo Running Hoodie</div>
                                <div className="description text-base">
                                    Veil Garments
                                </div>
                                <div className="price text-base">
                                Rs.1500.00
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full lg:w-1/4 lg:pl-8 order-first lg:order-none">
                    <h2 className="mb-4 md:mb-6 lg:mb-12 text-dark text-base heading-border">Editors Pick</h2>

                    <h3 className="font-tenor text-3xl lg:text-2-5rem text-dark leading-10">Lorem ipsum dolor sit amet consectetur </h3>

                    <a href="#" className="btn-2 mt-8">Shop our picks</a>
                </div>
            </div>
        </section>

    );
}