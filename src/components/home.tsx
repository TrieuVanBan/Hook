import React from 'react'
import { Link, Outlet } from "react-router-dom";
import Uselink from "../components/link";

type Props = {}

const home = (props: Props) => {
  return (
    <div>
        <Outlet />
        <Uselink/>
    </div>
  )
}

export default home