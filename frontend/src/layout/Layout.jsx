import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';

// eslint-disable-next-line react/prop-types
export default function Layout({children}) {
    
    return(
        <>
            <div className='bg-main text-white'>
                <Navbar />
                {children}
                <Footer />
            </div>
        </>
    )
}