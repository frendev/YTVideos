import React from 'react';


class SearchBar extends React.Component{
    
    state={
        searchTerm:''
    };

    onChangeSearch=(e) =>{
        e.preventDefault()
        this.setState({searchTerm:e.target.value})
    }


  

    onFormSubmit =(e)=>
    {
        e.preventDefault()
        this.props.onSubmit(this.state.searchTerm)
    }

    render ()
    {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form"> 
                    
                    <div className="field">
                        <label>Video Search</label>
                            <input 
                            type="text"
                            placeholder="enter search term..."
                            value={this.state.searchTerm}
                            onChange={this.onChangeSearch}//Call back function to change the state of the component i.e when input changes
                            />
                    </div>
                </form>
            </div>

            
        )
    }
}

export default SearchBar;

