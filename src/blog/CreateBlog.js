import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const URI = 'http://18.232.147.37:8081/blogs/'


const CompCreateBlog = () => {

    const [title, settitle] = useState('')
    const [content, setContent] = useState('')
    const navigate = useNavigate()

    //procedimiento para crear
    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, { title: title, content: content })
        navigate('/')
    }

    return (
        <div>
            <h3>Crear POST</h3>
            <form onSubmit={store}>
                <div className='mb-3'>
                    <label className='form-label'>Titulo</label>
                    <input
                        value={title}
                        onChange={(e) => settitle(e.target.value)}
                        type='text'
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Contenido</label>
                    <input
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        type='text'
                        className='form-control'
                    />
                </div>
                <button type='submit' className='btn btn-primary'><i className="fa-solid fa-plus fa-shake fa-lg"></i></button>
            </form>
        </div>
    )
}

export default CompCreateBlog