import Image from "next/dist/client/image";

const Company_card = () => {


    return (


        <div className='company_card'>
            <div className='company_card_body'>

                            <Image src='/img/company.png' layout={'responsive'} alt='house' width={1200} height={600} objectFit='cover'/>


            </div>
            <div className='company_card_footer'>
                <div className='company_card_footer_years'>

                    <div className='company_card_footer_years_number'>
                        16
                    </div>

                      <div className='company_card_footer_years_text'>
                          Years <br/> Established
                    </div>
                </div>

            </div>
        </div>


    )
}

export default Company_card