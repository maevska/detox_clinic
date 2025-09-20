import { useRef } from "react";
import NavBar from './components/NavBar'
import Header from './components/Header'
import ServicesGrid from "./components/ServicesGrid"
import Steps from "./components/Steps"
import InformClinic from "./components/InformClinic"
import Staff from './components/Staff'
import Advantages from './components/Advantages'
import QnAList from './components/QnAList'
import Rewiews from './components/Reviews'
import Footer from './components/Footer'

const App = () => {
    const servicesRef = useRef(null);
    const stepsRef = useRef(null);
    const clinicRef = useRef(null);
    const reviewsRef = useRef(null);
    const contactsRef = useRef(null);

    const scrollTo = (ref) => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <div className='paragDiv'>
                <p className='paragHead'>
                    Имеются противопоказания, необходимо проконсультироваться со специалистом 18+
                </p>
            </div>

            <NavBar
                onServicesClick={() => scrollTo(servicesRef)}
                onStepsClick={() => scrollTo(stepsRef)}
                onClinicClick={() => scrollTo(clinicRef)}
                onReviewsClick={() => scrollTo(reviewsRef)}
                onContactsClick={() => scrollTo(contactsRef)}
            />

            <Header />
            <section ref={servicesRef}>
                <h2 className="card-container-h2">Наши услуги</h2>
                <ServicesGrid />
            </section>

            <section ref={stepsRef}>
                <Steps />
            </section>

            <section ref={clinicRef}>
                <InformClinic />
            </section>
            <Staff />
            <Advantages />
            <QnAList />
            <section ref={reviewsRef}>
                <Rewiews />
            </section>

            <section ref={contactsRef}>
                <Footer />
            </section>
        </>
    )
}

export default App;
