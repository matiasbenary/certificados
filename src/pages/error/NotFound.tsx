import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="grid h-screen place-content-center gap-5 bg-white px-4 text-center">
      <h1 className="uppercase tracking-widest text-gray-500">
        404 | Página no encontrada
      </h1>
      <Link to="/" className="rounded bg-primary p-2 text-center text-white">
        Volver a la página principal
      </Link>
    </div>
  )
}
export default NotFound
