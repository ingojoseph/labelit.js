document.addEventListener('DOMContentLoaded', function(){
    var inputs = document.querySelectorAll("input");
    Array.prototype.forEach.call(inputs, function(input, i){
        label = document.createElement("label");
        text = document.createTextNode(input.getAttribute("placeholder"));
        label.appendChild(text);
        input.parentNode.insertBefore(label, input);
        addClass(label, "hide");
        addClass(label, "label");
        label.setAttribute("for", input.getAttribute("id"));
        
        input.addEventListener('input', function(){
            if(this.value != ""){
                removeClass(this.previousSibling, "hide");
            } else if(this.value == ""){
                addClass(this.previousSibling, "hide");
            }
        });
    });
});

function addClass(el, className){  
    if (el.classList)
        el.classList.add(className);
    else
        el.className += ' ' + clasNames;
}
function removeClass(el, className){
    if (el.classList)
      el.classList.remove(className);
    else
      el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
}
