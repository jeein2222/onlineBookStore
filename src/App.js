import React from 'react';
import './App.css';
import CRUDBook from './CRUDBook';
import Table from './Table.js';
import {call} from "./service/ApiService";

class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
      items:[],
      searchedItems:[]
    };
  }

  componentDidMount(){ //백엔드 API 콜 부분 구현
    call("/book","GET",null).then((response)=>
      this.setState({items:response.data})
    );
  }

  add = (item) => {
    call("/book/create","POST",item).then((response)=>
      this.setState({items:response.data})
    );
    this.forceUpdate();
  }

  delete = (item) => {
    call("/book","DELETE",item).then((response)=>
    this.setState({items:response.data})
    );
  }

  update = (item) => { 
    console.log(item);
    call("/book","PUT",item).then((response) => {
      this.setState({items:response.data});
      }
    );
  }

  retrieve = (item)=> { //검색 부분
    call("/book/retrieve","POST",item).then((response)=>{
      this.setState({items:response.data},()=>{
        console.log(this.state.items);
      });
  });
  }

  render(){
    const columns=["id","title","author","publisher","userId"]
    return(
      <div className='App'>
        <CRUDBook add={this.add} delete={this.delete} update={this.update} 
        retrieve={this.retrieve}/>
        <Table columns={columns} data={this.state.items}/>
      </div>
    );

  }
}

export default App; //App Component를 다른 Component에서 사용가능