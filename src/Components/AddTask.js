import React , { Component } from 'react' ;
import './AddTask.css' ;

class AddTask extends React.Component {

    state = {
        name: '',
        description: '',
        completed: false
    }

    handleChange = (e) => {

        if(e.target.id == 'name'){
            this.setState({
                name: e.target.value,
                completed: false
            });
        }else{
            this.setState({
                description: e.target.value ,
                completed: false
            })
        }

    }

    handleSubmit = (e) => {

        e.preventDefault() ;

        this.props.addTask(this.state) ;

        e.target.children[0].value = '';

        e.target.children[2].value = '';

    }

    
    render(){

        return(

            <div className='AddTask-container'>
                
                <form onSubmit={this.handleSubmit}>

                <input 
                type="text"
                placeholder="Task Name"
                id="name"
                required
                onChange={this.handleChange}
                />

                <br></br>
   
                <textarea 
                placeholder="Task Description"
                id="desc"
                onChange={this.handleChange}    
                />

                <input type="submit" value="Add Task" />
                    
                </form>


                    <select className="selection" onChange={this.props.handleSelect}>
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">UnCompleted</option>
                    </select>
            </div>

        )

    }

}

export default AddTask; 