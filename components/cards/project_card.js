import Link from "next/link";
import Image from "next/image";

const Project_card = (props) => {

    return (

        <div className='project_card'>
            <Image src={props.img}
                   layout='fill'
                   alt={props.name}
                   className='project_card_img'

            />
             <p className='image__link'>{props.name}</p>
            <div className='project_card_overlay'>


                  <a href='#' className='image__title'>Learn More »</a>

            </div>


        </div>

    )

}

export default Project_card