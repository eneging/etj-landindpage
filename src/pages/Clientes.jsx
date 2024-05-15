import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

import imgLogoAcerosArequipa from "../assets/images/clientes/logo-aceros-arequipa.png" 
import imgLogoCelima from "../assets/images/clientes/logo-celima.png" 
import imgLogoClinica from "../assets/images/clientes/logo-clinica-sanpablo.png" 
import imgLogoContructoraMalaga from "../assets/images/clientes/logo-constructora-malaga.png" 
import imgLogoSubway from "../assets/images/clientes/logo-subway.png" 
import imgLogoTrebol from "../assets/images/clientes/logo-trebol.png" 

function Clientes() {
  return (
    <>
    <Navbar></Navbar>
    <main className="h-cover">

    <div id="bg-contenedor" className="h-[35vh] flex flex-col justify-end  " >
       
       <div className=" h-[35vh]  flex place-items-center justify-center bg-black opacity-80 max-lg:p-6 ">
              
              <div className="text-white flex justify-center flex-col items-center gap-4  ">
              <h1 className="text-6xl font-bold  max-lg:text-3xl">NUESTROS CLIENTES</h1>
              <p>POR NUESTRA ALTA EFICIENCIA, CALIDAD, RESPETO AL TIEMPO DE ENTREGA LOGRAMOS LA PLENA SATISFACCIÓN DE NUESTROS CLIENTES.</p>
               </div>
              </div>
                
              <div className="bg-gray-800 h-[5vh]"></div>
                  </div>

                  <div className="grid grid-cols-3  max-lg:flex max-lg:flex-col  ">
            <div className="border-2  h-[40vh]  flex justify-center items-center  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:border-blue-400  duration-300 ... "> 
            
            <img src={imgLogoAcerosArequipa} className="object-cover h-full">

            </img>
            </div>
            <div className="border-2  h-[40vh] flex justify-center items-center  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:border-blue-400  duration-300 ... "> <img src={imgLogoCelima}  className="object-cover h-full"  ></img> </div>
            <div className="border-2  h-[40vh] flex justify-center items-center   transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:border-blue-400  duration-300 ..."> <img src={imgLogoClinica} className="object-cover h-full"   ></img> </div>

                  </div>
               
                  <div className="grid grid-cols-3  max-lg:flex max-lg:flex-col  ">
            <div  className="border-2 h-[40vh] flex justify-center items-center  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:border-blue-400  duration-300 ..."> <img className="object-cover h-full" src={imgLogoContructoraMalaga}  ></img></div>
            <div className="border-2  h-[40vh] flex justify-center items-center transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:border-blue-400  duration-300 ... "> <img src={imgLogoSubway} className="object-cover h-full"   ></img></div>
            <div className="border-2  h-[40vh] flex justify-center items-center  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:border-blue-400  duration-300 ..."> <img src={imgLogoTrebol} className="object-cover h-full"   ></img></div>

                  </div>


    </main>
    <Footer></Footer>
  </>
  )
}

export default Clientes