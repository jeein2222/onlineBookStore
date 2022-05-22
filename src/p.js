<ListItem>
<ListItemText>
   <InputBase
    inputProps={{"aria-label":"naked", readOnly:this.state.readOnly}}
    type="text"
    id={item.id}
    name={item.id}
    value={item.title}
    multiline={true}
    />
    <InputBase
    inputProps={{"aria-label":"naked",  readOnly:this.state.readOnly}}
    type="text"
    id={item.id}
    name={item.id}
    value={item.author}
    multiline={true}
    />
    <InputBase
    inputProps={{"aria-label":"naked",  readOnly:this.state.readOnly}}
    type="text"
    id={item.id}
    name={item.id}
    value={item.publisher}
    multiline={true}
    />
    <InputBase
    inputProps={{"aria-label":"naked",  readOnly:this.state.readOnly}}
    type="text"
    id={item.id}
    name={item.id}
    value={item.userId}
    multiline={true}
    />
</ListItemText>
</ListItem>