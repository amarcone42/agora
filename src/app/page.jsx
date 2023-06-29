import Post from '../components/post/Post'
import SimpleAppBar from '../components/simpleappbar/SimpleAppBar'


export default function Home() {
  return (
    <main>
      {/* Simplified version of the app bar used in the desktop view */}
      <SimpleAppBar name="Home"/>
      {/* Homepage main content */}
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
