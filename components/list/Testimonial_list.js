import BuildRepair_card from "../cards/BuilRepair_card";
import Link from "next/link";
import Testimonial_card from "../cards/Testimonial_card";
import React from "react";

const Testimonials_list = (props) => {

    const data = [
        {
            id: 1,
            name: 'Jhon Doe',
            starts: 5,
            src: '/img/blog1.png',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
            id: 2,
           name: 'Jhon Doe',
            date: 'Jan 25, 2021',
            src: '/img/blog2.png',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
            id: 3,
             name: 'Jhon Doe',
            starts: 5,
            src: '/img/blog3.png',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        }
    ];


    return (


        <div className='columns is-multiline is-justify-content-center'>

            {
                data.map(
                    (item) =>

                        <div className='column is-4-desktop is-flex is-justify-content-center'>

                            <Testimonial_card
                                img={item.src}
                                name={item.name}
                                text={item.text}
                                starts={item.starts}


                            />
                        </div>
                )
            }




        </div>


    )

};

export default Testimonials_list