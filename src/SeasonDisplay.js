import React from 'react';
import './SeassonDisplay.css';

const seasonConfig = {
    summer : {
        text : "Its summer",
        iconName : 'sun'
    },
    winter : {
        text : "Its Winter",
        iconName : 'snowflake'
    }
}

const getSeason = (lat,month) => {
    if(month > 2 && month < 9){
        return lat > 0 ? 'summer' : 'winter';
    }else{
        return lat > 0 ? 'winter' : 'summer';
    }
}

const SeasonDisplay = props => {
    console.log(props.lat);
    const season = getSeason(props.lat,new Date().getMonth());
    const {text,iconName} = seasonConfig[season];
    console.log(season);
    
    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`}/>
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon`}/>
        </div>
    );
};

export default SeasonDisplay;