

import BuildRepair_card from "../cards/BuilRepair_card";
import Link from "next/link";

const LatestProject_list = (props) => {

    const data = [
        {
            id: 1,
            title: 'At Home',
            src:'/img/home1.png',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
            id: 2,
            title: 'Office',
            src:'/img/office1.png',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
            id: 3,
            title: 'Outdoor Works',
            src:'/img/outdoor1.png',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        }
    ];


    return (


            <div className='columns is-multiline is-justify-content-center'>

                {
                    data.map(
                        (item) =>

                            <div className='column is-4-desktop is-flex is-justify-content-center'>

                                <BuildRepair_card
                                    img={item.src}
                                    title={item.title}
                                    text={item.text}


                                />
                            </div>
                    )
                }



            </div>



    )

};

export default LatestProject_list