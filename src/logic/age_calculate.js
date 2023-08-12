import React, { useState, useEffect } from 'react';
import AgeCalculator from './AgeCalculator';

const AgeCalculatorContainer = () => {
  const birthdate = "2002/05/27";
  const birthdateArray = birthdate.split("/");
  const birthYear = parseInt(birthdateArray[0]);
  const birthMonth = parseInt(birthdateArray[1]) - 1;
  const birthDay = parseInt(birthdateArray[2]);

  const [age, setAge] = useState(0);

  useEffect(() => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const currentDay = currentDate.getDate();

    let calculatedAge = currentYear - birthYear;

    if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
      calculatedAge--;
    }

    setAge(calculatedAge);
  }, []);

  return (
    <AgeCalculator age={age} />
  );
};

export default AgeCalculatorContainer;