/* eslint-disable react/prop-types */

const Testi = ({text, img, title, job}) => {
    return (
        <div className="box bg-[#273957] p-[25px] rounded-lg shadow-[8px_8px_1px_8px_#1c202c]">
            <p className='mb-4 text-[14px] tracking-[0.8]'>{text}</p>
            <div className="profile ele-center gap-3 justify-start">
                <img src={img} alt="img" className="w-[35px] h-[35px] rounded-full object-contain"/>
                <div className="profile-info flex flex-col">
                    <h3 className='font-medium text-[12px]'>{title}</h3>
                    <span className='opacity-[0.9] text-[10px]'>{job}</span>
                </div>
            </div>
        </div>
    )
}

export default Testi