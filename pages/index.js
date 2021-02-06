import Layout from "../components/base/layout";
import Image from "next/image";

import BuildRepair_list from "../components/list/BuildRepair_list";
import Remodeling_list from "../components/list/Remodeling_list";
import Link from "next/link";
import Blog_list from "../components/list/Blog_list";
import Company_card from "../components/cards/Company_card";
import Testimonials_list from "../components/list/Testimonial_list";
import {useState, useEffect} from 'react';
import {main_url} from '../lib/api'

export default function Home() {

    const [nameu, setName] = useState('andy')

    useEffect(() => {


            (document.querySelectorAll('.notification .delete') || []).forEach(($delete) => {
                const $notification = $delete.parentNode;

                $delete.addEventListener('click', (e) => {
                     e.preventDefault()

                    $notification.parentNode.removeChild($notification);
                       console.log($notification)
                });
            });
    });



    const sendEmail = async event => {
        const url = main_url+ "hello";
        event.preventDefault();



        event.target.querySelector('#btn_frm_contact').classList.toggle('is-loading');

        const res = await fetch(
            url,
            {
                body: JSON.stringify({
                    name: event.target.name.value,
                    address: event.target.address.value,
                    email: event.target.email.value,
                    desc: event.target.desc.value
                }),
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST'
            }
        )

        const result = await res.json()

        if (result) {


            const not = event.target.querySelector('.notification')
                if(not)
                {
                     not.classList.toggle('is-hidden');
            event.target.name.value = "";
            event.target.address.value = "";
            event.target.email.value = "";
            event.target.desc.value = "";

            event.target.querySelector('#btn_frm_contact').classList.toggle('is-loading');

                }

        }


    }

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
                    <form onSubmit={sendEmail}>
                        <div className='columns is-multiline'>
                            <div className='column is-12'>
                                <h2 className='title_section has-text-white is-size-3'>Get a Free Quote!</h2>
                                <hr className='hr_cat'/>
                                <p className='has-text-white'>As son you contact our expert team, this Will be the only
                                    form you have to fill in!</p>

                            </div>


                            <div className='column is-4-desktop'>
                                <div className="control">
                                    <input className="input" type="text" placeholder="Your Name" id={'name'} required/>
                                </div>
                            </div>

                            <div className='column is-4-desktop '>
                                <div className="control">
                                    <input className="input" type="text" placeholder="Your Address" id={'address'}/>
                                </div>
                            </div>

                            <div className='column is-4-desktop'>
                                <div className="control">
                                    <input className="input" type="email" placeholder="Your Email Address" required
                                           id={'email'}/>
                                </div>
                            </div>

                            <div className='column is-12'>
                                <div className="control">
                                    <textarea className="textarea" placeholder="How can we help you?" id={'desc'}/>
                                </div>
                            </div>

                            <div className='column is-12'>
                                <p className='has-text-white'>100% privacy Guaranteed</p>
                            </div>

                            <div className='column is-4-desktop'>
                                <button className="button is-primary  is-fullwidth" id={'btn_frm_contact'} >REQUEST A
                                    CALLBACK
                                </button>
                            </div>

                            <div className='column is-12'>
                                <div className="notification is-success is-light is-hidden">
                                    <button className="delete"></button>
                                    Se ha enviado el correo correctamente. Gracias por contactarnos.
                                </div>
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
                        <div className='column is-8-desktop has-text-centered'>
                            <h2 className='title_section is-size-3 has-text-dark'>Build & Repair</h2>
                            <div className='is-flex is-justify-content-center'>
                                <hr className='hr_cat'/>
                            </div>

                            <p className='has-text-grey is-center'>Lorem ipsum dolor sit amet, consectetuer adipiscing
                                elit, sed diam nonummy nibh euismod ncidunt ut
                                laoreet dolore magna volutpat minim veniam, quis nostrud exerci taonut aliquip ex ea
                                commodo</p>
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
                        <div className='column is-8-desktop has-text-centered'>
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

                                <h2 className='title_section is-size-3 has-text-dark'>Our Expertise</h2>
                                <hr className='hr_cat'/>
                                <p className='has-text-grey'>100% tailor made projects from the concept to the execuon.
                                    From remodeling
                                    to brand new construcon. At home or for your office.</p>


                                <div className='columns py-6 is-multiline'>
                                    <div className='column is-4 is-size-6'>
                                        <ul className="inside">
                                            <li className=''>Lorem ipsum</li>
                                            <li>Lorem ipsum</li>
                                            <li>Lorem ipsum</li>
                                        </ul>
                                    </div>

                                    <div className='column is-4  is-size-6'>
                                        <ul className="inside">
                                            <li>Lorem ipsum</li>
                                            <li>Lorem ipsum</li>
                                            <li>Lorem ipsum</li>
                                        </ul>
                                    </div>

                                    <div className='column is-4  is-size-6'>
                                        <ul className="inside">
                                            <li>Lorem ipsum</li>
                                            <li>Lorem ipsum</li>
                                            <li>Lorem ipsum</li>
                                        </ul>
                                    </div>

                                    <div className='column is-6-desktop mt-3'>

                                        <Link href={'/'}>
                                            <a className="button is-primary is-fullwidth" type={'submit'}>LOREM IPSUM
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
                                    <p className='has-text-white'>Lorem ipsum dolor sit amet, consectetuer
                                        adipiscing elit, sed diam nonummy nibh
                                        euismod ncidunt ut laoreet dolore magna
                                        volutpat minim veniam, quis nostrud exerci
                                        taon ut aliquip ex ea commodo consequat.
                                        Duis autem vel eum iriure dolor in hendrerit in
                                        vulputate velit esse molese consequat, vel
                                        to brand new construcon. At home or for your office.</p>

                                    <button className="button is-primary  is-fullwidth mt-5" type={'submit'}>LEARN MORE
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

            <section className='section '>
                <div className='container is-max-desktop'>
                    <div className='columns is-multiline is-justify-content-center'>
                        <div className='column is-6-desktop has-text-centered'>
                            <h2 className='title_section is-size-3 has-text-dark'>Client Tesmonials</h2>
                            <div className='is-flex is-justify-content-center'>
                                <hr className='hr_cat'/>
                            </div>


                        </div>

                        <div className='column is-12  is-justify-content-center'>


                            <Testimonials_list/>


                        </div>


                    </div>
                </div>
            </section>

            <section className='section has-bg-gris'>
                <div className='container is-max-desktop'>
                    <form>
                        <div className='columns is-multiline'>
                            <div className='column is-12'>
                                <h2 className='title_section has-text-dark is-size-3'>Contact Us</h2>
                                <hr className='hr_cat'/>


                            </div>


                            <div className='column is-6-desktop'>
                                <div className="control">
                                    <input className="input" type="text" placeholder="Your Name" required/>
                                </div>
                            </div>


                            <div className='column is-6-desktop'>
                                <div className="control">
                                    <input className="input" type="email" placeholder="Your Email Address"/>
                                </div>
                            </div>

                            <div className='column is-12'>
                                <div className="control">
                                    <textarea className="textarea" placeholder="How can we help you?" required/>
                                </div>
                            </div>


                            <div className='column is-4-desktop'>
                                <button className="button is-primary  is-fullwidth" type={'submit'}>SEND MESSAGE
                                </button>
                            </div>

                        </div>
                    </form>
                </div>
            </section>


        </Layout>
    )
}
