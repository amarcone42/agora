import ResponsiveAppBar from '../../components/appbar/ResponsiveAppBar'

export default function FirstChatPage() {
  return (
    <main>
      {/* Mobile app bar */}
      <ResponsiveAppBar name="Chat"></ResponsiveAppBar>
      <div id="content-panel" className='panel'>
        <h1>Hello, chat.</h1>
      </div>
    </main>
  )
}
  