import Link from "next/link";
import Image from 'next/image';

const Footer = () => {
    return (

        <footer className="py-3">
            <div className="columns is-multiline">
                <div className='column is-12 section'>
                      <div className="navbar">
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
                <div className='column is-6-desktop has-bg-dark'>
                </div>

                  <div className='column is-6-desktop'>
                </div>


            </div>
            <div className="p-2 has-bg-blue-footer">
                <div className=" has-text-centered">
                    <span className="font-10">© {new Date().getFullYear()} Jack Construction. Todos los derechos reservados.</span>
                </div>
            </div>
        </footer>

    )
}

export default Footer;