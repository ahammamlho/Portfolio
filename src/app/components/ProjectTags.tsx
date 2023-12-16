import React from 'react'

const ProjectTags = ({ name, onClick, isSelected }: any) => {
    const buttonStyles = isSelected ? "text-white border-purple-500" : "text-[#ADB7BE] border-slate-600 hover:border-white";
    return (
        <button onClick={onClick}
            className={`rounded-full border-2 px-6 text-xl ${buttonStyles}`}>{name}</button>
    )
}

export default ProjectTags
