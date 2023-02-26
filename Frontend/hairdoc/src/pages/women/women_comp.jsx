import {useState,useEffect} from "react"
import Loading from "./lodder"
import Error from "./Error"
import Pagination from "./Pagination" 
import style from "../Components/Table.module.css"

function Users(){
    const [apidata,setApidata] = useState([])
    const [loadding, setLoadding] = useState(true)
    const [pageNo, setpageNo] = useState(1)
    const [totalpage,setTotalPage] = useState(0)


    async function getdata(){
       
        try{
            setLoadding(true)
            const users = await fetch(`https://reqres.in/api/users?page=${pageNo}&per_page=4`)
            const res = await users.json()
            setLoadding(false)
            setTotalPage(res.total_pages)
            setApidata(res.data)
            
        }
        catch(err){
            return (<Error/>)
        }
        
    }

    useEffect(()=>{
        getdata(pageNo)
    },[pageNo])

    return loadding ? <Loading/>: (
        <div>
            <div className={style.btndiv}>
                    {
                        <Pagination
                            page = {pageNo}
                            onChange ={(page)=>setpageNo(page)}
                            totalpage = {totalpage}
                        />
                    }
            </div>
            <table className={style.table}>
                <thead >
                    <tr className={style.head}>
                        <th>User ID</th>
                        <th>Full Name</th>
                        <th>Avatar</th>
                        <th>Email</th>
                    </tr>
                </thead>

                <tbody>
                    {
                    apidata.map((e)=>{
                        return(
                            <tr className="tbody">
                                <td>{e.id}</td>
                                <td>{e.first_name+' '+e.last_name}</td>
                                <td><img src={e.avatar}></img></td>
                                <td>{e.email}</td>
                            </tr>
                        )
                    })
                    }
                </tbody>
            </table>
        </div>

        
    )
    
}

export default Users;