import Post from '../components/post/Post'
import SimpleAppBar from '../components/simpleappbar/SimpleAppBar'


export default function Home() {
  return (
    <main>
      <SimpleAppBar name="Home"></SimpleAppBar>
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
