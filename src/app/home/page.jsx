import ResponsiveAppBar from '../../components/appbar/ResponsiveAppBar'
import Post from '../../components/post/Post'


export default function Home() {
  return (
    <main>
      {/* Mobile app bar */}
      <ResponsiveAppBar name="Home"></ResponsiveAppBar>
      <div id="content-panel" className='panel'>
      <Post/>
      <Post type="News"/>
      <Post/>
      <Post type="Event"/>
      <Post/>
      </div>
    </main>
  )
}
