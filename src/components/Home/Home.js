import React from 'react';
import './Home.css'
import axios from 'axios'


class Home extends React.Component {
    state = { advice: '' };

    componentDidMount() {
        this.fetchAdviceAPI();
    }
    fetchAdviceAPI = () => {
        axios.get('https://api.adviceslip.com/advice')
            .then((response) => {
                //console.log(response.data.slip);
                const { advice } = response.data.slip;
                this.setState({ advice });
            }).catch((error) => {
                console.log(error);

            });
    }

    render() {
        const { advice } = this.state
        return (
            <div className="app" >
                <div className="card">
                    <h1 className="heading">{advice}</h1>
                    <button className="button" onClick={() => this.fetchAdviceAPI()}><span>GIVE ME ADVICE!</span></button>
                </div>
            </div>
        );

    }
}

export default Home;