import React from 'react'
import { Link } from "react-router-dom";

type Props = {}

const link = (props: Props) => {
  return (
    <div style={{display:"flex"}}>
        <Link style={{margin:"100px 20px"}} to={"/usestate"}>useState</Link>
        <Link style={{margin:"100px 20px"}} to={"/useeffect"}>useEffect</Link>
        <Link style={{margin:"100px 20px"}} to={"/useref"}>useRef</Link>
        <Link style={{margin:"100px 20px"}} to={"/usecallback"}>useCallback</Link>
        <Link style={{margin:"100px 20px"}} to={"/usememo"}>useMemo</Link>
    </div>
  )
}

export default link