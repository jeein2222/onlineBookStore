class App extends React.Component {//부모
    constructor(props){
      super(props);
      this.state={items:[], searchedItems:[],};
    }
    retrieve=(item)=> { //백엔드에서 searchedItems 배열 받음.
      call("/book/retrieve","POST",item).then((response)=>{
          this.setState({searchedItems:response.data},()=>{
            console.log(this.state.searchedItems);
          });
      });
    }
    render(){//자식에게 전달
      return(
        <div className='App'>
          <CRUDBook add={this.add} delete={this.delete} update={this.update} 
          retrieve={this.retrieve}/>
        </div>
      );
    }
  }
class CRUDBook extends React.Component{ //자식
    constructor(props){
        super(props);
        this.add=props.add;
        this.delete=props.delete;
        this.update=props.update;
        this.retrieve=props.retrieve;
        this.state={item:{title:"",author:"",publisher:"",userId:""},
                    readOnly:true};
    }

    onRetrieveButtonClick = (e) => { 
        this.retrieve(this.state.item);
        //부모로 부터 받은 searchedItems이 undefined로 나와요!
        const searchedItem=this.props.searchedItems;
        console.log(searchedItem);
    }