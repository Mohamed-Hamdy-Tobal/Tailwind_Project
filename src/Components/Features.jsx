import icon1 from '../assets/imgs/icon-access-anywhere.svg'
import icon2 from '../assets/imgs/icon-any-file.svg'
import icon3 from '../assets/imgs/icon-collaboration.svg'
import icon4 from '../assets/imgs/icon-security.svg'
import Feature from './Feature'

const Features = () => {

    const items = [
        {
            icon: icon1,
            title: 'Access your files, anywhere',
            desc: 'The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.'
        },
        {
            icon: icon2,
            title: 'Security you can trust',
            desc: '2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.'
        },
        {
            icon: icon3,
            title: 'Real-time collaboration',
            desc: 'Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.'
        },
        {
            icon: icon4,
            title: 'Store any type of file ',
            desc: "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared."
        },
    ]

    return (
        <section className="features">
            <div className="container">
                <div className="main-box grid grid-cols-1 md:grid-cols-2 w-[865px] max-w-full mx-auto gap-24">
                    {items.map((item, idx) => <Feature key={idx} icon={item.icon} title={item.title} desc={item.desc}/>)}
                </div>
            </div>
        </section>
    )
}

export default Features