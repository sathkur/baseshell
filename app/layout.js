import Head from 'next/head'
import Header from '../components/layouts/header'
import Footer from '../components/layouts/footer'
import {ThemeProvider} from './theme-provider';
import '../styles/globals.css'


const MainLayout = ({ children }) => {

    return (
        <html>
            <head>
              <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </head>
            <body className='font-Varela_Round'>
              <ThemeProvider>
                <div className="bg-gray-300">
                  <Header/>
                  <main id="main" className="container m-auto px-6 min-h-screen ">
                      {/* <div><h5>Main Layout</h5></div> */}
                      {children}
                  </main>
                  <Footer/>
                </div>
              </ThemeProvider>
            </body>
        </html>
    );
}



export default MainLayout;

