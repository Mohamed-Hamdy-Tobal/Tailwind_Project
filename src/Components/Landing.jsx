import { Link } from 'react-router-dom'
import intro from '../assets/imgs/illustration-intro.png'
import curve from '../assets/imgs/bg-curvy-desktop.svg'

const Landing = () => {
    return (
        <section className="Landing bg-[#1c2230]">
            <div className="container">
                <div className="ele-center-col  pt-[200px]">
                    <div className="image text-center w-[750px] max-w-full">
                        <img src={intro} alt="intro" className='w-full h-fit'/>
                    </div>
                    <div className="land-info text-center text-white mb-8">
                        <h1 className='font-extrabold text-[30px] md:text-[40px] mb-[15px]'>All your files in one secure location,<br/> accessible anywhere. </h1>
                        <p className='md:w-[600px] px-[15px] mx-auto max-w-full opacity-[0.9]'>Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.</p>
                    </div>
                    <Link to='/' className="main-btn text-white ele-center w-[280px] h-[60px] rounded-[30px] font-medium">Get Started</Link>
                </div>
            </div>
            <div className="curve w-full h-[200px]"><img src={curve} alt="curve" className='w-full h-full'/></div>
        </section>
    )
}

export default Landing
