import React from 'react'
import "./plastic.scss"
import DepartmentHeader from '../DepartmentHeader/DepartmentHeader'
import { plasticDepartmentHeader, plasticDepartmentHeaderContent, plasticFacilityHeader, plasticFacilityHeaderContent, plasticOdpBookingContent, plasticOdpBookingHeader } from '../../constants/serviceDetailsContent'
import DepartmentFacility from '../DepartmentFacility/DepartmentFacility'
import OdpBooking from '../OdpBooking/OdpBooking'
const Plastic = () => {
  return (
    <>
      <div className="plasticWrpper">
         <DepartmentHeader
          title={plasticDepartmentHeader}
          content={plasticDepartmentHeaderContent}
        />
          <DepartmentFacility
          title={plasticFacilityHeader}
          content={plasticFacilityHeaderContent}
        />
         <OdpBooking
          title={plasticOdpBookingHeader}
          content={plasticOdpBookingContent}
        />
      </div>
    </>
  )
}

export default Plastic
