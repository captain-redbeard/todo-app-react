import React from 'react';
import Tasks from './components/Tasks';
import TaskForm from './components/TaskForm';
import M from "materialize-css";
import { formatDate } from './utilities/DateUtil';
import uuid from 'uuid';
import "../node_modules/materialize-css/dist/css/materialize.min.css";
import "../node_modules/material-design-icons/iconfont/material-icons.css";
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {
          id: uuid.v4(),
          title: "Example task one",
          description: "Setup github pages",
          owner: "Redbeard",
          due_date: formatDate(new Date())
        },
        {
          id: uuid.v4(),
          title: "Push todo-app",
          description: "Push changes to github",
          owner: "Redbeard",
          due_date: formatDate(new Date())
        },
      ],
      editTask: {
        id: null,
        title: "",
        description: "",
        owner: "",
        due_date: formatDate(new Date())
      }
    };
  }

  componentDidMount() {
    M.Modal.init(document.querySelectorAll('.modal'), null);

    M.Datepicker.init(document.querySelectorAll(".datepicker"), {
      format: "yyyy-mm-dd"
    });

    M.Timepicker.init(document.querySelectorAll(".timepicker"), {
      defaultTime: 'now',
      twelveHour: false
    });
  }

  addTask = (task) => {
    if (this.state.tasks.find(t => t.id === task.id)) {
      this.setState({
        tasks: this.state.tasks.map((t) => {
          if (t.id === task.id) {
            return task;
          }

          return t;
        })
      })
    } else {
      task.id = uuid.v4();
      this.setState({
        tasks: [...this.state.tasks, task]
      });
    }

    M.Modal.getInstance(document.querySelector("#addTaskModal")).close();
  }

  deleteTask = (id) => {
    this.setState({
      tasks: this.state.tasks.filter(t => t.id !== id)
    })
  }

  handleEditChange = (name, value) => {
    this.setState(prevState  => ({
      editTask: {
        ...prevState.editTask,
        [name]: value
      }
    }));
  }

  onEditTaskChange = (task) => {
    let newTask = task;

    if (task === null) {
      newTask = {
        id: null,
        title: "",
        description: "",
        owner: "",
        due_date: formatDate(new Date())
      }
    }

    this.setState({
      editTask: newTask
    });

    if (task !== null) {
      M.Modal.getInstance(document.querySelector("#addTaskModal")).open();
    }
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="mt-5"></div>
          <Tasks tasks={this.state.tasks} editTask={this.state.editTask} deleteTask={this.deleteTask} onEditTaskChange={this.onEditTaskChange}/>
          <TaskForm editTask={this.state.editTask} addTask={this.addTask} handleEditChange={this.handleEditChange} onEditTaskChange={this.onEditTaskChange}/>
        </div>
      </div>
    );
  }
}

export default App;
