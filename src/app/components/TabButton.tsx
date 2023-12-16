'use client'
import React from 'react'

const TabButton = ({ active, selectTap, children }: any) => {
    const buttonClasses = active ? 'text-white border-b border-purple-500' : 'text-[#ADB7B3]'
    return (
        <button onClick={selectTap}>
            <p className={`mr-4 font-semibold hover:text-white  ${buttonClasses}`}>
                {children}
            </p>
        </button >
    )
}

export default TabButton
