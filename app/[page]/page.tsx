import { revalidatePath } from 'next/cache';

export default async function Page() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();

    // Set revalidation interval
    revalidatePath('/page', 10);

    return (
        <div>
            <h1>Incremental Static Regeneration Page</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}
