import person1 from '../assets/imgs/profile-1.jpg'
import person2 from '../assets/imgs/profile-2.jpg'
import person3 from '../assets/imgs/profile-3.jpg'
import quotes from '../assets/imgs/bg-quotes.png'
import Testi from './Testi'

const Testimonials = () => {

    const data = [
        {
            text: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
            img: person1,
            title: 'Satish Patel',
            job: 'Founder & CEO, Huddle'
        },
        {
            text: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
            img: person2,
            title: 'Bruce McKenzie',
            job: 'Founder & CEO, Huddle'
        },
        {
            text: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
            img: person3,
            title: 'Iva Boyd',
            job: 'Founder & CEO, Huddle'
        },
    ]

    return (
        <div className="testimonials pb-[300px]">
            <div className="container relative">
                <div className="main-box text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-[30px]">
                    {data.map((item, idx) => <Testi key={idx} text={item.text} img={item.img} title={item.title} job={item.job}/>)}
                </div>
                <img src={quotes} alt="quotes" className='absolute top-[-35px] left-[10px] md:left-0 -z-10'/>
            </div>
        </div>
    )
}

export default Testimonials