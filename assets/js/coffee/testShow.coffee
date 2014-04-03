oldElement = null
toggleItem = (currID) ->
  currElement = document.getElementById(currID);
  if currElement.style.display is 'block'
      currElement.style.display = 'none'
    else
    oldElement.style.display = 'none' if oldElement
    currElement.style.display = 'block'
    oldElement = currElement
    return false


hideItem = (currEle) ->
  elements = document.getElementsByTagName(currEle)
  for i in elements
    i.style.display = 'none' if i.className is 'hidden'
  return false