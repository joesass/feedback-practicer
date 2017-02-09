function giveFeedback(name, thingThatYouDo, thingThatHappens, thingThatYouCouldDoInstead){
  var response = confirm(`Hey ${name}, can I give you some feedback?`)
  if(response){
    return `When you ${thingThatYouDo}, ${thingThatHappens}. Can you ${thingThatYouCouldDoInstead} instead?`
  }
  return "Okay, no problem, I'll try again later"
}

var $button = document.getElementById('giveFeedback')

document.getElementById('giveFeedback').addEventListener('click', function(e){
  e.preventDefault()
  var name = document.getElementById('name').value
  var thingThatYouDo = document.getElementById('thingThatYouDo').value
  var thingThatHappens = document.getElementById('thingThatHappens').value
  var thingThatYouCouldDoInstead = document.getElementById('thingThatYouCouldDoInstead').value
  alert(giveFeedback(name, thingThatYouDo, thingThatHappens, thingThatYouCouldDoInstead))
})
