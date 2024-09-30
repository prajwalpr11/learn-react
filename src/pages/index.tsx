// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'

import Gallerys from './components/gallery'
import Profiles from './qcomps/profile_mistake'
import MyComp from './qcomps/firstcomp'
import Bio from './qcomps/bios'
import TodoList from './qcomps/todos'
import Profile from './components/profile_props'
import Gallery from './qcomps/gallery_props'
import PackingList from './qcomps/props_item'

export default function Home() {
  return (
    <PackingList />
  )
}
