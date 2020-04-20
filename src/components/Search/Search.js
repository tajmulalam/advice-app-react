import React from 'react';
import axios from 'axios'
import AdviceList from '../AdviceList/AdviceList'
import '../Search/Search.css'

class Search extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            advice: [],
            message:{}
        }
    }
    fetchAdviceAPI = (searchInput) => {
        axios.get(`https://api.adviceslip.com/advice/search/${searchInput}`)
            .then((response) => {
                console.log(response);
               if(response.data.slips){
                   this.setState({advice:[]})
                   this.setState({
                       advice:response.data.slips
                   })
               }else{
                this.setState({
                    message:response.data.message
                })
               }
            }).catch((error) => {
                console.log(error);

            });
    }
    render() {
        const { advice,message } = this.state;
        console.log("render")
        console.log(message)
        console.log(advice)
        return (
            <div id="search-list">
                <div className="filter-list">
                    <input type="text" placeholder="Search advice..." onChangeCapture={(e) => this.fetchAdviceAPI(e.target.value)} />
                    {advice ? <AdviceList advice={advice} /> : <div> {message.text}</div>}
                </div>
            </div>
        );

    }
}

export default Search;