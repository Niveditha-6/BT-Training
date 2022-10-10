import { useEffect,useState } from "react"

const useWindowWidth = ()=>{
    
     const [smallScreen, setSmallScreen] = useState<boolean>(false)

      useEffect(()=>{
         checkScreenSize()
         window.addEventListener('resize',checkScreenSize)
      },[])
      
     const checkScreenSize = ()=>{
          setSmallScreen(window.innerWidth < 600)
     }

     return smallScreen

}


export default useWindowWidth