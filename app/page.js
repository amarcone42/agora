import Image from 'next/image'


function Header({name}) {
  return (
    <div id="header" className='panel'>
      <h1>{name}</h1>
    </div>
  )
}

function Card() {
  return (
    <div className='card'>
          <div className='info'>
            <div className='profile-icon'>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
              </svg>
            </div>
            <div className='user-info'>
              <h2>Francesco Bianchi</h2>
              <p>CatARTico</p>
            </div>
            <div className='post-type'>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-image" viewBox="0 0 16 16">
                <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"/>
              </svg>
            </div>
          </div>
          <div className='content'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique eleifend quam a efficitur. Cras aliquet magna vitae lectus ultricies laoreet. Nulla gravida turpis vitae accumsan sodales.</p>
          </div>
          <div className='interactions'>

          </div>
        </div>
  )
}

function NavSection() {
  return (
    <a href='/'>
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16">
        <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z"/>
        <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z"/>
      </svg>
      <h4>Home</h4>
    </a>
  )
}

export default function Home() {
  return (
    <main>
      <Header name="Home"/>
      <div id="content-panel" className='panel'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
      <nav id="nav-panel" className='panel'>
        <NavSection/>
        <NavSection/>
        <NavSection/>
        <NavSection/>
      </nav>
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
