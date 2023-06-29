import React from "react"
import ResponsiveAppBar from './ResponsiveAppBar'
import ResponsiveNavRail from "./ResponsiveNavRail"

export default function MainPanel ({name}) {
  return (
    <div>
      {/* Mobile app bar */}
      <ResponsiveAppBar name={name}></ResponsiveAppBar>
      {/* Desktop navigation rail */}
      <ResponsiveNavRail name={name}></ResponsiveNavRail>
    </div>
  )
}