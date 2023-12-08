const GetStarted = () => {
    return (
        <section className="started" id="get-started">
            <div className="container">
                <div className="holder relative">
                    <div className="bg-[#1c2230] absolute left-[50%] translate-x-[-50%] top-[-150px] rounded-lg ele-center-col w-[865px] max-w-full min-h-[257px] text-white text-center p-[30px]">
                        <h3 className='text-[25px] md:text-[35px] font-semibold mb-[15px]'>Get early access today.</h3>
                        <p className='w-[620px] max-w-full mx-auto mb-7'>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
                        <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-8 w-full flex-wrap justify-between md:px-[60px]">
                            <input type="email" name="email" placeholder="email@example.com" className="w-full md:flex-1 h-[50px] rounded-[30px] px-[30px] text-black"/>
                            <button className="main-btn ele-center w-full md:w-[200px] h-[45px] rounded-[30px] font-medium">Get Started For Free</button>
                        </form>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default GetStarted