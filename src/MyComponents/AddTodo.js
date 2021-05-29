import React, {useState} from 'react'

export const AddTodo = ({addTodo}) => {
    const [Title, setTitle] = useState("")
    const [Desc, setDesc] = useState("")
    const submit = (e) => {
        e.preventDefault();
        if(!Title || !Desc){
            alert("Fill All Fields");
        }
        else{
            addTodo(Title, Desc);
            setTitle("");
            setDesc("");
        }
    }
    return (
        <div className="container col-md-8 my-3">
            <h3 className="">Add ToDo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Email address</label>
                    <input type="text" className="form-control" value={Title} onChange={(e)=>{setTitle(e.target.value)}} id="title" name="title" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Description</label>
                    <input type="text" className="form-control" value={Desc} onChange={(e)=>{setDesc(e.target.value)}} id="desc" name="desc" />
                </div>
                <button type="submit" className="btn btn-sm btn-primary">Submit</button>
            </form>
        </div>
    )
}
