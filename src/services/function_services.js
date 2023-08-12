// ageCalculator.js

export const calculateAge = (birthdate) => {
    const birthdateArray = birthdate.split("/");
    const birthYear = parseInt(birthdateArray[0]);
    const birthMonth = parseInt(birthdateArray[1]) - 1;
    const birthDay = parseInt(birthdateArray[2]);
  
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const currentDay = currentDate.getDate();
  
    let age = currentYear - birthYear;
  
    if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
      age--;
    }
  
    return age;
  };
  