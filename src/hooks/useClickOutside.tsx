import { useEffect, useRef } from 'react'

type EventHandler = (event: MouseEvent | TouchEvent) => void

export const useClickOutside = <T extends HTMLElement = HTMLElement>(handler: EventHandler) => {
    const ref = useRef<T>(null)

    useEffect(() => {
        const listener = (event: MouseEvent | TouchEvent) => {
            const el = ref.current
            if (!el || el.contains(event.target as Node)) {
                return
            }
            handler(event)
        }

        document.addEventListener('mousedown', listener)
        document.addEventListener('touchstart', listener)

        return () => {
            document.removeEventListener('mousedown', listener)
            document.removeEventListener('touchstart', listener)
        }
    }, [handler])

    return ref
}
