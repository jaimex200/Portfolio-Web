import './css/MainPage.css'

export function MainPage() {
    return (
        <>
            <div className='mainPage-container'>
                <SectionTitle></SectionTitle>
                <SectionAbout></SectionAbout>
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
                        <img src="./src/assets/aboutPhoto1.png" alt="" />
                    </div>
                    <div className='sectionAbout-container-items-text'>
                        <div className='sectionAbout-container-items-title'>
                            <h2>SOBRE MI</h2>
                        </div>
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