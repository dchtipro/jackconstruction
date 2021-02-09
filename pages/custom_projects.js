import Layout from "../components/base/layout";
import Project_card from "../components/cards/project_card";
import {useEffect} from "react";


const about = () => {


    useEffect(() => {


        let tabs = document.querySelectorAll('.tabs li');
        let tabsContent = document.querySelectorAll('.tab-content');

        let deactvateAllTabs = function () {
            tabs.forEach(function (tab) {
                tab.classList.remove('is-active');
            });
        };

        let hideTabsContent = function () {
            tabsContent.forEach(function (tabContent) {
                tabContent.classList.remove('is-active');
            });
        };

        let activateTabsContent = function (tab) {
            tabsContent[getIndex(tab)].classList.add('is-active');
        };

        let getIndex = function (el) {
            return [...el.parentElement.children].indexOf(el);
        };

        tabs.forEach(function (tab) {
            tab.addEventListener('click', function () {
                deactvateAllTabs();
                hideTabsContent();
                tab.classList.add('is-active');
                activateTabsContent(tab);
            });
        })

        tabs[0].click();

    });


    return (
        <Layout>

            <section className='section has-bg-dark'>
                <div className='container is-max-desktop'>

                    <div className='columns is-multiline'>
                        <div className='column is-12'>
                            <h2 className='title_section has-text-white is-size-3'>We Build The Entire Building From 0!</h2>
                            <hr className='hr_cat'/>
                            <p className='has-text-white'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. </p>

                        </div>
                    </div>
                </div>
            </section>

            <section className='section '>
                <div className='container is-max-desktop'>
                    <div className='columns is-multiline is-justify-content-center'>
                        <div className='column is-8-desktop has-text-centered'>
                            <h2 className='title_section is-size-3 has-text-dark'>Custom Projects</h2>
                            <div className='is-flex is-justify-content-center'>
                                <hr className='hr_cat'/>
                            </div>

                            <p className='has-text-grey is-center'>100% tailor made projects from the concept to the execution. From remodeling to brand new construction. At home or for yor office</p>
                        </div>


                    </div>

                </div>
                <div className='container'>
                    <div className='columns is-multiline is-justify-content-center'>

                        <div className='column is-12  is-justify-content-center mt-6'>


                            <div className="tabs  is-fullwidth">
                                <ul className="inside">
                                    <li><a>All Projects</a></li>
                                    <li><a>Design and plan</a></li>
                                    <li><a>Licences</a></li>
                                    <li><a>Construcción</a></li>
                                    <li><a>Project management</a></li>
                                    <li><a>Maintenance</a></li>
                                </ul>
                            </div>

                            <div>
                                <section className="tab-content">

                                    <div className='project_card_list '>

                                        <Project_card img={"/img/blog1.png"}
                                                      name={'Lorem ipsum'}/>

                                        <Project_card img={"/img/blog1.png"}
                                                      name={'Lorem ipsum'}/>

                                        <Project_card img={"/img/blog1.png"}
                                                      name={'Lorem ipsum'}/>
                                        <Project_card img={"/img/blog1.png"}
                                                      name={'Lorem ipsum'}/>
                                        <Project_card img={"/img/blog1.png"}
                                                      name={'Lorem ipsum'}/>
                                        <Project_card img={"/img/blog1.png"}
                                                      name={'Lorem ipsum'}/>
                                        <Project_card img={"/img/blog1.png"}
                                                      name={'Lorem ipsum'}/>
                                        <Project_card img={"/img/blog1.png"}
                                                      name={'Lorem ipsum'}/>
                                        <Project_card img={"/img/blog1.png"}
                                                      name={'Lorem ipsum'}/>


                                    </div>

                                </section>
                                <section className="tab-content">Music content</section>
                                <section className="tab-content">Videos content</section>
                                <section className="tab-content">Documents content</section>
                            </div>


                        </div>
                    </div>
                </div>
            </section>


        </Layout>
    );
}

export default about;