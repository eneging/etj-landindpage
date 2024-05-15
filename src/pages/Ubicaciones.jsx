import Footer from "../components/Footer"
import Maps from "../components/Maps"
import Navbar from "../components/Navbar"


function Ubicaciones() {
  return (
    <>
<Navbar></Navbar>
<div id="bg-contenedor" className="h-[35vh] flex flex-col justify-end  " >
       
       <div className=" h-[35vh]  flex place-items-center justify-center bg-black opacity-80 max-lg:p-6 ">
              
              <div className="text-white flex justify-center flex-col items-center gap-4  ">
              <h1 className="text-6xl font-bold  max-lg:text-3xl">UBICACIONES</h1>
              <p>ACTUALMENTE CONTAMOS CON 2 SEDES VIGENTES</p>
               </div>
              </div>
                
              <div className="bg-gray-800 h-[5vh]"></div>

       
                  </div>

                  <main className="h-screen">

                    <Maps></Maps>
                  </main>
              <Footer></Footer>
    </>
  )
}

export default Ubicaciones