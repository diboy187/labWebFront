import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


const URI = 'http://23.21.20.142:8081/blogs/'


const CompEditBlog = () => {

    const [tittle, setTittle] = useState('')
    const [content, setContent] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()


    //procedimiento para actualizar

    const update = async (e) => {
        e.preventDefault()
        await axios.put(URI + id, {

            tittle: tittle,
            content: content
        })
        navigate('/')

    }

    useEffect(()=>{
        getBlogById()
    },[])

    const getBlogById = async ()=>{
       const res =  await axios.get(URI+id)
        setTittle(res.data.tittle)
        setContent(res.data.content)

    }


    return (
        <div>
        <h3>Edita POST</h3>
        <form onSubmit={update}>
            <div className='mb-3'>
                <label className='form-label'>Titulo</label>
                <input
                    value={tittle}
                    onChange={(e) => setTittle(e.target.value)}
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