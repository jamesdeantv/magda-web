import fetch from 'isomorphic-fetch'
import defined from '../helpers/defined'

export const REQUEST_RESULTS = 'REQUEST_RESULTS'
export const RECEIVE_RESULTS = 'RECEIVE_RESULTS'
export const ADD_PUBLISHER = 'ADD_PUBLISHER'
export const REMOVE_PUBLISHER = 'REMOVE_PUBLISHER'
export const RESET_PUBLISHER = 'RESET_PUBLISHER'

export const ADD_REGION = 'ADD_REGION'
export const RESET_REGION = 'RESET_REGION'

export const SET_DATE_FROM = 'SET_DATE_FROM'
export const SET_DATE_TO = 'SET_DATE_TO'

export const ADD_FORMAT = 'ADD_FORMAT'
export const REMOVE_FORMAT = 'REMOVE_FORMAT'
export const RESET_FORMAT = 'RESET_FORMAT'


export function requestResults(query){
  return {
    type: REQUEST_RESULTS,
    query
  }
}

export function receiveResults(query, json){
  return {
    type: RECEIVE_RESULTS,
    query,
    json: json,
  }
}

export function fetchSearchResults(query) {
  if(!defined(query)) query = '';
  console.log(`http://magda-search-api.terria.io/datasets/search?query=${query}`);
  return (dispatch)=>{
    dispatch(requestResults(query))
    return fetch(`http://magda-search-api.terria.io/datasets/search?query=${query}`)
    .then(response => response.json())
    .then(json =>
      dispatch(receiveResults(query, json))
    )
  }
}

export function addPublisher(publisher){
  return {
    type: ADD_PUBLISHER,
    item: publisher
  }
}

export function removePublisher(publisher){
  return {
    type: REMOVE_PUBLISHER,
    item: publisher
  }
}

export function resetPublisher(){
  return {
    type: RESET_PUBLISHER,
  }
}

export function addFormat(format){
  return {
    type: ADD_FORMAT,
    item: format
  }
}

export function removeFormat(format){
  return {
    type: REMOVE_FORMAT,
    item: format
  }
}

export function resetFormat(){
  return {
    type: RESET_FORMAT,
  }
}


export function addRegion(region){
  return {
    type: ADD_REGION,
    item: region
  }
}

export function resetRegion(){
  return {
    type: RESET_REGION,
  }
}


export function setDateFrom(date){
  return {
    type: SET_DATE_FROM,
    item: date
  }
}

export function setDateTo(date){
  return {
    type: SET_DATE_TO,
    item: date
  }
}