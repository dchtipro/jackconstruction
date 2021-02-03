import Head from 'next/head';
import Navbar from "./navbar";
import Footer from "./footer";



export default function Layout({children}) {
    return (
        <div>
            <Head>
                 <meta name="viewport"
                      content="width=device-width, initial-scale=1"/>
                 <meta property="og:title"
                      content="Jack Construction"
                      key="Miami"/>

                <meta name="title"
                      content="Jack Construction"/>
                <meta name="description"
                      content="Jack Construction"/>


                <meta property="og:type"
                      content="website"/>
                <meta property="og:url"
                      content="https://metatags.io/"/>
                <meta property="og:title"
                      content="Jack Construction"/>
                <meta property="og:description"
                      content="Jack Construction"/>
                <meta property="og:image"
                      content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"/>


                <meta property="twitter:card"
                      content="summary_large_image"/>
                <meta property="twitter:url"
                      content="https://metatags.io/"/>
                <meta property="twitter:title"
                      content="Jack Construction"/>
                <meta property="twitter:description"
                      content="Jack Construction"/>
                <meta property="twitter:image"
                      content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"/>
                <title>Jack Construction - Building</title>




            </Head>

            <Navbar/>

            <main className='main '>
                {children}
            </main>

            <Footer/>
        </div>
    )
}