import React from 'react'
import { Outlet } from 'react-router-dom'
import { ColorConstants } from '../../ColorConstants'

function ClaimLayout() {
  return (
    <div
      className="min-h-screen text-white font-sans"
      style={{ background: ColorConstants.background }}>
      <Outlet />
    </div>
  );
}

export default ClaimLayout