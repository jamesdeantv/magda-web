// @flow
import React, { Component } from 'react';
import ReactDocumentTitle from "react-document-title";
import queryString from 'query-string';
import type {Project } from '../types';
import { connect } from "react-redux";
import {config} from '../config.js';
import { bindActionCreators } from "redux";
import { validateFields, resetProjectFields } from '../actions/projectActions';
import { fetchDatasetFromRegistry } from "../actions/recordActions";
import Notification from '../UI/Notification';
import { Link } from 'react-router';
import Immutable from 'immutable';
const uuidV1 = require('uuid/v1');
import './CreateProject.css';


class CreateProject extends Component {
    state: Project
    props: {
      location: Location
    }
    constructor(props: props) {
      super(props);

      const project = Immutable.Map({
        description: "",
        members: [],
        datasets: [],
        status: "open"
      })
      this.state = {project: Immutable.Map({
        id: uuidV1(),
        name: '',
        aspects: Immutable.Map({
          project: project
        })
      })}
    }

    componentWillMount(){
      const datasetId: string = queryString.parse(this.props.location.search).dataset;
      if(datasetId){
        this.props.fetchDataset(datasetId);
        this.setState({
          project: this.state.project.setIn(["aspects", 'project', 'datasets'], [datasetId])
        })
      }
    }
    componentWillReceiveProps(nextProps){
      const datasetId: string = queryString.parse(nextProps.location.search).dataset;
      const prevDatasetId: string = queryString.parse(this.props.location.search).dataset;
      if(datasetId && prevDatasetId !== datasetId){
        this.setState({
          project: this.state.project.setIn(["aspects", 'project', 'datasets'], [datasetId])
        })
        nextProps.fetchDataset(datasetId);
      }
    }


    onDismissError(){
      // reset form on error
      this.props.resetFields();

    }

    handleChange(event: MouseEvent, id: string){
      const value = event.target.value;

      if(id === 'name'){
        this.setState({
          project: this.state.project.set('name', value)
        })
      }
      if(id === 'description'){
        this.setState({
          project: this.state.project.setIn(['aspects', 'project', 'description'], value)
        })
      }
    }

    datasetActive(){
      const datasets = this.state.project.getIn(["aspects", 'project', 'datasets']);
      return datasets.indexOf(this.props.dataset.identifier) !== -1;
    }

    toggleDataset(){
      const datasets = this.datasetActive() ? []: [this.props.dataset.identifier];
      this.setState({
        project: this.state.project.setIn(["aspects", 'project', 'datasets'], datasets)
      })
    }

    handleSubmit(e){
      e.preventDefault();
      // dispatch validating and submission
      this.props.validateFields(this.state.project);
    }
    render(){
      return <ReactDocumentTitle title={"New project | " + config.appName}>
              <div className="create-project container">
              <div className="row">
                {!this.props.isFetching && this.props.error &&
                   <Notification content={this.props.error}
                                 type="error"
                                 onDismiss={()=>this.onDismissError()}/>
                }
                <div className="col-sm-8">
                  <h1>Create project</h1>
                  <form>
                    <label className="input-group">
                      Project title * :
                      {this.props.fieldErrors.name && <div className="field-error">{this.props.fieldErrors.name}</div>}
                      <input type="text" name="name" className={`form-control ${this.props.fieldErrors.name ? "form-error" : ""}`} value={this.state.name} onChange={(e: MouseEvent)=>this.handleChange(e, "name")}/>
                    </label>
                    <label className="input-group">
                      Project description * :
                      {this.props.fieldErrors.description && <div className="field-error">{this.props.fieldErrors.description}</div>}
                      <input type="text" name="description" className={`form-control ${this.props.fieldErrors.description ? "form-error" : ""}`} value={this.state.description} onChange={(e: MouseEvent)=>this.handleChange(e, "description")}/>
                    </label>

                    <input type="submit" value="Submit" className='btn btn-primary'  onClick={(e: MouseEvent)=>this.handleSubmit(e)}/>
                  </form>
               </div>
               <div className="col-sm-4">
                  <h2>Datasets</h2>
                  <div><h3>{this.props.dataset && <Link className={`${this.datasetActive() ? "dataset-active" : "dataset-non-active"}`} to={`/dataset/${this.props.dataset.identifier}`}>{this.props.dataset.title}</Link>}</h3><button onClick={()=>this.toggleDataset()} className="btn btn-primary">{this.datasetActive() ? "Remove" : "Add"}</button></div>
               </div>
             </div>
             </div>
             </ReactDocumentTitle>
    }
}

const mapDispatchToProps = (dispatch: Dispatch<*>)=>{
  return bindActionCreators({
    validateFields: validateFields,
    resetFields: resetProjectFields,
    fetchDataset: fetchDatasetFromRegistry
  }, dispatch);
}

function mapStateToProps(state, ownProps) {
  const isFetching= state.project.isFetching;
  const error = state.project.error;
  const fieldErrors = state.project.fieldErrors;

  const record = state.record;
  const dataset =record.dataset;

  return {
    isFetching, error, fieldErrors, dataset
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);
