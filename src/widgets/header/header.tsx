import React, { FC } from 'react'
import { ChangeThemeButton } from '@/features/change-theme'
import Link from 'next/link'

export const Header: FC = () => {
  return (
    <header className='sticky top-0 z-20 min-w-[1440px] flex items-center h-[60px] bg-background-primary'>
      <div className='container flex items-center justify-end w-full gap-5'>
        <Link href={'/'}>Home</Link>
        <Link href={'/characters'}>Characters</Link>
        <Link href={'/locations'}>Locations</Link>
        <ChangeThemeButton />
      </div>
    </header>
  )
}
