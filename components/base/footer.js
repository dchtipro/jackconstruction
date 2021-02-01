import Link from "next/link";
import Image from 'next/image';
import Footerdata_card from "../cards/FooterData_card";

const Footer = () => {
    return (

        <footer className="py-3">
            <div className="columns is-multiline">
                <div className='column is-12 section'>
                    <div className="navbar is-justify-content-space-around container">
                        <Link href="/">
                            <a className="navbar-item is-uppercase is-active has-text-weight-medium">
                                Home
                            </a>
                        </Link>


                        <Link href="/">
                            <a className="navbar-item is-uppercase">
                                BUILD & REPAIR </a>
                        </Link>

                        <Link href="/">
                            <a className="navbar-item is-uppercase">
                                CUSTOM PROJECTS </a>
                        </Link>


                        <Link href="/">
                            <a className="navbar-item is-uppercase">
                                REMODELING </a>
                        </Link>

                        <Link href="/">
                            <a className="navbar-item is-uppercase">
                                OUR EXPERTISE </a>
                        </Link>

                        <Link href="/">
                            <a className="navbar-item is-uppercase">
                                COMPANY </a>
                        </Link>

                        <Link href="/">
                            <a className="navbar-item is-uppercase">
                                BLOG </a>
                        </Link>

                        <Link href="/">
                            <a className="navbar-item is-uppercase">
                                CONTACT US </a>
                        </Link>

                        <div className="navbar-item has-dropdown is-hoverable is-hidden">
                            <a className="navbar-link">
                                More
                            </a>

                            <div className="navbar-dropdown">
                                <a className="navbar-item">
                                    About
                                </a>
                                <a className="navbar-item">
                                    Jobs
                                </a>
                                <a className="navbar-item">
                                    Contact
                                </a>
                                <hr className="navbar-divider"/>
                                <a className="navbar-item">
                                    Report an issue
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='column is-6-desktop has-bg-dark section'>
                    <div className='px-6 '>
                        <Link href="/">
                            <a className="">
                                <img src="/img/logo_black.png" width="200" height="80" alt={'logo'}/>
                            </a>
                        </Link>

                        <hr className='has-bg-orange pt-0' style={{width:'100px'}}/>

                        <div className='is-flex is-flex-direction-column '>
                               <Link href="/">
                            <a className="is-uppercase has-text-white pt-2">
                               CONDICIONES GENERALES DE VENTA
                            </a>
                        </Link>

                         <Link href="/">
                            <a className="is-uppercase has-text-white pt-2">
                                AVISO LEGAL
                            </a>
                        </Link>

                         <Link href="/">
                            <a className="is-uppercase has-text-white pt-2">
                                POLÍTICA DE COOKIES
                            </a>
                        </Link>

                         <Link href="/">
                            <a className="is-uppercase has-text-white pt-2">
                                ES · EN
                            </a>
                        </Link>
                        </div>





                    </div>
                </div>

                <div className='column is-6-desktop pt-0 pl-0'>
                    <Footerdata_card/>
                </div>


            </div>

        </footer>

    )
}

export default Footer;