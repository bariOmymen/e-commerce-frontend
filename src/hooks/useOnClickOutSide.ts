import { RefObject, useEffect } from 'react'

const useOnClickOutSide = (
    ref: RefObject<HTMLElement | null>,
    handler: (event?: MouseEvent | TouchEvent) => void
) => {
    useEffect(() => {
        const listner = (event: MouseEvent | TouchEvent) => {
            if (!ref.current || ref.current.contains(event.target as Node)) {
                return
            }
            handler(event)
        }
        document.addEventListener('mousedown', listner)
        document.addEventListener('touchstart', listner)

        return () => {
            document.addEventListener('mousedown', listner)
            document.addEventListener('touchstart', listner)
        }
    }, [handler, ref])
}

export default useOnClickOutSide
