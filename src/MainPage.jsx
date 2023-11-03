import './css/MainPage.css'
import aboutImg from './assets/aboutPhoto1.png'
import workTagImg from './assets/aboutPhoto.jpg'

export function MainPage() {
    return (
        <>
            <div className='mainPage-container'>
                <SectionTitle></SectionTitle>
                <SectionAbout></SectionAbout>
                <SectionWork></SectionWork>
            </div>
        </>
    )
}

export function SectionTitle() {

    return (
        <>
            <section className='sectionTitle-container'>
                <div className='sectionTitle-container-items'>
                    <div className='sectionTitle-text'>
                        <h1 className=''>Desde la primera línea de código hasta el último pixel</h1>
                        <div className='sectionTitle-text-buttons'>
                            <a href="#">Proyectos</a>
                            <a href="#">Trayectoria</a>
                        </div>
                    </div>
                    
                </div>
            </section>
        </>
    )
}

export function SectionAbout() {
    return (
        <>
            <section className='sectionAbout-container'>
                <div className='sectionAbout-container-items'>
                    <div className='sectionAbout-container-items-img'>
                        <img src={aboutImg} alt="" />
                    </div>
                    <div className='sectionAbout-container-items-text'>
                        <ButtonTitle textPrint={"SOBRE MI"}></ButtonTitle>
                        <div className='sectionAbout-container-items-desc'>
                            <h2>Desarrollador</h2>
                        </div>
                        <div className='sectionAbout-container-items-p'>
                            <p>Ingeniero Informático con enfoque en desarrollo full stack. Poseo una sólida base académica y un fuerte deseo de crecer y contribuir en proyectos de tecnología. Busco un equipo donde pueda combinar mi pasión, conocimientos, y aprender de profesionales experimentados.</p>
                        </div>
                    </div>
                    
                </div>
            </section>
        </>
    )
}

export function ButtonTitle({textPrint}) {
    return (
        <div className='sectionAbout-container-items-title'>
            <h2>{textPrint}</h2>
        </div>
    )
}

export function SectionWork() {
    return (
        <>
            <section className='sectionWork-container'>
                <div className='sectionWork-container-items'>
                    <ButtonTitle textPrint={"Trabajo"}></ButtonTitle>
                    <h2>Mi trayectoria profesional y proyectos</h2>
                    <div className='sectionWork-container-items-work'>
                        <WorkTag></WorkTag>
                        <WorkTag></WorkTag>
                        <WorkTag></WorkTag>
                        <WorkTag></WorkTag>
                    </div>
                </div>
            </section>
        </>
    )
}

export function WorkTag() {
    return (
        <div className='workTag-container'>
            <div className='workTag-container-items'>
                <span>Octubre 2022 - Actualidad</span>
                <h3>Management Solutions</h3>
                {/*poner etiquetas*/}
            </div>
            <img src={workTagImg} alt="" />
        </div>
    )
}