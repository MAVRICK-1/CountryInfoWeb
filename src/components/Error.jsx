import { useRouteError } from "react-router-dom"



export default function Error() {
    const error=useRouteError()
    console.log(error);
    return (
    <>
    
    <div className="Error" >
        
    </div>
    
    </>
    )
}
