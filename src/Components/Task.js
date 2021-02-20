import React, { Component , Fragment} from 'react' ;
import './Task.css' ;


class Task extends React.Component {

    render(){

        let {tasks} = this.props ;
        console.log(tasks) ;
            // console.log(this.props.completedtasks)

        let mTasks = tasks.length !=0 ? tasks.map(t => {
            if(t.completed == false ){
                return(
                    <div className="task-container" key={Math.random()}>
                        <h3 className="task-name">{t.name}</h3>
                        <p className="task-desc">{t.description}</p>
    
                        <div className="buttons">    
                            
                            <button 
                            role="button" 
                            className="complete"
                            onClick={this.props.handleCompleted}>
                                Completed
                            </button>
                            
                            
                            <button 
                            onClick={this.props.deleteTask} 
                            role="button" 
                            className="delete">
                                Delete
                            </button> 
    
                        </div>
                    </div>
                )
            }else{
                return(
                    <div className="task-container completed" key={Math.random()}>
                        <h3 className="task-name">{t.name}</h3>
                        <p className="task-desc">{t.description}</p>
    
                        <div className="buttons">    
                            
                            <button 
                            role="button" 
                            className="complete"
                            onClick={this.props.handleCompleted}>
                                UnCompleted
                            </button>
                            
                           
                            <button 
                            onClick={this.props.deleteTask} 
                            role="button" 
                            className="delete  scale-0">
                                Delete
                            </button> 
    
                        </div>
                    </div>
                )
            }
            
        }) : (
            <div className='add'>ADD YOUR TASK NOW</div>
        )
        
        return(
            <div className="all-tasks">
                {mTasks}
            </div>
        )

    }

}

export default Task ;
