import Image from "next/dist/client/image";

const Footerdata_card = () => {


    return (




        <div className='footerdata_card'>


            <div className='footerdata_card_header '>

                <div className='footerdata_card_header_social'>

                      <img src='/facebook.svg' alt={' icon facebook'} />

              <img src='/twitter.svg' alt={' icon facebook'} />

               <img src='/linkedin.svg' alt={' icon facebook'} />
                </div>






            </div>
            <div className='footerdata_card_body'>

                 <div className='columns is-mobile'>
                     <div className='column company_card_footer_years is-half'>

                    <div className='company_card_footer_years_number'>
                        16
                    </div>

                      <div className='company_card_footer_years_text'>
                          Years <br/> Established
                    </div>
                </div>

                 <div className='column company_card_footer_projects is-half'>


                    <div className='company_card_footer_projects_number '>
                        100
                    </div>

                      <div className='company_card_footer_projects_text '>
                          Completed <br/> Projects
                    </div>
                </div>

                     </div>


            </div>
        </div>


    )
}

export default Footerdata_card