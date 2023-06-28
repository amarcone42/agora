import React from "react"
import ResponsiveAppBar from './ResponsiveAppBar'
import ResponsiveNavRail from "./ResponsiveNavRail"

const MainPanel = ({name}) => {
  return (
    <div>
      <ResponsiveAppBar name={name}></ResponsiveAppBar>
      <ResponsiveNavRail name={name}></ResponsiveNavRail>
    </div>
  )
}

export default MainPanel