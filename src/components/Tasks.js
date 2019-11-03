import React from 'react';
import TaskItem from './TaskItem';
import PropTypes from 'prop-types';

class Tasks extends React.Component {
  render() {
    return this.props.tasks.map((task) => (
      <TaskItem key={task.id} task={task} editTask={this.props.editTask} deleteTask={this.props.deleteTask} onEditTaskChange={this.props.onEditTaskChange}/>
    ));
  }
}

Tasks.propTypes = {
  tasks: PropTypes.array.isRequired
};

export default Tasks;
