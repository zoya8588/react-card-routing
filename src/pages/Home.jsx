import React from 'react'
import Section1 from '../components/section-1/section1'
import users from '../data/users'

const Home = () => {
  return <Section1 users={users} />
}

export default Home
