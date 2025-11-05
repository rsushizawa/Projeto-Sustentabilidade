function Panel({
    Start = '#FFFFFF', 
    End = '#1f2a68',
    height = 'dvh',
    Title,
    Text,
    Graph,
    children
    }){

    // Corrigido: `bg-linear-to-b` para `bg-gradient-to-b` (padrão do Tailwind)
    // Corrigido: `h-${height}` para `h-[${height}]` para aceitar valores arbitrários como '20vh'
    return (
        <>
            <div className={`h-[${height}] bg-gradient-to-b p-8 from-[${Start}] to-[${End}]`}>
                <h1 class="font-Title text-8xl font-bold text-black text-left mb-8">{Title}</h1>
                <div class="flex justify-center items-start gap-8">
                    <div className="text-left max-w-2xl">{Text}</div>
                    <div>
                        {Graph}
                    </div>
                </div>
                <div class="mt-8">
                    {children}
                </div>
            </div>
        </>
    )
}

export default Panel;