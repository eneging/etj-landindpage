import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import chica from "../assets/images/Buses/chica.png"

function QuienesSomos() {
  return (
    <>
    <Navbar></Navbar>

    <main className="h-cover">
    <div id="bg-contenedor" className="h-[35vh] flex flex-col justify-end  " >
       
<div className=" h-[35vh]  flex place-items-center justify-center bg-black opacity-80 max-lg:p-6 ">
       
       <div className="text-white text-6xl font-bold  ">
        Sobre Nosotros
        </div>
       </div>
         
       <div className="bg-gray-800 h-[5vh]"></div>
           </div>

           <div className="h-cover grid grid-cols-3 gap-3  max-lg:flex max-lg:flex-col "> 
           
           <div className="bg-gray-100 h-[40vh] p-6 py-10 max-lg:py-10">
            <h1 className="text-4xl font-bold">Porque Elegirnos</h1>
            <ul className="p-3 flex flex-col text-xl  max-lg:text-lg ">
             <li>- 17 años de experiencia en el mercado.</li>
             <li>- 100% comprometidos con la seguridad</li>
             <li>- Mejores tarifas del mercado.</li>
             <li>- Disponibilidad inmediata a nivel nacional.</li>

            </ul>

           </div>

           <div className="bg-gray-100  h-[40vh] flex justify-center items-center content-center">
            <div className="bg-blue-500 p-4 h-cover w-[25vw] max-lg:w-[80vw] rounded-lg  shadow-2xl border-[0.5rem] border-white ">
              <h1 className="text-xl font-bold text-white">NUESTRA VISIÓN</h1>
              <p className="p-3 text-white ">
              Ser reconocidos como una empresa líder en el rubro de transporte de cargas especiales convirtiéndonos en la primera opción del mercado nacional.
              </p>
            </div>

           </div>

           <div className="bg-gray-100 h-cover flex justify-center items-center content-center ">
           

           <div className="bg-blue-500 p-4 h-cover w-[25vw] max-lg:w-[80vw] rounded-lg  shadow-2xl border-[0.5rem] border-white ">
              <h1 className="text-xl font-bold text-white">NUESTRA MISIÓN</h1>
              <p className="p-3 text-white ">
              Satisfacer totalmente las necesidades en transporte de nuestros clientes, a través de la excelencia en el servicio, el desarrollo integral de nuestros colaboradores y el sentido de compromiso con nuestro país.
              </p>
            </div>

           </div>

           
    
           </div>

<div className="bg-white h-[3vh]"></div>
<div id="bg-contenedor-avion" className=" h-[80vh] grid grid-cols-2 max-lg:grid-cols-1 max-lg:h-[150vh]">

<div className=" h-full flex justify-end max-lg:hidden">
<img src={chica} className="object-cover" ></img>

</div>
<div className="p-4 bg-gray-900 m-4  opacity-80 flex flex-col gap-4">
<h1 className="text-2xl font-bold text-white">TRANSPORTES ETJ</h1>
<p className="text-gray-100">Somos una empresa de transporte de carga pesada que opera en el mercado desde el año 2001, con el objeto de brindar soluciones en transporte a sus clientes; con una ﬁlosoRa de servicio de calidad y mejoramiento constante. Los años que tenemos en el mercado, nos han hecho acreedores de una vasta experiencia en lo que corresponde a transporte de maquinaria pesada, transporte de equipos, carga peligrosa, carga sobredimensionada.</p>
<p className="text-gray-100">Ofrecemos servicios de transporte de carga pesada desde los principales puertos maríTmos y ciudades del país en modalidad full y/o consolidado, nos especializamos en la atención de proyectos de gran envergadura y obras civiles para ello mantenemos nuestro centro de operación en la ciudad de Lima contando con la logísTca completa y ﬂota conﬁable ajustados a las necesidades de los clientes.</p>
<p className="text-gray-100">En el ámbito internacional, ETJ ofrece servicios de transporte de carga terrestre desde y hacia cualquier ciudad de ECUADOR, COLOMBIA, PERU, CHILE, BOLIVIA Y BRASIL. Incluyendo servicios complementarios como almacenamiento temporal, manipulación de carga, embalaje y trámites aduaneros, con capacidad de brindar servicios integrales desde origen a desTno. Nuestra experiencia en transporte terrestre internacional nos permite prestar excelente servicio y asesoría en comercio exterior, así mismo contamos con personal en frontera para el soporte en importación y exportación.</p>
</div>

</div>
<div className="bg-white h-[3vh]"></div>

           <div className="bg-white h-cover grid grid-cols-2 gap-3  max-lg:flex max-lg:flex-col"> 
           
           <div id="bg-distribucion" className="bg-orange-500 h-[50vh]">

           </div>
      
           <div className=" h-[50vh] p-6  flex flex-col gap-4 max-lg:h-full">
<h1  className=" font-bold text-xl    ">REALIZAMOS TRANSPORTE TERRESTRE INTERNACIONAL POR CARRETERA A COLOMBIA, ECUADOR, BOLIVIA, CHILE Y BRASIL</h1>
            <p>Contamos con el Permiso Complementario y Alianzas estratégicas a nivel internacional que nos permite prestar servicios puerta a puerta a nivel andino.</p>

            <h1 className=" font-bold text-xl ">TRANSPORTE NACIONAL DE CARGA TERRESTRE</h1>
            <p>Ofrecemos servicios de Transporte de carga pesada desde los principales puertos marítimos y ciudades del país en modalidad full y/o Consolidado. Operamos en los principales puertos del país y diferentes ciudades. Contamos con flota de vehículos confiable y segura ajustada a las necesidades de nuestros clientes.</p>
           </div>
    
           </div>
          

    </main>
  <Footer></Footer>
  </>
  )
}

export default QuienesSomos