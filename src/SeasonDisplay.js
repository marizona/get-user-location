import React from 'react';

const seasonConfig = {
  summer: {
    text: "Let's hit the beach",
    iconName: "☀️",
  },
  winter: {
    text: "It is chilly",
    iconName: "❄️",
  },
};

const getSeason = (lat, month)=>{
if(month > 2 && month < 9){
    return lat > 0 ? 'summer':'winter';
}else{
    return lat > 0 ? 'winter' : 'summer';
}
}

 function SeasonDisplay(props) {
    const season = getSeason(props.lat, new Date().getMonth())
    const {text, iconName} = seasonConfig[season]

    

  return (
    <div>
      <i className="icon">{`${iconName}`}</i>
      <h1>{text}</h1>
      <i className="icon">{`${iconName}`}</i>
    </div>
  );
}

export default SeasonDisplay;