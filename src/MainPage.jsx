import './css/MainPage.css'
import aboutImg from './assets/aboutPhoto1.png'
import MSImg from './assets/MS.jpg'
import PixelwareImg from './assets/Pixelware.jpg'
import PortfolioWebImg from './assets/PortfolioWeb.jpg'
import TFGImg from './assets/TFG.jpg'

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
                        <WorkTag date={'Octubre 2022 - Actualidad'} job={'Consultor de Tecnologia'} img={MSImg}></WorkTag>
                        <WorkTag date={'Octubre 2021 - Febrero 2022'} job={'Resolucion de Incidencias'} img={PixelwareImg}></WorkTag>
                        <WorkTag date={'Noviembre 2023 - Actualidad'} job={'Mi Portfolio con React'} img={PortfolioWebImg}></WorkTag>
                        <WorkTag date={'Marzo 2022 - Diciembre 2022'} job={'Herramienta de Inversion con IA'} img={TFGImg}></WorkTag>
                    </div>
                </div>
            </section>
        </>
    )
}

export function WorkTag({date = '', job = 'Proximamente', img}) {
    return (
        <div className='workTag-container'>
            <div className='workTag-container-items'>
                <span>{date}</span>
                <h3>{job}</h3>
                {/*poner etiquetas*/}
            </div>
            <img src={img} alt="" />
        </div>
    )
}