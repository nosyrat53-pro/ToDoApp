import React , {Component} from 'react' ;
import './App.css';

import AddTask from './Components/AddTask' ;
import Task from './Components/Task' ;
import Footer from './Components/Footer' ;


class App extends React.Component {

  state = {
    tasks: JSON.parse(localStorage.getItem('task'))
    
  }

  deleteTask = (e) => {

    let tasks = this.state.tasks ;
    let newtasks = [] ;

     tasks.forEach(function(ele){

      if(ele.name !=  e.target.parentElement.parentElement.firstElementChild.textContent)

        newtasks.push(ele) ;
      

    });

    e.target.parentElement.parentElement.classList.add('delete-task')

    setTimeout(() => {
      this.setState({
        tasks: newtasks 
      });
    }, 400);


  }

  addTask = (task) => {

    let newtasks = this.state.tasks ;
    newtasks.push(task) ;
      
    this.setState({
      tasks: newtasks
    })

  }

  handleCompleted = (e) => {

    if(e.target.textContent == 'Completed'){

      let name = e.target.parentElement.parentElement.firstElementChild.textContent ;
        
      let newtasks = this.state.tasks ;

      let mytask = newtasks.map(task => task.name == name ) ;

      let index ;
      
      mytask.forEach( function(element , i ) {
        if(element)
          index = i 
      });

      newtasks[index].completed = true ;
       
            this.setState({
              tasks: newtasks 
            });
      

    }else{

      let name = e.target.parentElement.parentElement.firstElementChild.textContent ;
        
      let newtasks = this.state.tasks ;

      let mytask = newtasks.map(task => task.name == name ) ;

      let index ;
      
      mytask.forEach( function(element , i ) {
        if(element)
          index = i 
      });

      newtasks[index].completed = false ;
       
      // this.state.tasks = newtasks ;
        this.setState({
          tasks: newtasks
        })
      // console.log(this.state.tasks);

      // escaping the effects from my task component
        e.target.parentElement.parentElement.classList.remove('completed') ;
        e.target.parentElement.parentElement.style.background = '#1ac69c' ;
        e.target.parentElement.children[1].style.transform = 'scale(1)' ;
        e.target.textContent = 'Completed';
        
    }

}
  
handleSelect = (e) => {

  let alltasks = document.querySelector('.all-tasks') ;
      
  // if the first element was the h1 then remove it
  if(alltasks.firstElementChild.tagName == 'H1' && alltasks.length > 1){

    alltasks.removeChild(alltasks.firstElementChild);

  }

  let noItemsSentence = document.createElement('h1');
  noItemsSentence.textContent = "No Items To Show" ;

  let completed = [] ;
  let uncompleted = [] ;

  // fill the completed elements array
  for(let i = 0 ; i < alltasks.children.length ; i++){

      if(!alltasks.children[i].classList.contains('completed') ){

        uncompleted.push(alltasks.children[i])
      }

    } 

    // fill the uncompleted elements array
    for(let i = 0 ; i < alltasks.children.length ; i++){

        if(alltasks.children[i].classList.contains('completed') ){

          completed.push(alltasks.children[i])
        }

    } 


    // if the user choose the completed option  && alltasks.children[0].tagName != 'H1'
  if(e.target.value == 'completed'){

    
    // if the first element was the h1 then remove it
    if(alltasks.firstElementChild.tagName == 'H1'){

      alltasks.removeChild(alltasks.firstElementChild);
  
    }

    // put the display property of all task to block
    for(let i = 0 ; i < alltasks.children.length ; i++){

      alltasks.children[i].style.display = 'block' ;

      }

      // if there is no completed task
      if(completed.length == 0 && !alltasks.firstElementChild.classList.contains('add')){
        
        for(let i = 0 ; i < uncompleted.length ; i++){
          uncompleted[i].style.display = 'none' ;
        }

        alltasks.prepend(noItemsSentence) ;
        console.log('completed')
        // else if there is uncomplted tasks
      }else{

        for(let i = 0 ; i < uncompleted.length ; i++){

          uncompleted[i].style.display = 'none' ;
          
        }

        if(uncompleted.length > 0){
          if(uncompleted[0].classList.contains('add')){
            uncompleted[0].style.display = 'block'
          }
        }

      }

//////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////

  }else if(e.target.value == 'uncompleted'){

    // if the first element was the h1 then remove it
    if(alltasks.firstElementChild.tagName == 'H1'){

      alltasks.removeChild(alltasks.firstElementChild);
  
    }

    // put the display property of all task to block
    for(let i = 0 ; i < alltasks.children.length ; i++){

      alltasks.children[i].style.display = 'block' ;

    }

      // if there is no uncompleted task
      if(uncompleted.length == 0 ){

        for(let i = 0 ; i < completed.length ; i++){
          completed[i].style.display = 'none' ;
        }

        alltasks.prepend(noItemsSentence) ;
        console.log('uncompleted')
        // else if there is uncomplted tasks
      }else{

        for(let i = 0 ; i < completed.length ; i++){

          completed[i].style.display = 'none' ;
        }
      }



  }else{

    // if the first element was the h1 then remove it
    if(alltasks.firstElementChild.tagName == 'H1'){

      alltasks.removeChild(alltasks.firstElementChild);
  
    }

    // if the user click on the All option then i will display all tasks [completed and uncomplted]
    for(let i = 0 ; i < alltasks.children.length ; i++){

      alltasks.children[i].style.display = 'block' ;

      } 
  }


}

  render(){
    return(

      <div className='App'>
        <h1>ToDo App</h1>

        <AddTask addTask={this.addTask} handleSelect={this.handleSelect}/>

        <Task tasks={this.state.tasks} deleteTask={this.deleteTask} handleCompleted={this.handleCompleted}/>


        <Footer />

      </div>

    )
  }

  componentDidUpdate(){

    localStorage.setItem('task' , JSON.stringify(this.state.tasks))
    
  }
}

export default App;
