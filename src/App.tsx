// "use server"
import './App.css'
import logo from './assets/vdrone.svg'
import sirius from './assets/sirius.png'
import square from './assets/square.svg'
import architecture from './assets/architecture.svg'
import caseSvg from './assets/case.svg'
import flag from './assets/flag.svg'
import rocket from './assets/rocket.png'
import braintools from './assets/braintools.png'
// import category1 from './assets/category1.png'
// import category2 from './assets/category2.png'
// import category3 from './assets/category3.png'
import marker from './assets/marker.png'
import dronImg from './assets/dronImg.png'
// import {Swiper, SwiperSlide} from 'swiper/react';
import Dron from "./Dron.tsx";

// import {EffectCoverflow, Pagination} from 'swiper/modules';

function App() {
    return (
        <div className="App">
            {/*<div className="backgroundWhiteSphere"></div>*/}
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <nav className='App-header_nav'>
                    <a href="/">о нас</a>
                    <a href="/">контакты</a>
                    <a href="/">каталог</a>
                </nav>
            </header>
            <Dron/>
            <div className='App_content'>
                <main className="main">
                    <div className="App_backgroundRedSphere"></div>
                    <div className="App_backgroundBLueSphere"></div>
                    <h1>Кто мы?</h1>
                    <p>мы - российская технологическая команда, разрабатывающая
                        универсальные платформы беспилотных летательных аппаратов
                        с модульной архитектурой.</p>
                </main>
                <section className="mission">
                    <div className='mission_content'>
                        <h2>наша миссия</h2>
                        <p>обеспечить технологическую независимость России за счёт
                            разработки гибких и доступных платформ
                            для беспилотных решений в ключевых отраслях.</p>
                        <div className='mission_content-item'>
                            <img src={rocket} alt="Адаптация под отрасли"/>
                            <p>Адаптация под отрасли</p>
                        </div>
                        <div className='mission_content-item'>
                            <img src={braintools} alt="Молодая команда"/>
                            <p>Молодая команда инженеров</p>
                        </div>
                        <div className='mission_content-item'>
                            <img src={marker} alt="Резиденты ФТ Сириус"/>
                            <p>Резиденты ФТ Сириус</p>
                        </div>
                    </div>
                    <img className='mission_img' src={sirius} alt="Сириус"/>
                </section>
                <section className="aboutus">
                    <h2>мы не просто разрабатываем дроны</h2>
                    <p>мы создаём модульную платформу из отечественных комплектующих,
                        что объединит невысокую стоимость продукта с полной независимостью от импорта</p>
                    <div className="aboutus_content">
                        <div className="aboutus_content-item">
                            <img src={square} alt="куб"/>
                            <h4>модульный корпус</h4>
                            <p>совместимый с различной нагрузкой</p>
                        </div>
                        <div className="aboutus_content-item">
                            <img src={architecture} alt="архитектура"/>
                            <h4>открытая архитектура</h4>
                            <p>кастомизация и локальное производство</p>
                        </div>
                        <div className="aboutus_content-item">
                            <img src={caseSvg} alt="внедрение"/>
                            <h4>простое внедрение</h4>
                            <p>в текущие бизнес процессы</p>
                        </div>
                        <div className="aboutus_content-item">
                            <img src={flag} alt="флаг"/>
                            <h4>производство</h4>
                            <p>на территории РФ</p>
                        </div>
                    </div>
                </section>
                <section className="construction">
                    <div className="construction_backgroundBLueSphere"></div>
                    <div className="construction_backgroundRedSphere"></div>
                    <h2>конструкция</h2>
                    <p>собрана из взаимозаменяемых модулей.
                        возможен апгрейд без замены всей платформы</p>
                    <img src={dronImg} alt='дрон'/>
                </section>
            {/*    <section className="categories">*/}
            {/*    <h2>каталог прототипов</h2>*/}
            {/*    <Swiper*/}
            {/*        effect={'coverflow'}*/}
            {/*        grabCursor={true}*/}
            {/*        centeredSlides={true}*/}
            {/*        slidesPerView={'auto'}*/}
            {/*        loop={true}*/}
            {/*        coverflowEffect={{*/}
            {/*            rotate: 50,*/}
            {/*            stretch: 0,*/}
            {/*            depth: 100,*/}
            {/*            modifier: 1,*/}
            {/*            slideShadows: true,*/}
            {/*        }}*/}
            {/*        modules={[EffectCoverflow, Pagination]}*/}
            {/*        className="mySwiper"*/}
            {/*    >*/}
            {/*        <SwiperSlide>*/}
            {/*            <p>“Терра” Земледельческий дрон нового поколения — для ухода за полями и контроля урожая.</p>*/}
            {/*            <img src={category1}/>*/}
            {/*        </SwiperSlide>*/}
            {/*        <SwiperSlide>*/}
            {/*            <p>“Виора” Дрон-наблюдатель для мониторинга, картографии и охраны объектов.</p>*/}
            {/*            <img src={category2}/>*/}
            {/*        </SwiperSlide>*/}
            {/*        <SwiperSlide>*/}
            {/*            <p>“Достар” Надёжный дрон для быстрой доставки посылок и грузов на короткие и средние расстояния.</p>*/}
            {/*            <img src={category3}/>*/}
            {/*        </SwiperSlide>*/}
            {/*        <SwiperSlide>*/}
            {/*            <p>“Терра” Земледельческий дрон нового поколения — для ухода за полями и контроля урожая.</p>*/}
            {/*            <img src={category1}/>*/}
            {/*        </SwiperSlide>*/}
            {/*        <SwiperSlide>*/}
            {/*            <p>“Виора” Дрон-наблюдатель для мониторинга, картографии и охраны объектов.</p>*/}
            {/*            <img src={category2}/>*/}
            {/*        </SwiperSlide>*/}
            {/*        <SwiperSlide>*/}
            {/*            <p>“Достар” Надёжный дрон для быстрой доставки посылок и грузов на короткие и средние расстояния.</p>*/}
            {/*            <img src={category3}/>*/}
            {/*        </SwiperSlide>*/}
            {/*    </Swiper>*/}
            {/*</section>*/}
                <section className="contact">
                    <h2>хотите узнать больше?</h2>
                    <div className='contact_input'>
                        <input placeholder='Оставьте свой email и мы с вами свяжемся...'/>
                        <button>отправить</button>
                    </div>
                </section>

                <footer>
                    ООО “Вэдрон”
                    354340, пгт. Сириус, Триумфальный проезд, д.1
                </footer>
            </div>
        </div>
    )
}

export default App
