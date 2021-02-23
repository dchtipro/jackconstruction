import Link from "next/link";
import Image from 'next/image';
import Footerdata_card from "../cards/FooterData_card";

const Footer = () => {
    return (

        <footer className="py-3">
            <div className="columns is-multiline">

                <div className='column is-6-desktop has-bg-dark section'>
                    <div className='px-6 '>
                        <Link href="/">
                            <a className="">
                                <img src="/img/logo_white.svg" width="200" height="80" alt={'logo'}/>
                            </a>
                        </Link>

                        <hr className='has-bg-orange pt-0' style={{width:'100px'}}/>

                        <div className='is-flex is-flex-direction-column '>
                               <Link href="/">
                            <a className="is-uppercase  pt-2 has-text-link-light">
                               CONDICIONES GENERALES DE VENTA
                            </a>
                        </Link>

                         <Link href="/">
                            <a className="is-uppercase has-text-link-light pt-2 " >
                                AVISO LEGAL
                            </a>
                        </Link>

                         <Link href="/">
                            <a className="is-uppercase has-text-link-light pt-2">
                                POLÍTICA DE COOKIES
                            </a>
                        </Link>

                         <Link href="/">
                            <a className="is-uppercase has-text-link-light pt-2">
                                ES · EN
                            </a>
                        </Link>
                        </div>





                    </div>
                </div>

                <div className='column is-6-desktop pt-0 pl-0  pr-0'>
                    <Footerdata_card/>
                </div>


            </div>

        </footer>

    )
}

export default Footer;