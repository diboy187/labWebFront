import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const URI = 'http://23.21.20.142:8081/blogs/'

const CompShowBlogs = () => {
    const [blogs, setBlog] = useState([])
    useEffect(() => {
        getBlogs()
    }, [])

    //mostrar todos los blogs

    const getBlogs = async () => {
        const res = await axios.get(URI)
        setBlog(res.data);
    }

    const deleteBlog = async (id) => {
        await axios.delete(`${URI}/${id}`);
        getBlogs();
    }


    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to={"/create"} className='btn btn-primary mt-2 mb-2'><i className="fa-solid fa-plus fa-shake fa-lg"></i> Crear</Link>
                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                                <th>Titulo</th>
                                <th>Contenido</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            { blogs.map((blog) => (
                                <tr key={blog.id}>
                                    <td>{blog.title}</td>
                                    <td>{blog.content}</td>
                                    <td>
                                    <Link to={`/edit/${blog.id}`} className="btn btn-info"><i className="fa-solid fa-pen-to-square fa-shake"></i>  Editar</Link>
                                        <button onClick={ ()=> deleteBlog(blog.id)} className='btn btn-danger'><i className="fa-solid fa-trash fa-shake"></i> Borrar</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )

}

export default CompShowBlogs