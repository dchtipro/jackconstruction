
import Image from 'next/image'
import Link from 'next/link'


const BuildRepair_card = (props) => {

    const  data = () => {

        if (props.date.length > 0)
        {
            alert('Entro')
            return   <p className="buildRepair_card_body_date"> {props.date}</p>
        }


    }


    return (


        <Link href="/" >
            <a className="text-decoration-none ">
                <div className="buildRepair_card  mb-3">
                    <div className='buildRepair_card_header position-relative' >
                        <Image
                            src={props.img}
                            alt="Picture of the author"
                           height={500}
                            width={500}

                            className="buildRepair_card_header_img"

                        />


                    </div>


                    <div className="buildRepair_card_body ">

                        <p className="buildRepair_card_body_title">
                            {props.title}
                        </p>
                       <p className="buildRepair_card_body_date"> {props.date}</p>
                        <p className="buildRepair_card_body_text"> {props.text}</p>



                    </div>



                </div>
            </a>


        </Link>


    );
}

export default BuildRepair_card;
