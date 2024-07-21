import { BsPersonCircle } from "react-icons/bs";

function Login() {
    return (
    <div className='flex h-screen '>
        <div className=' w-1/2 bg-[#345071] flex-col justify-center items-center hidden lg:flex'>
            <div className=''>
                <h1 className='text-6xl text-white font-bold ml-10 mb-5'>SGD</h1>
                <h2 className='text-4xl text-white ml-10'>Sistema de Gestión <br/>de Denuncias</h2>
            </div>
        </div>
        <div className='w-full lg:w-1/2 h-screen lg:h-auto flex flex-col'>
                <div className='flex-grow h-5/6 flex items-center justify-center'>
                    <div className='flex flex-col items-center justify-center gap-8 pt-20 pb-20 '>
                        <BsPersonCircle className='w-16 h-16 text-[#345071] ' />
                        <h2 className='text-2xl font-semibold'>Iniciar sesión</h2>
                        <div>
                            <form action="" className='flex flex-col gap-6'>
                                <input className='w-72 p-3 rounded border-[#757873] border-2' type="text" placeholder='Email' required/>
                                <input className='w-72 p-3 rounded border-[#757873] border-2' type="password" placeholder='Contraseña'required />
                            </form>
                        </div>
                        <button className='bg-[#345071] rounded w-72 p-2 text-white font-semibold '>Ingresar</button>
                    </div>
                </div>
                <div className='flex-grow h-1/6 flex items-center justify-center'>
                    <img src="/logoMinseg_black.svg" alt="" className='w-60' />
                </div>
        </div>
    </div>

    )
}

export default Login