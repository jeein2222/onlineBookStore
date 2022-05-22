import React from 'react';
import {TextField, Paper, Button, Grid} from "@material-ui/core";

class CRUDBook extends React.Component{
    constructor(props){
        super(props);
        this.add=props.add;
        this.delete=props.delete;
        this.update=props.update;
        this.retrieve=props.retrieve;
        this.state={item:{title:"",author:"",publisher:"",userId:""},
                    readOnly:true};   
    }

    onInputTitleChange = (e) =>{
        const thisItem = this.state.item;
        thisItem.title=e.target.value;           
        this.setState({item:thisItem});
    }
    onInputAuthorChange = (e) =>{
        const thisItem = this.state.item;
        thisItem.author=e.target.value;           
        this.setState({item:thisItem});
    }
    onInputPublisherChange = (e) =>{
        const thisItem = this.state.item;
        thisItem.publisher=e.target.value;           
        this.setState({item:thisItem});
    }
    onInputUserIdChange = (e) =>{
        const thisItem = this.state.item;
        thisItem.userId=e.target.value;           
        this.setState({item:thisItem});
    }

    onAddButtonClick = (e) => {
        this.add(this.state.item); //add 함수 사용
        this.setState({item:{title:"",author:"",publisher:"",userId:""}});
    }

    onDeleteButtonClick = (e) => {
        this.delete(this.state.item);
        this.setState({item:{title:"",author:"",publisher:"",userId:""}});
    }

    onRetrieveButtonClick = (e) => { //검색
        this.retrieve(this.state.item);
    }

    onUpdateButtonClick = (e) =>{
        this.update(this.state.item);
        this.setState({item:{title:"",author:"",publisher:"",userId:""}});
    }

    offReadOnlyMode = () => {
        this.setState({readOnly:false});
    }

    enterKeyEventHandler = (e) => {
        if(e.key === "Enter"){
            this.setState({readOnly : true});
            this.update(this.state.item);
        }
    };

    render(){
        return(
            <Paper style={{margin:16, padding:16}}>
                <Grid container>
                    <Grid xs={8} md={11} item style={{paddingRight:16}}>
                        <div>title : <TextField ref={this.inputRef} onChange={this.onInputTitleChange}
                            value={this.state.item.title||''} className="title"
                            onClick={this.offReadOnlyMode}
                            onKeyPress={this.enterKeyEventHandler}/></div>
                        <div>author : <TextField onChange={this.onInputAuthorChange}
                            value={this.state.item.author||''} className="author"
                            onClick={this.offReadOnlyMode}
                            onKeyPress={this.enterKeyEventHandler}/></div>
                        <div>publisher : <TextField onChange={this.onInputPublisherChange}
                            value={this.state.item.publisher||''} className="publisher"
                            onClick={this.offReadOnlyMode}
                            onKeyPress={this.enterKeyEventHandler}/></div>
                        <div>userId : <TextField onChange={this.onInputUserIdChange}
                            value={this.state.item.userId||''} className="userId"
                            onClick={this.offReadOnlyMode}
                            onKeyPress={this.enterKeyEventHandler}/></div>
                    </Grid>
                    <Grid xs={2} md={1} item>
                        <Button fullWidth color="secondary" variant="outlined" onClick={this.onAddButtonClick}>
                            제품 추가
                        </Button>
                        <Button fullWidth color="secondary" variant="outlined" onClick={this.onRetrieveButtonClick}>
                            제품 검색
                        </Button>
                        <Button fullWidth color="secondary" variant="outlined" onClick={this.onUpdateButtonClick}>
                            제품 수정
                        </Button>
                        <Button fullWidth color="secondary" variant="outlined" onClick={this.onDeleteButtonClick}>
                            제품 삭제
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        );
    }
}

export default CRUDBook;