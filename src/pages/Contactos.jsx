import Footer from "../components/Footer";
import Formulario from "../components/Formulario";

import Navbar from "../components/Navbar";

function Contactos() {
  return (
    <>
      <Navbar></Navbar>
      <div id="bg-contenedor" className="h-[35vh] flex flex-col justify-end  ">
        <div className=" h-[35vh]  flex place-items-center justify-center bg-black opacity-80 max-lg:p-6 ">
          <div className="text-white flex justify-center flex-col items-center gap-4  ">
            <h1 className="text-6xl font-bold  max-lg:text-3xl">CONTACTANOS</h1>
            <p>ESTAMOS LISTOS PARA PODER AYUDARTE</p>
          </div>
        </div>

        <div className="bg-gray-800 h-[5vh]"></div>
      </div>

      <main className="h-cover p-6">
<div id="bg-contenedor-carga" className="h-cover m-4 max-lg:flex max-lg:justify-center">

    <Formulario></Formulario>
</div>

        <div className="grid grid-cols-3 gap-4 h-cover max-lg:flex max-lg:flex-col">
          <div className="border-2 rounded-xl p-6 h-[30vh] w-[30vw] max-lg:w-full ">
            <h1 className="text-xl font-bold">NOSOTROS</h1>
            <p className="p-4">
              Somos una empresa de transporte de carga pesada que opera en el
              mercado desde el año 2001, con el objeto de brindar soluciones en
              transporte a sus clientes; con una filosofía de servicio de
              calidad y mejoramiento constante.
            </p>
          </div>
          <div className="border-2 rounded-xl p-6 h-cover w-[30vw] max-lg:w-full ">
            <h1 className="text-xl font-bold">NUESTRAS OFICINAS</h1>
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
          <div className="border-2 rounded-xl p-6 h-cover w-[30vw] max-lg:w-full">
            <h1 className="text-xl font-bold">TELÉFONOS</h1>
            
           <div className="p-6 flex  items-center gap-3  h-[10vh">

           <svg xmlns="http://www.w3.org/2000/svg" className="h-8" viewBox="0 0 512 512">
            <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>  
             
             <div>
                <h1 className="font-bold text-xl">Oficina:</h1>
                <p>(01)3249375 / 954649979 / 962213562</p>
             </div>
           </div>

           <div className="p-6 flex  items-center gap-3 h-[10vh]">

           <svg xmlns="http://www.w3.org/2000/svg" className="h-8" viewBox="0 0 448 512">
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
             
             <div>
                <h1 className="font-bold text-xl">WhatsApp :</h1>
                <p>954649979 / 962213562</p>
             </div>
           </div>

          </div>
        </div>
      </main>

      <Footer></Footer>
    </>
  );
}

export default Contactos;
