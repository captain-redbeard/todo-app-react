import React from 'react';

class TaskForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearEdit = this.clearEdit.bind(this);
  }

  handleChange(event) {
    this.props.handleEditChange(event.target.name, event.target.value);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.clearEdit();
    this.props.addTask(this.props.editTask);
  }

  clearEdit() {
    this.props.onEditTaskChange(null);
  }

  render() {
    return (
      <div>
        <div className="fixed-action-btn">
          <a
              className="btn-floating btn-large waves-effect waves-light modal-trigger red"
              href="#addTaskModal"
              onClick={this.clearEdit}
          >
            <i className="material-icons">add</i>
          </a>
        </div>

        <div id="addTaskModal" className="modal">
          <div className="modal-content">
            <h4 className="modal-title">{this.props.editTask.id !== null ? 'Edit Task' : 'Add a Task'}</h4>

            <form className="from" onSubmit={this.handleSubmit}>
              <div className="input-field">
                <label htmlFor="title">Title</label>
                <input
                  placeholder="e.g. My Task" 
                  type="text"
                  name="title"
                  value={this.props.editTask.title}
                  onChange={this.handleChange}
                />
                <span className="helper-text" data-error="Title must not be empty"></span>
              </div>

              <div className="input-field">
                <label htmlFor="description">Description</label>
                <textarea
                  placeholder="e.g. Deploy XYZ" 
                  className="materialize-textarea"
                  name="description"
                  value={this.props.editTask.description}
                  onChange={this.handleChange}
                />
                <span className="helper-text" data-error="Description must not be empty"></span>
              </div>

              <div className="input-field">
                <label htmlFor="title">Owner</label>
                <input
                  placeholder="e.g. John Smith"
                  type="text"
                  name="owner"
                  value={this.props.editTask.owner}
                  onChange={this.handleChange}
                />
                <span className="helper-text" data-error="Owner must not be empty"></span>
              </div>

              <div className="input-field">
                <label htmlFor="title">Due date</label>
                <input
                  placeholder="e.g. 2019-11-03 14:30"
                  type="text"
                  name="due_date"
                  value={this.props.editTask.due_date}
                  onChange={this.handleChange}
                />
                <span className="helper-text" data-error="Due date must not be empty"></span>
              </div>

              <div className="text-right">
                <button type="submit" className="waves-effect waves-light btn red">
                  <i className="material-icons left">add</i>
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>
    );
  }
}

export default TaskForm;