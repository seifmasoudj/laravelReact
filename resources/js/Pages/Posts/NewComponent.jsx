import React, {Component} from 'react';

export default class NewComponent extends Component{
    state={
        name:'Seif',
        age:28,
        mobile:23344455,
        skills:['css','java','python']
    }
    handleClick=(e)=>{
        console.log("Button is Clicked!");
    }

    handleMouseOver=(e)=>{
        console.log(e.target, e.pageX,e.pageY);
    }

    handleCopy=(e)=>{
        console.log('Paragraph has been copied');
    }

    handleChangeState=()=>{
        this.setState({
            name:'Harith',
            age:26,
            mobile:45366377,
            skills:['c++,Angular,c#,html']
        });
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        });
    }

    handleSubmit=(e)=>{
       e.preventDefault();
       console.log('name',this.state.name);
       console.log('age',this.state.age);
       console.log('mobile',this.state.mobile);
    }


    render(){
        return(
            <div>
                <h1>This is Class Component</h1>
                <p>Name:{this.state.name}</p>
                <p>Age:{this.state.age}</p>
                <p>Mobile:{this.state.mobile}</p>
                <p>Skills:{this.state.skills.join(',')}</p>

                {/* <button type="button" onClick={this.handleClick} onMouseOver={this.handleMouseOver}>Click Here</button>

                <p onCopy={this.handleCopy}>This is a test Paragraph</p>

                <button type="button" onClick={this.handleChangeState}>ChangeState</button> */}

                <form action="" onSubmit={handleSubmit}>
                    Name : <input type="text" name='name' onChange={this.handleChange}/> <br />
                    Age : <input type="text" name='age' onChange={this.handleChange}/> <br />
                    Mobile : <input type="text" name='mobile' onChange={this.handleChange}/> <br />                    
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
