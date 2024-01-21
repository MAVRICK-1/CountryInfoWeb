import { useEffect,useState } from "react";


export default function useWindowSize() {
    const [windows,setWindows]=useState({width:window.innerWidth,height:window.innerHeight})
    useEffect(()=>{
        window.addEventListener('resize',()=>{
            setWindows({
                width:window.innerWidth,
                height:window.innerHeight
            });
        })
    })
    
    return (
        windows
    )
}
