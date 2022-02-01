import React from 'react'

export default function Alert({children}) {
    return (
        <div className="text-center my-4 bg-red-600 text-white font-bold p-3 uppercase">
        {children}
      </div>
    )
}