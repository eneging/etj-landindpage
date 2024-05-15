import FlotaBuses from "../components/FlotaBuses"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"


function Flota() {
  return (
    <>
      <Navbar></Navbar>
      <div id="bg-contenedor" className="h-[35vh] flex flex-col justify-end  " >
       
       <div className=" h-[35vh]  flex place-items-center justify-center bg-black opacity-80 max-lg:p-6 ">
              
              <div className="text-white flex justify-center flex-col items-center gap-4  ">
              <h1 className="text-6xl font-bold  max-lg:text-3xl">NUESTRA FLOTA</h1>
              <p>CONTAMOS CON UNIDADES DISPONIBLES PARA CARGA MEDIANA Y PESADA A NIVEL NACIONAL</p>
               </div>
              </div>
                
              <div className="bg-gray-800 h-[5vh]"></div>
                  </div>
      <main className="h-cover">
       <FlotaBuses></FlotaBuses>
      </main>
      <Footer></Footer>
    </>

  )
}

export default Flota