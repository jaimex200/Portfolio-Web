import './css/MainPage.css'
import aboutImg from './assets/aboutPhoto2.jpg'
import MSImg from './assets/MS.jpg'
import PixelwareImg from './assets/Pixelware.jpg'
import PortfolioWebImg from './assets/PortfolioWeb.jpg'
import TFGImg from './assets/TFG.jpg'
import React, { useState } from 'react';

/*
<SectionAbout></SectionAbout>
<SectionWork></SectionWork>
<SectionContact></SectionContact>
*/
export function MainPage() {
    return (
        <>
            <div className='mainPage-container'>
                <SectionTitle></SectionTitle>
                <SectionAbout></SectionAbout>
                <SectionWork_V2></SectionWork_V2>
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

export function SectionWork_V2() {
    return (
        <>
            <section className='sectionWork-container'>
                <div className='sectionWork-container-items'>
                    <ButtonTitle textPrint={"Trabajo"}></ButtonTitle>
                    <h2>Mi trayectoria profesional y proyectos</h2>
                    <CarouselWorkTag></CarouselWorkTag>
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

function CarouselWorkTag() {
    const [offset, setOffset] = useState(0);

    const trabajos = [
        { date: 'Octubre 2022 - Actualidad', job: 'Consultor de Tecnologia', img: MSImg },
        { date: 'Octubre 2021 - Febrero 2022', job: 'Resolucion de Incidencias', img: PixelwareImg },
        { date: 'Noviembre 2023 - Actualidad', job: 'Mi Portfolio con React', img: PortfolioWebImg },
        { date: 'Marzo 2022 - Diciembre 2022', job: 'Herramienta de Inversion con IA', img: TFGImg }
        // ... Agrega todos tus trabajos aquí
    ];

    const anterior = () => {
        if (offset < 0) {
            setOffset(offset + 100); // Mueve el carrusel hacia la derecha
        }
    };

    const siguiente = () => {
        if (offset > -100 * (trabajos.length - 4)) { // Ajusta el "3" según cuántas tarjetas quieras mostrar por defecto
            setOffset(offset - 100); // Mueve el carrusel hacia la izquierda
        }
    };

    return (
        <div className="carrusel-container">
            <button className="carrusel-button prev" onClick={anterior}>◀</button>
            <div className="carrusel-slide" style={{ transform: `translateX(${offset}%)` }}>
                {trabajos.map((trabajo, index) => (
                    <WorkTag key={index} {...trabajo} />
                ))}
            </div>
            <button className="carrusel-button next" onClick={siguiente}>▶</button>
        </div>
    );
}

export function SectionContact() {
    return (
        <section className='sectionContact-container'>
            <div className='sectionContact-container-items'>
                <form name="contact" netlify>
                    <p>
                        <label>Nombre <input type="text" name="name" /></label>
                    </p>
                    <p>
                        <label>Email <input type="email" name="email" /></label>
                    </p>
                    <p>
                    <label>Mensaje: <textarea name="message"></textarea></label>
                    </p>
                    <p>
                        <button type="submit">Send</button>
                    </p>
                </form>
            </div>
        </section>
    )
}