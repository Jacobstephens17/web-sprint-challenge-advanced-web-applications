import React from 'react'
import fetchColorData from "../fetchData/fetchColorData";
import { fetchColorList } from '../fetchData/fetchColorData'
import axiosWithAuth from '../helpers/axiosWithAuth';

class BubblesForm extends React.Component {

    
    state = {
        color:'', 
        code: {
            hex:''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log('clicked')
        axiosWithAuth()
        .post('http://localhost:5000/api/colors', this.state)
        .then((res) => {
            console.log(res)
            this.setColorList()
        })
        .catch((err) => {

        })
    }


    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
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
                        name='hex'
                        value={this.state.code.hex.value}
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