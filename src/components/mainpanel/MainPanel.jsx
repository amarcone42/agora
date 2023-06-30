import React from "react"
import ResponsiveNavRail from "./ResponsiveNavRail"

export default function MainPanel ({name}) {
  return (
    <div>
      {/* Desktop navigation rail */}
      <ResponsiveNavRail name={name}></ResponsiveNavRail>
    </div>
  )
}