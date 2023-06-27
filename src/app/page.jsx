import Image from 'next/image'
import Post from '../components/post/Post'


export default function Home() {
  return (
    <main>
      <div id="content-panel" className='panel'>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
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
