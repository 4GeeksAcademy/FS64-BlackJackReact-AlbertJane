export const Cards = ({number, suit}) => {

    
    return (
        <>
            <div className=" flex gap-2 "  >
                <div className="bg-white py-5 px-4 ">
                    <span>{number}</span>
                    <span>{suit}</span>
                </div>
                
            </div>
        </>
    )
}