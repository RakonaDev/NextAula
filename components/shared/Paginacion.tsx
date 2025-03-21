import { useState, useEffect } from 'react'
import Pagination from '@mui/material/Pagination'
import { type paginacionValues } from './Interfaces'

export const Paginacion = ({
  totalPosts,
  cantidadRegistros,
  paginaActual,
  setpaginaActual
}: paginacionValues) => {
  const [numPaginas, setNumPaginas] = useState(0)

  useEffect(() => {
    const calcularNumPaginas = Math.ceil(totalPosts / cantidadRegistros)
    setNumPaginas(calcularNumPaginas)
  }, [totalPosts, cantidadRegistros])

  const handleChange = (event: React.ChangeEvent<unknown>, value: number): void => {
    event.preventDefault()
    setpaginaActual(value)
  }

  return (
    <Pagination
      count={numPaginas}
      page={paginaActual}
      onChange={handleChange}
      className='text-gray-300 shadow-none mx-auto'
      onClick={() => { window.scrollTo(0, 0) }}
    />
  )
}
