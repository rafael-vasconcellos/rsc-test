'use client'
export default function Form({ onUpdate }: { onUpdate: (p: any) => Promise<any> }) { 
    return ( 
        <form className="p-4 flex gap-3" action={onUpdate}>
            <input className="p-2 text-black rounded-full" type="text" name="search" placeholder="Search..." />
            <button className="p-2 bg-white text-black rounded-full" type="submit">Search</button>
        </form>
    )
}



interface IProfile { 
    name: string, 
    imgUrl: string 
}

function Card({ profile }: { profile: IProfile }) { 
    return ( 
        <div className="flex gap-2">
            <div className="w-11 h-11" style={{ backgroundImage: `url(${profile.imgUrl})` }}></div>
            <p>{profile.name}</p>
        </div>
    )
}