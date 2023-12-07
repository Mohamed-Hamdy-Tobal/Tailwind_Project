import { Link } from 'react-router-dom'
import productive from '../assets/imgs/illustration-stay-productive.png'
import arrow from '../assets/imgs/icon-arrow.svg'

const StayProductive = () => {
    return (
        <div className="stayProductive pb-[150px]">
            <div className="container">
                <div className="holder text-white grid grid-cols-1 md:grid-cols-2 gap-[30px] place-items-center">
                    <div className="image">
                        <img src={productive} alt="productive" />
                    </div>
                    <div className="info">
                        <h3 className='text-4xl font-bold mb-4'>Stay productive,<br/> wherever you are</h3>
                        <div className="para-info mb-4 tracking-[0.8px]">
                            <p className='mb-[15px]'>Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>
                            <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
                        </div>
                        <Link to='/' className='flex gap-3 items-center text-primaryColor hover:text-[#42b0d1] transition-color duration-300 border-b-2 border-primaryColor pb-[2px] w-fit'>See how Fylo works <img src={arrow} alt="arrow" className='w-[20px] h-[20px] object-contain animate-moveRight'/></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StayProductive