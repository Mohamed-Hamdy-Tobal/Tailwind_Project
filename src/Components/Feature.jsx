/* eslint-disable react/prop-types */

const Feature = ({icon, title, desc}) => {
    return (
        <div className="feature text-white ele-center-col text-center">
            <div className="image"><img src={icon} alt="icon" /></div>
            <div className="info mt-6">
                <h1 className="title text-xl font-bold mb-[10px]">{title}</h1>
                <p className="desc font-normal text-sm">{desc}</p>
            </div>
        </div>
    )
}

export default Feature
