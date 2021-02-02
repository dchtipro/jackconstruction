import Image from 'next/image'
import Link from 'next/link'


const Testimonial_card = (props) => {


    return (


        <Link href="/">
            <a className="text-decoration-none ">
                <div className="testimonial_card  mb-3">
                    <div className='testimonial_card_header position-relative'>
                        <Image
                            src={props.img}
                            alt="Picture of the author"
                            height={70}
                            width={70}

                            className="testimonial_card_header_img"

                        />


                    </div>


                    <div className="testimonial_card_body ">

                        <p className="testimonial_card_body_name">
                            {props.name}
                        </p>

                        <p className="testimonial_card_body_text"> {props.text}</p>

                        <div className='testimonial_card_body_starts'>
                            <i className='icofont-star has-text-primary mr-2 icofont-md'/>
                            <i className='icofont-star has-text-primary mr-2 icofont-md'/>
                            <i className='icofont-star has-text-primary mr-2 icofont-md'/>
                            <i className='icofont-star has-text-primary mr-2 icofont-md'/>
                            <i className='icofont-star has-text-primary mr-2 icofont-md'/>


                        </div>


                    </div>


                </div>
            </a>


        </Link>


    );
}

export default Testimonial_card;
