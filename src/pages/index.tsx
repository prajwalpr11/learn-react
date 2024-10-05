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
import Gallery1 from './qcomps/gallery_props'
import PackingList from './qcomps/props_item'
import Gallery from './qcomps/state'
import PersonData from './components/stateObj'
import Form from './components/updObjects'
import FeedbackForm from './qcomps/thankYouCrash'
import Counter from './components/queueUpdates'
import RequestTracker from './qcomps/shoppingCart'
import Scoreboard from './qcomps/updObjectsForm'
import List from './qcomps/list_keys_id'
import BucketList from './qcomps/arrObj'
import RecipeList from './qcomps/recipes'

export default function Home() {
  return (
    <RecipeList />
  )
}
