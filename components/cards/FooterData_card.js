import Image from "next/dist/client/image";
import Link from "next/link";

const Footerdata_card = () => {


    return (


        <div className='footerdata_card'>


            <div className='footerdata_card_header '>

                <div className='footerdata_card_header_social'>
                    <Link href={'/'}>
                        <a className=''>
                            <i className='icofont icofont-facebook has-text-white icofont-md mr-5 '/>
                        </a>
                    </Link>

                    <Link href={'/'}>
                        <a>
                            <i className='icofont icofont-twitter has-text-white icofont-md mr-5'/>
                        </a>
                    </Link>

                    <Link href={'/'}>
                        <a>
                            <i className='icofont icofont-linkedin has-text-white icofont-md '/>
                        </a>
                    </Link>


                </div>


            </div>
            <div className='footerdata_card_body'>


                <ul>
                    <li className='is-flex is-align-items-center mb-5'>
                        <i className='icofont-location-pin has-text-primary icofont-md mr-5'/>
                        <p className='has-text-grey'>Lorem ipsum dolor sit amet,
                        </p>
                    </li>

                    <li className='is-flex is-align-items-center mb-5'>
                        <i className='icofont-ui-call has-text-primary icofont-md mr-5'/>
                         <a href='tel: 12312345678' className='has-text-grey has-text-link-dark'>
                                123) 12 345 678
                            </a>

                    </li>

                    <li className='is-flex is-align-items-center mb-5'>
                        <i className='icofont-email has-text-primary icofont-md mr-5'/>


                            <a href='mailto: jackconstrucion@loremipsum.com' className='has-text-grey has-text-link-dark'>
                                jackconstrucion@loremipsum.com
                            </a>



                    </li>
                </ul>

            </div>
        </div>


    )
}

export default Footerdata_card