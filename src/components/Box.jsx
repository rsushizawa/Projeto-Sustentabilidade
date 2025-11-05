function Box({text}){
    return (
        <>
            <div class="w-64 h-100 bg-linear-to-b p-8 m-3 from-[#26467c] from-30% via-[#45a9d1] to-[#FFFFFF] rounded-lg shadow-md flex justify-center">
               {text}
            </div>
        </>
    )
}

export default Box;