import { Head } from 'minista'
import '@/styles' 
// ПЕРЕВІР ЦЕЙ ШЛЯХ (має вести до теки з твоїм Header.jsx)
import Header from '@/layouts/Header' 
import Content from '@/layouts/Content'
import Footer from '@/layouts/Footer'

export default (props) => {
  const { children, title, url } = props

  return (
    <>
      <Head htmlAttributes={{ lang: 'en' }}>
        <title>Airbnb | {title}</title>
        {/* Підключаємо "оживляючий" скрипт */}
        <script src="/src/main.jsx" type="module" />
      </Head>

      {/* Ми залишаємо Header тут, щоб Ministra відрендерила його статично (для SEO та швидкості).
        React у main.jsx потім "підхопить" цей же блок за id.
      */}
      <div id="header-root">
        <Header url={url} />
      </div>

      <Content>{children}</Content>
      <Footer />
    </>
  )
}