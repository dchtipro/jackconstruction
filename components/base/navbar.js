import Link from "next/link";
import ActiveLink from './ActiveLink'

const Navbar = () => {
    return (
        <nav className="navbar container"
             role="navigation"
             aria-label="main navigation">
            <div className="navbar-brand">

                <Link href="/">
                    <a className="navbar-item">
                        <img src="/img/logo.svg"
                             width="150"
                             height="64"
                             alt={'logo'}/>
                    </a>
                </Link>


                <a role="button"
                   className="navbar-burger"
                   aria-label="menu"
                   aria-expanded="false"
                   data-target="navbarBasicExample">
                    <span aria-hidden="true"/>
                    <span aria-hidden="true"/>
                    <span aria-hidden="true"/>
                </a>
            </div>

            <div id="navbarBasicExample"
                 className="navbar-menu">
                <div className="navbar-end">


                    <ActiveLink href="/"
                                activeClassName="is-active">
                        <a className="navbar-item is-uppercase ">
                            Home
                        </a>
                    </ActiveLink>
                    <ActiveLink href="/custom_projects"  activeClassName="is-active">
                        <a className="navbar-item is-uppercase">
                            CUSTOM PROJECTS </a>
                    </ActiveLink>

                    <Link href="/" activeClassName="is-active">
                        <a className="navbar-item is-uppercase">
                            BUILD & REPAIR </a>
                    </Link>


                    <Link href="/" activeClassName="is-active">
                        <a className="navbar-item is-uppercase">
                            REMODELING </a>
                    </Link>

                    <Link href="/" activeClassName="is-active">
                        <a className="navbar-item is-uppercase">
                            OUR EXPERTISE </a>
                    </Link>

                    <Link href="/" activeClassName="is-active">
                        <a className="navbar-item is-uppercase">
                            COMPANY </a>
                    </Link>

                    <Link href="/" activeClassName="is-active">
                        <a className="navbar-item is-uppercase">
                            BLOG </a>
                    </Link>

                    <Link href="/" activeClassName="is-active">
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
        </nav>
    )
};

export default Navbar;