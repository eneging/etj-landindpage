
import ImagenLogo from '../assets/images/logoetj.png'


import ServiciosOpciones from './ServiciosOpciones';
import LongMenu from './ResponsiveNavbar';



function Navbar() {




  return (
    <>
     {/* Barra de navegación */}
     <header className="  flex justify-end w-cover h-[5vh] px-16 max-lg:hidden">
         <ul className='flex  gap-10 justify-center justify-items-end  text-sm   ' >
         <li className=' flex items-center'>
              <a href="/quienesSomos" className="text-gray hover:underline   hover:text-black ">Quienes Somos</a>
            </li>
            <li className='flex items-center '>
          
              <a href="/ubicaciones" className="text-black hover:underline  hover:text-black ">Ubicaciones</a>
            </li>

            <li className=' flex items-center'>
              <a href="/contactanos" className="text-black hover:underline   hover:text-black ">Contactanos</a>
            </li>
         </ul>


          </header>


      <nav className="bg-gradient-to-r from-cyan-500 to-blue-600 ... p-4 
    max-lg:p-6
    ">
      
        <div className="container mx-auto flex justify-around content-center items-center  ">
         

          <ul className={"gap-[3vw] text-sm flex items-center  max-lg:flex  max-lg:gap-10 "}
>

<li className='flex p-1 gap-3 justify-center content-center itent-center  font-bold'>
    <img src={ImagenLogo} className='h-12 '></img>
              <a href="/" className="  text-white text-xl"> ETJ TRANSPORTES</a>
            
            </li>

            <li className='max-lg:hidden'>
              <a href="/" className=" hover:underline  text-white ">Inicio</a>
            </li>

           


            <li  className='max-lg:hidden'>
            <ServiciosOpciones></ServiciosOpciones>
            </li>

            <li  className='max-lg:hidden'> 
              <a href="/flota" className="text-white hover:underline  hover:text-black  ">Flota</a>
            </li>

            
            <li  className='max-lg:hidden'>
              <a href="/clientes" className="text-white hover:underline  hover:text-black ">Clientes</a>
            </li>
           
            <li  className='max-lg:hidden'>
              <a href="#" className="text-white hover:underline  hover:text-black ">Facturacion</a>
            </li>
            

            <li  className='max-lg:hidden'>
              <a href="/adminlogin" className="text-white hover:bg-white hover:text-black hover:underline mx-20 p-2 rounded-xl border" >Ingresar</a>
            </li>

            <li className='hidden max-lg:block max-lg:w-7 ' >
            <LongMenu></LongMenu>
                
             {/* <a href="#" className=" hover:underline mx-20 p-2 max-lg:h-10 " >
                <img src={Bar} className='h-[4vh] color-white '></img>
  </a>*/}
              
            </li>
            {/* Other sections */}
          </ul>
        </div>
      </nav>
   

  <div className='fixed content-center   h-[10vh] w-[5vw] left-[90vw] top-[85vh] p-7 max-lg:left-[80vw] '>
<div className=' cursor-pointer  animate-bounce'> 
<a href='https://api.whatsapp.com/send/?phone=51954649979&text=Hola%21+Estoy+interesado+en+tu+servicio&type=phone_number&app_absent=0'>    
<svg xmlns="http://www.w3.org/2000/svg" className='h-[7vh]' viewBox="0 0 448 512">
  
  <path fill="#34f000" d="M92.1 254.6c0 24.9 7 49.2 20.2 70.1l3.1 5-13.3 48.6L152 365.2l4.8 2.9c20.2 12 43.4 18.4 67.1 18.4h.1c72.6 0 133.3-59.1 133.3-131.8c0-35.2-15.2-68.3-40.1-93.2c-25-25-58-38.7-93.2-38.7c-72.7 0-131.8 59.1-131.9 131.8zM274.8 330c-12.6 1.9-22.4 .9-47.5-9.9c-36.8-15.9-61.8-51.5-66.9-58.7c-.4-.6-.7-.9-.8-1.1c-2-2.6-16.2-21.5-16.2-41c0-18.4 9-27.9 13.2-32.3c.3-.3 .5-.5 .7-.8c3.6-4 7.9-5 10.6-5c2.6 0 5.3 0 7.6 .1c.3 0 .5 0 .8 0c2.3 0 5.2 0 8.1 6.8c1.2 2.9 3 7.3 4.9 11.8c3.3 8 6.7 16.3 7.3 17.6c1 2 1.7 4.3 .3 6.9c-3.4 6.8-6.9 10.4-9.3 13c-3.1 3.2-4.5 4.7-2.3 8.6c15.3 26.3 30.6 35.4 53.9 47.1c4 2 6.3 1.7 8.6-1c2.3-2.6 9.9-11.6 12.5-15.5c2.6-4 5.3-3.3 8.9-2s23.1 10.9 27.1 12.9c.8 .4 1.5 .7 2.1 1c2.8 1.4 4.7 2.3 5.5 3.6c.9 1.9 .9 9.9-2.4 19.1c-3.3 9.3-19.1 17.7-26.7 18.8zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM148.1 393.9L64 416l22.5-82.2c-13.9-24-21.2-51.3-21.2-79.3C65.4 167.1 136.5 96 223.9 96c42.4 0 82.2 16.5 112.2 46.5c29.9 30 47.9 69.8 47.9 112.2c0 87.4-72.7 158.5-160.1 158.5c-26.6 0-52.7-6.7-75.8-19.3z"/></svg>
  </a> 
</div>

    </div>
    </>
  )
}

export default Navbar