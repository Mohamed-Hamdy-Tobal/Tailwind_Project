import { Link } from "react-router-dom"
import logo from '../assets/imgs/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker , faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter  } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className='bg-[#0c1524] pt-[300px] md:pt-[150px] pb-[50px] text-white'>
            <div className="container">
                <Link to='/'><img src={logo} alt='logo' className="w-[175px] h-[66px] object-contain "/></Link>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-[30px] pt-8">
                    <div className="location md:col-span-2 flex items-start justify-between gap-8">
                        <FontAwesomeIcon icon={faMapMarker} className="text-[20px]"/>
                        <p className='text-[13px] opacity-80'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua </p>
                    </div>
                    <div className="communicate text-[14px]">
                        <div className="phone flex justify-start items-center lg:ele-center gap-[10px] mb-3"><FontAwesomeIcon icon={faPhone} /> <span  className='opacity-80'>+1-543-123-4567</span></div>
                        <div className="mail flex justify-start items-center lg:ele-center gap-[10px]"><FontAwesomeIcon icon={faEnvelope} /> <span  className='opacity-80'>example@fylo.com</span></div>
                    </div>
                    <div className="links ele-center-col justify-start items-start md:flex-row gap-[10px] text-[14px]">
                        <ul className='w-full flex flex-col justify-start gap-2'>
                            <li className="links-item"><Link to='/' className="opacity-80 transition-all duration-300 hover:opacity-[1] hover:font-medium">About Us</Link></li>
                            <li className="links-item"><Link to='/' className="opacity-80 transition-all duration-300 hover:opacity-[1] hover:font-medium">Jobs</Link></li>
                            <li className="links-item"><Link to='/' className="opacity-80 transition-all duration-300 hover:opacity-[1] hover:font-medium">Press</Link></li>
                            <li className="links-item"><Link to='/' className="opacity-80 transition-all duration-300 hover:opacity-[1] hover:font-medium">Blogs</Link></li>
                        </ul>
                        <ul className='w-full flex flex-col justify-start gap-2'>
                            <li className="links-item"><Link to='/' className="opacity-80 transition-all duration-300 hover:opacity-[1] hover:font-medium">Contact Us</Link></li>
                            <li className="links-item"><Link to='/' className="opacity-80 transition-all duration-300 hover:opacity-[1] hover:font-medium">Team</Link></li>
                            <li className="links-item"><Link to='/' className="opacity-80 transition-all duration-300 hover:opacity-[1] hover:font-medium">Privacy</Link></li>
                        </ul>
                    </div>
                    <div className="social">
                        <ul className='flex gap-[20px] '>
                            <li className="social-item w-[35px] h-[35px] rounded-full text-center leading-[35px] border-2 border-solid border-white transition-colors hover:border-[#81d6e1] hover:text-[#81d6e1]"><Link to='/'><FontAwesomeIcon icon={faFacebook} /></Link></li>
                            <li className="social-item w-[35px] h-[35px] rounded-full text-center leading-[35px] border-2 border-solid border-white transition-colors hover:border-[#81d6e1] hover:text-[#81d6e1]"><Link to='/'><FontAwesomeIcon icon={faInstagram} /></Link></li>
                            <li className="social-item w-[35px] h-[35px] rounded-full text-center leading-[35px] border-2 border-solid border-white transition-colors hover:border-[#81d6e1] hover:text-[#81d6e1]"><Link to='/'><FontAwesomeIcon icon={faTwitter} /></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer