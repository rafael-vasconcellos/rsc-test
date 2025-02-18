import { Suspense } from "react";
import { revalidatePath } from "next/cache";
import Form from "./Form";
import Todos from "./Todos";
import Env from "./Env";
import Time from "./Time";



export default async function Home() { 
    async function onUpdate(data: FormData) { 
        'use server'
        const search = data.get('search')?.toString();
        console.log(search);
        revalidatePath('/');
    }


    return ( 
        <>
            <Env />
            <main className="flex flex-col gap-4">
                <Form onUpdate={onUpdate} />
                <Suspense fallback={<p>Loading...</p>}>
                    <Todos />
                </Suspense>
            </main>
            <Time />
        </>
    )
}