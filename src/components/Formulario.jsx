

function Formulario() {
  return (
    <>

<form id="contactanos" className="bg-gray-800 shadow-lg p-10 h-cover w-[40vw]    max-sm:w-[80vw] max-sm:h-[90vh] text-white   ">
          <h3 className="text-xl font-bold text-white">
          Solicitar Cotización
          </h3>

<p className="text-white">Solicite su cotización gratuita, rellene todos los datos.</p>


<div className="flex flex-col p-6 gap-3">
<label htmlFor="nombre">Nombre</label>
<input className=" rounded-[0.5vh]" type="text" id="nombre" name="nombre" />

<label htmlFor="email">Email</label>
<input className=" rounded-[0.5vh]"  type="text" id="email" name="email" />

<label htmlFor="asunto:">Asunto</label>
<input className=" rounded-[0.5vh]"  type="text" id="Asunto:" name="Asunto" />


<label htmlFor="mensaje">Mensaje</label>
<textarea className=" rounded-[0.5vh]" ></textarea>

<button className="bg-slate-500 rounded-[0.5vh] ">Enviar</button>
</div>
        </form>
    </>
  )
}

export default Formulario