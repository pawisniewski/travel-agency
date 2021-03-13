import React from 'react';
import styles from './DaysToSummer.scss';

class DaysToSummer extends React.Component {
    
  getCountdownDate(){
    const currentDate = new Date();
    const summerStart = new Date(Date.UTC(currentDate.getUTCFullYear(), 5, 21));
    const summerEnd = new Date(Date.UTC(currentDate.getUTCFullYear(), 8, 24));

    if (
      currentDate.getTime() > summerEnd.getTime()
    ) {
      summerStart.setUTCFullYear(currentDate.getUTCFullYear()+1);
    }
    else if (
      currentDate.getTime() >= summerStart.getTime() &&
      currentDate.getTime() < summerEnd.getTime()
    ) { 
      return null;
    }

    const daysRemain = Math.round((summerStart.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24));

    if (daysRemain == 1){
      return '1 day to summer!';
    } else {
      return daysRemain + ' ' + 'days to summer!';
    }  
  }

  render(){
    const summerDescription = this.getCountdownDate();

    return(
      <div className={styles.component}>
        <div className={styles.summerDescription}>
          <h3>{summerDescription}</h3>
        </div>
      </div>
    );
  }
}

export default DaysToSummer;