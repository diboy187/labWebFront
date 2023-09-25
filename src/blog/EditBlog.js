import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


const URI = 'http://18.232.147.37:8081/blogs/'


const CompEditBlog = () => {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()


    //procedimiento para actualizar

    const update = async (e) => {
        e.preventDefault()
        await axios.put(URI + id, {

            title: title,
            content: content
        })
        navigate('/')

    }

    useEffect(()=>{
        getBlogById()
    },[])

    const getBlogById = async ()=>{
       const res =  await axios.get(URI+id)
        setTitle(res.data.title)
        setContent(res.data.content)

    }


    return (
        <div>
        <h3>Edita POST</h3>
        <form onSubmit={update}>
            <div className='mb-3'>
                <label className='form-label'>Titulo</label>
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
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
            <button type='submit' className='btn btn-primary'><i className="fa-solid fa-pen-to-square fa-shake fa-lg"></i></button>
        </form>
    </div>
    )

}

export default CompEditBlog