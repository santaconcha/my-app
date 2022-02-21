import './Menu.css';
import Logo_sobre from '../assets/sobre.svg';

function Menu() {
  return (
    <header className="Menu">
      <nav>
          <div class="container">
              <a class="logo-web scrollTOP" href="#hero"><img class="img-logo-web cargado" src="https://static.santaconcha.com/assets/img/icon-logo-opt.png" alt="Logo ICON SANTACONCHA Digital Performance" /></a>
              <div class="hamburger">
                  <div class="_layer -top"></div>
                  <div class="_layer -mid"></div>
                  <div class="_layer -bottom"></div>
              </div>
              <ul class="items-menu">
                  <li><a href="#nosotros" class="scrollTo">Nosotros</a></li>
                  <li><a href="#servicios" class="scrollTo">Servicios</a></li>
                  <li><a href="#proyectos" class="scrollTo">Proyectos</a></li>
                  <li><a href="#equipo" class="scrollTo">Equipo</a></li>
                  <li><a href="#clientes" class="scrollTo">Clientes</a></li>
                  <li><a href="#contacto" class="scrollTo">Contacto</a></li>            
              </ul>
          </div>
      </nav>
        <section id="hero" class="full-page">
            <div class="background-hero">
                <div class="capa-flotada-hero"></div>
                <div class="container h-100">
                    <div class="row h-100 align-items-center">
                        <div class="col-lg-6 content-hero">
                            <img class="letras-logo" src="https://static.santaconcha.com/assets/img/letras-logo-blanco-opt.png" alt="Logo SANTACONCHA Digital Performance" />
                            <h1>Agencia de desarrollo web<br />y marketing digital</h1>
                            <p>Con foco en hacer crecer tu negocio,<br />porque eso es lo que realmente importa.</p>
                            <div class="content-ctas">
                                <a class="btn-santaconcha scrollTo" href="#contacto">Cuéntanos tu caso</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>      
        </section>
    </header>
  );
}

export default Menu;



