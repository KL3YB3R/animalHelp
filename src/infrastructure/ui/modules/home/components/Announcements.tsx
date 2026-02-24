import userPhoto from './../../../shared/assets/img/user.png';
import perro1 from './../../../../../../public/img/perro1.jpg';
import { HeartHandshake, MessageSquareText, Repeat2 } from "lucide-react"

export const Announcement = () => {
    return (
        <article className="bg-white rounded-xl shadow-md mb-5">
            <figure className="bg-status-adoption rounded-t-xl p-3"></figure>

            <aside className="bg-white">
                {/* User info */}
                <div className="user-info flex justify-start p-4">
                <img className="w-16 h-16" src={userPhoto} alt="" />

                <div className="ml-3">
                    <h3 className="text-lg font-semibold">
                    Ramses Meneses
                    <button type="button" className="text-sm border border-gray-300 rounded-lg px-3 py-1 ml-2 hover:bg-gray-100 hover:cursor-pointer">Seguir</button>
                    </h3>
                    <p className="text-sm text-gray-400">Hace un momento</p>
                </div>

                <div className="ml-auto text-gray-400">
                    <p className="text-sm">Caracas, Venezuela</p>
                </div>
                </div>

                {/* Description */}
                <div className="description px-4 pb-2">
                <p className="text-sm">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor impedit pariatur magnam aliquam, ipsam quia explicabo provident dolores laboriosam facere excepturi aliquid sunt. Soluta, sapiente vel quos pariatur atque dolores fugit placeat, aperiam inventore fuga provident ut architecto tenetur unde a maxime cumque nam odio eum nostrum excepturi? Repellat officiis natus nam! Mollitia provident ad, quia exercitationem excepturi reprehenderit! Vitae suscipit voluptas quod odio iusto architecto assumenda labore sequi unde ducimus repellendus veritatis error tempore aliquid, ullam atque veniam ipsa hic aut? Aspernatur autem ratione exercitationem totam architecto necessitatibus molestias sunt facilis obcaecati cum nesciunt, tempora nemo hic voluptatem molestiae. 
                </p>
                </div>

                {/* Images */}
                <div className="actions flex justify-end mb-3">
                <img src={perro1} alt="" className="w-full h-80 max-h-80" />
                </div>

                {/* Actions */}
                <div className="px-4">
                <hr className="border-gray-200" />

                <div className="actions flex justify-between p-2">
                    <button type="button" className="w-full text-md px-3 py-2 ml-2 hover:bg-gray-100 hover:cursor-pointer flex items-center justify-center" >
                    <HeartHandshake size={17} className="mr-2" />
                    Me gusta
                    </button>
                    <button type="button" className="w-full text-md px-3 py-2 ml-2 hover:bg-gray-100 hover:cursor-pointer flex items-center justify-center">
                    <MessageSquareText size={17} className="mr-2" />
                    Comentar
                    </button>
                    <button type="button" className="w-full text-md px-3 py-2 ml-2 hover:bg-gray-100 hover:cursor-pointer flex items-center justify-center">
                    <Repeat2 size={17} className="mr-2" />
                    Compartir
                    </button>
                </div>
                
                </div>
                
            </aside>
        </article>
    )
}
