import Layout from "../components/base/layout";
import Image from "next/image";

import BuildRepair_list from "../components/list/BuildRepair_list";
import Remodeling_list from "../components/list/Remodeling_list";
import Link from "next/link";
import Blog_list from "../components/list/Blog_list";
import Company_card from "../components/cards/Company_card";

export default function Home() {
    return (
        <Layout>
            <div className='section p-0'>

                <div className='columns'>
                    <div className='column is-12'>
                        <div className='banner-home'>
                            <Image src='/img/banner.png' alt='banner home' layout={'fill'}/>


                            <div className='banner-home_box'>
                                <h1 className='is-size-2 has-text-white is-bold lh-1'>Build</h1>
                                <h1 className='is-size-2 has-text-white is-bold lh-1'>Remodel</h1>
                                <h1 className='is-size-2 has-text-white is-bold lh-1'>Innovate</h1>
                                <hr className='has-bg-orange w-50'/>
                                <p className='has-text-white '>Time for a change… imagine your new lifestyle and make it
                                    real.</p>

                            </div>


                        </div>
                    </div>
                </div>
            </div>

            <section className='section has-bg-dark'>
                <div className='container is-max-desktop'>
                    <form>
                        <div className='columns is-multiline'>
                            <div className='column is-12'>
                                <h2 className='title_section has-text-white is-size-3'>Get a Free Quote!</h2>
                                <hr className='hr_cat'/>
                                <p className='has-text-white'>As son you contact our expert team, this Will be the only
                                    form you have to fill in!</p>

                            </div>


                            <div className='column is-4-desktop'>
                                <div className="control">
                                    <input className="input" type="text" placeholder="Your Name"/>
                                </div>
                            </div>

                            <div className='column is-4-desktop '>
                                <div className="control">
                                    <input className="input" type="text" placeholder="Your Address"/>
                                </div>
                            </div>

                            <div className='column is-4-desktop'>
                                <div className="control">
                                    <input className="input" type="email" placeholder="Your Email Address"/>
                                </div>
                            </div>

                            <div className='column is-12'>
                                <div className="control">
                                    <textarea className="textarea" placeholder="How can we help you?"/>
                                </div>
                            </div>

                            <div className='column is-12'>
                                <p className='has-text-white'>100% privacy Guaranteed</p>
                            </div>

                            <div className='column is-4-desktop'>
                                <button className="button is-primary  is-fullwidth" type={'submit'}>REQUEST A CALLBACK
                                </button>
                            </div>

                        </div>
                    </form>
                </div>
            </section>

            <section className=''>
                <div className='columns'>
                    <div className='column is-4-desktop pr-0 '>
                        <div style={{
                            position: "relative",
                            width: "100%",
                            height: "100%",
                            maxHeight: "100%",
                            maxWidth: "100%",
                        }}>
                            <Image src='/img/house.png' layout={'fill'} alt='house'/>
                        </div>

                    </div>

                    <div className='column is-6-desktop'>
                        <div className='column is-12'>
                            <div className='p-5 pl-0 container'>

                                <h2 className='title_section is-size-3 has-text-dark'>Custom Projects</h2>
                                <hr className='hr_cat'/>
                                <p className='has-text-grey'>100% tailor made projects from the concept to the execuon.
                                    From remodeling
                                    to brand new construcon. At home or for your office.</p>


                                <div className='columns py-6 is-multiline'>
                                    <div className='column is-6 is-size-5'>
                                        <ul className="inside">
                                            <li className='has-text-primary'>Design and plan</li>
                                            <li>Licences</li>
                                            <li>Contrucon</li>
                                        </ul>
                                    </div>

                                    <div className='column is-6  is-size-5'>
                                        <ul className="inside">
                                            <li>Design and plan</li>
                                            <li>Licences</li>
                                            <li>Contrucon</li>
                                        </ul>
                                    </div>

                                    <div className='column is-6-desktop mt-3'>

                                        <Link href={'/'}>
                                            <a className="button is-primary is-fullwidth" type={'submit'}>START YOUR
                                                PROJECT
                                            </a>
                                        </Link>
                                    </div>

                                </div>

                            </div>


                        </div>


                    </div>

                </div>
            </section>

            <section className='section has-bg-gris'>
                <div className='container is-max-desktop'>
                    <div className='columns is-multiline is-justify-content-center'>
                        <div className='column is-6-desktop has-text-centered'>
                            <h2 className='title_section is-size-3 has-text-dark'>Custom Projects</h2>
                            <div className='is-flex is-justify-content-center'>
                                <hr className='hr_cat'/>
                            </div>

                            <p className='has-text-grey is-center'>100% tailor made projects from the concept to the
                                execuon.
                                From remodeling
                                to brand new construcon. At home or for your office.</p>
                        </div>

                        <div className='column is-12  is-justify-content-center'>


                            <BuildRepair_list/>


                        </div>


                    </div>
                </div>
            </section>


            <section className='section '>
                <div className='container is-max-desktop'>
                    <div className='columns is-multiline is-justify-content-center'>
                        <div className='column is-6-desktop has-text-centered'>
                            <h2 className='title_section is-size-3 has-text-dark'>Remodeling</h2>
                            <div className='is-flex is-justify-content-center'>
                                <hr className='hr_cat'/>
                            </div>

                            <p className='has-text-grey is-center'>Lorem ipsum dolor sit amet, consectetuer adipiscing
                                elit, sed diam nonummy nibh euismod ncidunt ut
                                laoreet dolore magna volutpat minim veniam, quis nostrud exerci taonut aliquip ex ea
                                commodo.</p>
                        </div>

                        <div className='column is-12  is-justify-content-center'>


                            <Remodeling_list/>


                        </div>


                    </div>
                </div>
            </section>

            <section className='has-bg-gris'>
                <div className='columns is-justify-content-flex-end'>


                    <div className='column is-6-desktop'>
                        <div className='column is-12'>
                            <div className='p-5 pl-0 container'>

                                <h2 className='title_section is-size-3 has-text-dark'>Our Experse</h2>
                                <hr className='hr_cat'/>
                                <p className='has-text-grey'>100% tailor made projects from the concept to the execuon.
                                    From remodeling
                                    to brand new construcon. At home or for your office.</p>


                                <div className='columns py-6 is-multiline'>
                                    <div className='column is-4 is-size-6'>
                                        <ul className="inside">
                                            <li className=''>Design and plan</li>
                                            <li>Licences</li>
                                            <li>Contrucon</li>
                                        </ul>
                                    </div>

                                    <div className='column is-4  is-size-6'>
                                        <ul className="inside">
                                            <li>Design and plan</li>
                                            <li>Licences</li>
                                            <li>Contrucon</li>
                                        </ul>
                                    </div>

                                    <div className='column is-4  is-size-6'>
                                        <ul className="inside">
                                            <li>Design and plan</li>
                                            <li>Licences</li>
                                            <li>Contrucon</li>
                                        </ul>
                                    </div>

                                    <div className='column is-6-desktop mt-3'>

                                        <Link href={'/'}>
                                            <a className="button is-primary is-fullwidth" type={'submit'}>START YOUR
                                                PROJECT
                                            </a>
                                        </Link>
                                    </div>

                                </div>

                            </div>


                        </div>


                    </div>

                    <div className='column is-4-desktop pr-0 '>
                        <div style={{
                            position: "relative",
                            width: "100%",
                            height: "100%",
                            maxHeight: "100%",
                            maxWidth: "100%",
                        }}>
                            <Image src='/img/expertise.png' layout={'fill'} alt='house'/>
                        </div>

                    </div>

                </div>
            </section>

            <section className='section '>
                <div className='container is-max-desktop'>
                    <div className='columns is-multiline is-justify-content-center'>
                        <div className='column is-6-desktop has-text-centered'>
                            <h2 className='title_section is-size-3 has-text-dark'>Our Blog</h2>
                            <div className='is-flex is-justify-content-center'>
                                <hr className='hr_cat'/>
                            </div>

                            <p className='has-text-grey is-center'>Lorem ipsum dolor sit amet, consectetuer adipiscing
                                elit, sed diam nonummy nibh euismod ncidunt ut
                                laoreet dolore magna volutpat minim veniam, quis nostrud exerci taonut aliquip ex ea
                                commodo.</p>
                        </div>

                        <div className='column is-12  is-justify-content-center'>


                            <Blog_list/>


                        </div>


                    </div>
                </div>
            </section>

            <section className='has-bg-gris'>
                <div className='columns is-justify-content-flex-start'>


                    <div className='column is-4-desktop has-bg-dark'>
                        <div className='columns is-justify-content-center section'>
                            <div className='column is-8-desktop'>
                                <div className='pl-0 container '>

                                    <h2 className='title_section is-size-3 has-text-white'>Our Company</h2>
                                    <hr className='hr_cat'/>
                                    <p className='has-text-grey'>Lorem ipsum dolor sit amet, consectetuer
                                        adipiscing elit, sed diam nonummy nibh
                                        euismod ncidunt ut laoreet dolore magna
                                        volutpat minim veniam, quis nostrud exerci
                                        taon ut aliquip ex ea commodo consequat.
                                        Duis autem vel eum iriure dolor in hendrerit in
                                        vulputate velit esse molese consequat, vel
                                        to brand new construcon. At home or for your office.</p>

                                    <button className="button is-primary  is-fullwidth mt-5" type={'submit'}>REQUEST A
                                        CALLBACK
                                    </button>


                                </div>


                            </div>
                        </div>


                    </div>

                    <div className='column is-8-desktop p-0 '>
                       <Company_card/>

                    </div>

                </div>
            </section>


        </Layout>
    )
}