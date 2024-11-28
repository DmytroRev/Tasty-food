import { useCallback } from "react"

const useScrollTo = () => {
    const scrollToElement = useCallback((targetId) => {
        const element = document.getElementById(targetId)
        if(element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        }
    }, [])
    return scrollToElement
}

export default useScrollTo