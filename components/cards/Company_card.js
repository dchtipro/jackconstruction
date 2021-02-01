import Image from "next/dist/client/image";

const Company_card = () => {


    return (




        <div className='company_card'>


            <div className='company_card_header content_bg'>




            </div>
            <div className='company_card_footer'>

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

export default Company_card