function Panel({
    Start = '#FFFFFF', 
    End = '#1f2a68',
    height = 'dvh',
    Title,
    Text,
    Graph,
    children
    }){

    return (
        <>
            <div className={`h-${height} bg-linear-to-b p-8 from-[${Start}] to-[${End}]`}>
                <h1 class="font-NotoSans text-8xl font-bold text-black ">{Title}</h1>
                <div class="flex justify-center">
                    {Text}
                    <div>
                        {Graph}
                    </div>
                    {children}
                </div>
            </div>
        </>
    )
}

export default Panel;