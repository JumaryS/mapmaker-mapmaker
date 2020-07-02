const doubleAll= function (nums) {
  let doubled = []
  for (let i = 0 ; nums.length > i ; i++){
  doubled.push(nums[i] *2)
  }return doubled
  }

const absoluteValues= function(str){
    let array = []
    for(let i =0; i< str.length; i++){
      array.push(Math.abs(str[i]))
    }return array
}


const yelledGreetings = function (str){
  let array = []
  for (let i = 0 ; i < str.length ; i++){
  array.push(str[i] + "!")
  }return array
}
  
const changeToInitials = function(name){
  let result = ''

  for(let i =0; i <name.length; i ++){
    let index = name[i]
    let firstName = name[0]
    let lastName= name[-1]
  
  }return result
}
  
  const doubleOdd =function (num) {
    let newArray = []
    for (let i = 0 ; num.length > i ; i++){
      if (Math.floor(num[i]) %  2 !== 0){
        return newArray.push(num[i] *2 )
      }
      else{
        newArray.push(num[i])
      }
      // Math.floor(num[i])%2 !== 0 ? newArray.push(num[i] *2 ) : newArray.push(num[i])
    } return newArray

  }


  const upperCaseFirstLetters=function (strings) {
  const upperCase = [];
  
  for(let i=0; i<strings.length; i++){
    const word = strings[i]
    const upper = word[0].toUpperCase() + word.slice(1).toLowerCase()
    upperCase.push(upper)
  }return upperCase
}




module.exports = {
  doubleAll,
  absoluteValues,
  yelledGreetings,
  changeToInitials,
  doubleOdd,
  upperCaseFirstLetters,
  add1ToLeft,
}