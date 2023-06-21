import Image from 'next/image'
import Card from '../components/card/Card'


export default function Home() {
  return (
    <main>
      <div id="content-panel" className='panel'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </main>
  )
}

function Explore() {
  return (
    <main>
      <Header name="Esplora"/>
      <div id="content-panel" className='panel'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </main>
  )
}
