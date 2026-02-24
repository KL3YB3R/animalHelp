import { ImageIcon } from 'lucide-react';
import userPhoto from './../../../shared/assets/img/user.png';

export const NewAnnouncement = () => {
  return (
    <article className="mb-5 bg-white rounded-xl shadow-md p-3">
        <aside className='flex justify-between items-center gap-2'>
            {/* Imagen con tamaño fijo */}
            <img className="w-12 h-12 flex-none" src={userPhoto} alt="User" />

            {/* Input: flex-1 lo hace crecer para ocupar todo el espacio sobrante */}
            <input 
                type="text" 
                className='flex-1 p-3 px-5 rounded-full text-lg bg-gray-100 border-none focus:ring-0 outline-none' 
                placeholder='¿Tienes un nuevo caso para publicar?' 
            />

            {/* Contenedor de botones: flex-none para que no se estire, y flex para alinearlos */}
            <div className='flex items-center gap-1 flex-none'>
                <button type="button" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <ImageIcon className="w-6 h-6 text-gray-500" />
                </button>
            </div>
            </aside>
    </article>
  )
}
