

function Footer() {
  return (
    <div className="text-white">

        
      <footer className="py-8 text-center bg-gradient-to-r bg-gray-800 h-[15vh] flex  justify-around max-lg:flex-col max-lg:items-center max-lg:gap-2 max-lg:justify-center">

<div className=" hidden">Copyright © 2020 ETJ SAC - Lima, Perú</div>


<div className=" text-sm cursor-pointer " >
    <ul className="flex gap-3">
        <li><a href="/">Inicio</a> </li>
        
        <li><a href="/flora">Flota</a></li>
        <li> <a href="/quienessomos">Quienes Somos</a></li>
        <li> <a href="/contactanos">Contactanos</a></li>
    
        </ul>
        </div>
        <div className=" max-lg:block">Copyright © 2020 ETJ SAC - Lima, Perú</div>
      </footer>
    </div>
  )
}

export default Footer