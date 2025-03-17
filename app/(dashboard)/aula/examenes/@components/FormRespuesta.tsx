'use client'
import { config } from '@/config/config';
import axios from 'axios';
import React from 'react'
import { toast } from 'sonner';

export default function FormRespuesta({ id }: { id: string }) {
  const [archivo, setArchivo] = React.useState<File | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setArchivo(event.target.files?.[0] ?? null);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData();
    if (archivo) {
      formData.append('respuesta', archivo);
    }
    else {
      toast.error('Debes mandar un archivo')
      return
    }
    formData.append('examenId', id)

    const token = localStorage.getItem('token')
    const response = await axios.postForm(`${config.apiUrl}/examenes/enviar`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`
      }
    })
    if (response.status === 200) {
      toast.success(response.data.message)
      window.location.reload()
    } else {
      toast.error(response.data.message)
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className='space-y-4 flex flex-col items-center'>
        <div className='w-full h-auto space-y-2'>
          <label htmlFor="file">Archivo de Respuesta: </label>
          <input type="file" onChange={handleChange} title='archivo' id="file" name="file" />
        </div>
        <button type="submit" className='bg-primary-main w-fit text-white-main hover:bg-primary-900 rounded-md py-2 px-4 text-sm font-medium'>
          Enviar
        </button>
      </form>
    </div>
  )
}
