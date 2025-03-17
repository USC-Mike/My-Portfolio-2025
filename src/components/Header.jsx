import React from "react";

const Header = () => {
    return (
      <div className='text-white p-6'>
        <div 
          className='flex flex-col items-center justify-center gap-4 h-80 rounded-xl border border-zinc-700 p-2 md:p-4'
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1617042375876-a13e36732a04?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)', backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <h1 className='text-[1.7rem] md:text-5xl font-bold font-syne'>Kurt Mike Pino</h1>
            <p className='text-xl md:text-2xl font-poppins text-white-400'>Frontend Developer & UI Designer</p>
        </div>
      </div>
    );
};

export default Header;
