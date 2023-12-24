'use client';
import React from 'react';
import { Variants, motion } from 'framer-motion';
const variants: Variants = {
  default: { width: 0 },
  active: { width: 'calc(100% - 0.74rem' },
};
const TabButton = ({ active, selectTap, children }: any) => {
  const buttonClasses = active ? 'text-white' : 'text-[#ADB7B3]';
  return (
    <button onClick={selectTap}>
      <p className={`mr-4 font-semibold hover:text-white  ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? 'active' : 'default'}
        variants={variants}
        className="h-1 bg-primary-500 rounded-full"
      ></motion.div>
    </button>
  );
};

export default TabButton;
