import { Fragment } from "react"
import Landing from "../Components/Landing"
import Features from "../Components/Features"
import StayProductive from "../Components/StayProductive"
import Testimonials from "../Components/Testimonials"

export const Home = () => {

    return (
        <Fragment>
            <Landing/>
            <Features/>
            <StayProductive/>
            <Testimonials/>
        </Fragment>
    )
}

// 27:48