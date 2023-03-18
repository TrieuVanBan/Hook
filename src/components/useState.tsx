import { useState } from "react";

type Props = {}

const useStatee = (props: Props) => {
    const [count, setCount] = useState(0);
    const [value, setValue] = useState("")
    const [prodcuts, setProducts] = useState([])

    const handleClick = () => {
        document.title = `Click thứ ${count}`
        setCount(count +1)
    }

    return (
        <>
            <div>useState</div>
            <p>Click lần thứ: {count}</p>
            {/* <input type="text" value={value} onChange={(e) => setValue(e.target.value)}/> */}
            <button onClick={handleClick}>Click</button>
        </>
  )
}

export default useStatee