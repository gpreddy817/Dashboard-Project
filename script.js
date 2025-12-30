function openfeatures() {
    var allElems = document.querySelectorAll('.elem')
var fullElempage = document.querySelectorAll('.fullElem')
var fullElempageback = document.querySelectorAll('.fullElem .back')

allElems.forEach(function(elem){
    elem.addEventListener('click',function () {
        fullElempage[elem.id].style.display = 'block'        
    })
    
})

fullElempageback.forEach(function(back) {
    back.addEventListener('click',function () {
        fullElempage[back.id].style.display = 'none'        
    })  
})    
}