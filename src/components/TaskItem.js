import React from 'react';
import PropTypes from 'prop-types';
import { formatDate } from '../utilities/DateUtil';

class TaskItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleEditTaskChange = this.handleEditTaskChange.bind(this);
  }

  handleEditTaskChange() {
    this.props.onEditTaskChange(this.props.task);
  }

  render() {
    return (
      <div className="col s12">
        <div className="card">
          <div className="card-content">
            <a href="#deleteTask" className="delete" onClick={this.props.deleteTask.bind(this, this.props.task.id)}>
              <i className="material-icons">close</i>
            </a>

            <a href="#editTask" className="card-title" onClick={this.handleEditTaskChange}>{ this.props.task.title }</a>
            <p className="task-content">{ this.props.task.description }</p>
            <div className="row card-info">
              <p className="timestamp col s6 text-left">{ this.props.task.owner }</p>
              <p className="timestamp col s6 text-right">{ formatDate(this.props.task.due_date) }</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

TaskItem.propTypes = {
  task: PropTypes.object.isRequired
};

export default TaskItem;
