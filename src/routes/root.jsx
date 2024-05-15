import imagen1 from "../assets/images/banner1.jpg";

import imagen2 from "../assets/images/contenedor.jpg";

import imagen4 from "../assets/images/ubicacion.png";

import portada from "../assets/images/Buses/portada.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Formulario from "../components/Formulario";
import Portada from "../assets/images/Buses/chica-portadas.jpg"


export default function Root() {
  return (
    <>
      <Navbar></Navbar>
      {/* Contenido principal */}
      <div className=" ">
        <div className="container mx-auto  ">
          <div className="h-1"></div>
          <main>
            {/* Sección de imágenes */}
            <section className="grid sm:grid-cols-2 gap-10 m-10 ">
              <div className="flex justify-center max-lg:hidden ">
                <img
                  className="object-cover h-auto sm:h-72 w-full"
                  src={imagen2}
                  alt="Imagen 1"
                />
              </div>
              <div className="flex justify-center">
                <img
                  className="object-cover h-auto sm:h-72 w-full"
                  src={imagen1}
                  alt="Imagen 2"
                />
              </div>
              {/* Agrega más imágenes si es necesario */}
            </section>

            <section className=" bg-gradient-to-r from-cyan-500 to-blue-600 ... ">
              <div className="">
                <img
                  src={Portada}
                  alt="Main image description"
                  className=" w-full h-full object-cover"
                />
              </div>
            </section>

            {/* Contenido adicional */}
            <section className="container mx-auto py-8 text-black bg-white ">
              <h2 className="text-4xl font-bold mb-4 bg-slate-900 p-4 text-white">
                POR QUÉ ELEGIRNOS
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-cover p-6">
                <div className="border-black border p-6 rounded-xl shadow-2xl bg-white">
                  <h3 className="text-2xl font-bold mb-2">EXPERIENCIA</h3>
                  <p className="mb-4">
                    Llevamos más de 20 años en el mercado, contamos con aliados
                    expertos en aduanas y manejo de carga a nivel nacional e
                    internacional. Servicio de calidad.
                  </p>
                </div>
                <div className="border-black border p-6 rounded-xl shadow-2xl bg-white">
                  <h3 className="text-2xl font-bold mb-2">COBERTURA</h3>
                  <p className="mb-4">
                    Proveemos servicio de transporte de carga a nivel nacional
                    con pase internacional a los países de Ecuador, Colombia,
                    Bolivia, Chile y Brasil vía terrestre.
                  </p>
                </div>
                <div className="border-black border p-6 rounded-xl shadow-2xl bg-white">
                  <h3 className="text-2xl font-bold mb-2">
                    ATENCIÓN DE CALIDAD
                  </h3>
                  <p className="mb-4">
                    Disponemos de personal experto e idóneo en el manejo de su
                    carga, seguimiento y control de despacho. Contamos con el
                    servicio de embalaje para cargas nacionales y de
                    exportación.
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <h2 className="text-4xl font-bold mb-4 bg-slate-900 text-white p-3">
                  NUESTROS SERVICIOS
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-6 ">
                  <div className=" shadow-lg p-6 border-black border rounded-xl bg-white ">
                    <h3 className="text-xl font-bold">Transporte de Carga</h3>
                    <p className="mt-2">
                      Con entrega de urgencia y sin urgencia para todo tipo de
                      carga.
                    </p>
                  </div>
                  <div className=" shadow-lg p-6 border-black border rounded-xl bg-white">
                    <h3 className="text-xl font-bold">
                      Transporte en Camabaja
                    </h3>
                    <p className="mt-2">
                      Transporte de hasta 50 toneladas para cualquier parte del
                      país.
                    </p>
                  </div>
                  <div className=" shadow-lg p-6 border-black border rounded-xl bg-white">
                    <h3 className="text-xl font-bold">Carga Peligrosa</h3>
                    <p className="mt-2">
                      Choferes certificados con toda la documentación y equipos
                      adecuados.
                    </p>
                  </div>
                  <div className=" shadow-lg p-6 border-black border rounded-xl bg-white">
                    <h3 className="text-xl font-bold">Mudanzas</h3>
                    <p className="mt-2">
                      Para cualquier tipo de mudanza a nivel local y nacional.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>

      <section
        className="grid grid-cols-1 md:grid-cols-3  mt-8 border bg-gray-800 border-black
     
      "
      >
        <div className="col-span-2 bg-gray-800 text-white h-cover ">
          <h2 className="text-4xl flex items-center content-center font-bold p-6  text-white">
            UBICACIONES
          </h2>


          <div>
            <img src={imagen4} className="w-full h-full object-cover "></img>
          </div>
        </div>
        <div className=" p-6 bg-gradient-to-r bg-white flex flex-col gap-2 ">


          <h1 className="font-bold text-xl p-3 bg-gradient-to-r from-cyan-500 to-blue-600 ... text-white">CONTAMOS CON 2 UBICACIONES</h1>
          <div className=" h-[20vh]">
          <img src={portada} className=" object-cover w-full h-full " ></img></div>

        <div className=" flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10"
                viewBox="0 0 576 512"
              >
                <path d="M408 120c0 54.6-73.1 151.9-105.2 192c-7.7 9.6-22 9.6-29.6 0C241.1 271.9 168 174.6 168 120C168 53.7 221.7 0 288 0s120 53.7 120 120zm8 80.4c3.5-6.9 6.7-13.8 9.6-20.6c.5-1.2 1-2.5 1.5-3.7l116-46.4C558.9 123.4 576 135 576 152V422.8c0 9.8-6 18.6-15.1 22.3L416 503V200.4zM137.6 138.3c2.4 14.1 7.2 28.3 12.8 41.5c2.9 6.8 6.1 13.7 9.6 20.6V451.8L32.9 502.7C17.1 509 0 497.4 0 480.4V209.6c0-9.8 6-18.6 15.1-22.3l122.6-49zM327.8 332c13.9-17.4 35.7-45.7 56.2-77V504.3L192 449.4V255c20.5 31.3 42.3 59.6 56.2 77c20.5 25.6 59.1 25.6 79.6 0zM288 152a40 40 0 1 0 0-80 40 40 0 1 0 0 80z" />
              </svg>
              <p className="p-4">
                Calle Jaime garza 367 piso 3 <br /> La Victoria, Lima
              </p>
            </div>

            <div className=" flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10"
                viewBox="0 0 576 512"
              >
                <path d="M408 120c0 54.6-73.1 151.9-105.2 192c-7.7 9.6-22 9.6-29.6 0C241.1 271.9 168 174.6 168 120C168 53.7 221.7 0 288 0s120 53.7 120 120zm8 80.4c3.5-6.9 6.7-13.8 9.6-20.6c.5-1.2 1-2.5 1.5-3.7l116-46.4C558.9 123.4 576 135 576 152V422.8c0 9.8-6 18.6-15.1 22.3L416 503V200.4zM137.6 138.3c2.4 14.1 7.2 28.3 12.8 41.5c2.9 6.8 6.1 13.7 9.6 20.6V451.8L32.9 502.7C17.1 509 0 497.4 0 480.4V209.6c0-9.8 6-18.6 15.1-22.3l122.6-49zM327.8 332c13.9-17.4 35.7-45.7 56.2-77V504.3L192 449.4V255c20.5 31.3 42.3 59.6 56.2 77c20.5 25.6 59.1 25.6 79.6 0zM288 152a40 40 0 1 0 0-80 40 40 0 1 0 0 80z" />
              </svg>
              <p className="p-4">
              Calle Londres 364 <br /> La Tinguiña, Ica
              </p>
            </div>
        </div>
      </section>
      <div className="bg-gray-800 h-10"></div>

      <div id="bg-contenedor-carga" className="h-cover m-4 max-lg:flex max-lg:justify-center">

    <Formulario></Formulario>
</div>
<Footer></Footer>
    </>
  );
}
