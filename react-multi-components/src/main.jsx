
import { createRoot } from 'react-dom/client'
import './index.css'
import { Fragment } from 'react'
import Header from '/src/Header'
import MainContent from './MainContent'
import Footer from './Footer'

const root = createRoot(document.getElementById('root'))


function Page() 
{
  return (
    <Fragment>
      <Header />
      <MainContent />
      <Footer />
    </Fragment>
  )
}

root.render(
  <Page />
)
