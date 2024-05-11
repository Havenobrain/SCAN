import { useState } from "react"

export const useSlider = (visibleCount: number, length: number) => {
    const initIndexes = Array.from({ length: visibleCount }).map((x, i) => i)
    const [visibleIndexes, setVisibleIndexes] = useState(initIndexes)

    function goRight() {
        
        const copy = visibleIndexes.map((x) => x)

        copy.shift()
        copy.push(last + 1)

        setVisibleIndexes(copy)
    }

    const last = visibleIndexes[visibleIndexes.length - 1]
    const first = visibleIndexes[0]

    function goLeft() {
        
        const copy = visibleIndexes.map((x) => x)

        copy.pop()
        copy.unshift(first - 1)

        setVisibleIndexes(copy)
    }

    return { visibleIndexes, goLeft: first === 0 ? undefined : goLeft, goRight: last === length - 1 ? undefined : goRight }
}
