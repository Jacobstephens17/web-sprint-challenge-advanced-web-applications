import React from 'react'
// import fetchColorData from "../fetchData/fetchColorData";
// import { fetchColorList } from '../fetchData/fetchColorData'
import axiosWithAuth from '../helpers/axiosWithAuth';


class BubblesForm extends React.Component {

    
    state = {
        color:'', 
        code: {
            hex:''
        },
    }

    handleSubmit = (e) => {
        e.preventDefault()
        axiosWithAuth()
        .post(`http://localhost:5000/api/colors`, this.state)
        .then((res) => {
            console.log(res)
            this.setColorList()
            this.updateColors()
            this.setColorList(this.state)
            this.getColorList()
        })
        .catch((err) => {

        })
    }


    handleChange = (e) => {
        if(e.target.name === 'code') {
            this.setState({ color: e.target.value, code: { hex: e.target.value }})
        } else{

            this.setState({
                [e.target.name]: e.target.value
            })
        }
    }

  
    
    render(){
        return(
            <div>
                <h1> Add Bubble </h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Color Name: 
                        <input
                        type='text'
                        name='color'
                        value={this.state.color.value}
                        onChange={this.handleChange}
                        />
                    </label>

                    <label>
                        Hex Code: 
                        <input
                        text='text'
                        name='code'
                        value={this.state.code.hex}
                        onChange={this.handleChange}
                        />
                    </label>


                    <button>Add Color</button>
                </form>

            </div>
        
        )


    }
}

export default BubblesForm;