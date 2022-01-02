import { useEffect, useState } from 'react'
import { breakpointMap } from '../theme/base'

type State = {
    [key: string]: boolean
}

type BreakpointCheck = {
    isMobile: boolean
    isTablet: boolean
    isDeskTop: boolean
} & State

type MediaQueries = {
    [key: string]: string
}

const mediaQueries: MediaQueries = (() => {
    let prevMinWidth = 0
    return Object.keys(breakpointMap).reduce((accum, size, index) => {
        if (index === Object.keys(breakpointMap).length - 1) {
            return { ...accum, [size]: `(min-width: ${prevMinWidth}px)` }
        }

        const minWidth = prevMinWidth
        const breakpoint = breakpointMap[size]

        prevMinWidth = breakpoint + 1

        return {
            ...accum,
            [size]: `(min-width: ${minWidth}px) and (max-width: ${breakpoint}px)`,
        }
    }, {})
})()

const getKey = (size: string) =>
    `is${size.charAt(0).toUpperCase()}${size.slice(1)}`

const useMediaBreakpoints = (): BreakpointCheck => {
    const [state, setState] = useState<State>(() => {
        return Object.keys(mediaQueries).reduce((accum, size) => {
            const key = getKey(size)
            const mql = window.matchMedia(mediaQueries[size])
            return { ...accum, [key]: mql.matches }
        }, {})
    })

    useEffect(() => {
        const handlers = Object.keys(mediaQueries).map((size) => {
            const mql = window.matchMedia(mediaQueries[size])
            const handler = (matchMediaList: MediaQueryListEvent) => {
                const key = getKey(size)
                setState((prevState) => {
                    return { ...prevState, [key]: matchMediaList.matches }
                })
            }
            if (mql.addEventListener) {
                mql.addEventListener('change', handler)
            }
            return () => {
                if (mql.removeEventListener) {
                    mql.removeEventListener('change', handler)
                }
            }
        })

        return () => {
            handlers.forEach((unsubscribe) => {
                unsubscribe()
            })
        }
    }, [setState])

    return {
        ...state,
        isMobile: state.isXs || state.isSm,
        isTablet: state.isMd || state.isLg,
        isDeskTop: state.isXl || state.Xxl,
    }
}

export default useMediaBreakpoints
