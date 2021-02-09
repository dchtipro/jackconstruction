import Layout from "../components/base/layout";
import Project_card from "../components/cards/project_card";



const about = () => {
    return (
        <Layout>
            <div className='container'>
            <h2>Esta es la pagina de About</h2>

                           </div>

            <Project_card img={"/img/blog1.png"} name={'Lorem ipsum'}/>





        </Layout>
    );
}

export default about;