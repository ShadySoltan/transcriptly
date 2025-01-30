import React from 'react'

export default function Header() {
  return (
    <header className='flex items-center justify-between gap-4 p-4'>
        <h1 className='font-medium'>Tran<span className='text-blue-400 bold'>scriptly</span></h1>
        <button className='flex items=center gap-2 test-sm specialBtn px-3 py-2 rounded-lg text-blue-400'>
        <p>New</p>
        <i className='fa-solid fa-plus'></i>
        </button>
  </header>
  )
}
