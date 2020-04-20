import React from 'react';
import Advice from '../Advice/Advice';
import '../AdviceList/AdviceList.css';

class AdviceList extends React.Component {

    render() {
        const { advice } = this.props
        return (
            <ul className="advice-list">
                {advice.map((a)=><Advice key={a.slip_id} adv={a.advice} slip_id={a.slip_id} ></Advice>)}
            </ul>
        );

    }
}

export default AdviceList;