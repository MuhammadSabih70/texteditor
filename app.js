var text =document.getElementById("text")
var selectedFont = document.getElementById('text');

var bold =document.getElementById('BOLD')
bold.addEventListener("click",function(){
    text.style.fontWeight = 'bold'
})

var underline =document.getElementById('underline')
underline.addEventListener("click",function(){
    text.style.textDecoration="underline"
})

var italic=document.getElementById('italic')
italic.addEventListener("click",function(){
    console.log("bold")
    text.style.fontStyle = "italic"
})


var fontSelector = document.getElementById('font-selector')
fontSelector.addEventListener('change', function() {
    var selectedOption = fontSelector.options[fontSelector.selectedIndex];
    var selectedFontFamily = selectedOption.value;

    text.style.fontFamily = selectedFontFamily;
    text.textContent = "Selected Font: " + selectedFontFamily;
});
var left = document.getElementById("left")
left.addEventListener("click",function(){
    text.style.textAlign="left"
})
var center = document.getElementById("center")
center.addEventListener("click",function(){
    text.style.textAlign="center"
})
var right = document.getElementById("right")
right.addEventListener("click",function(){
    text.style.textAlign="right"
})

