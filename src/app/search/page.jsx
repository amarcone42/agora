import ResponsiveAppBar from '../../components/appbar/ResponsiveAppBar'

export default function Search() {
  return (
    <main>
      {/* Mobile app bar */}
      <ResponsiveAppBar name="Cerca"></ResponsiveAppBar>
      <div id="content-panel" className='panel'>
        <h1>Hello, friend.</h1>
      </div>
    </main>
  )
}
  