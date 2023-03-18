import React, {useRef} from 'react'

type Props = {}

const useReff = (props: Props) => {

  const ref = useRef(null)
  const handleClick = () => {
    ref.current.focus()
  }

  return (
    <>
      <div>useRef</div>
      <input type="text" ref={ref}/>
      <button onClick={handleClick}>Click</button>
    </>
  )
}

export default useReff