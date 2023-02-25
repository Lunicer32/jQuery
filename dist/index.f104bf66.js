// console.log("hi")
window.jQuery = function(selectorOrArray) {
    let elements;
    if (typeof selectorOrArray === "string") elements = document.querySelectorAll(selectorOrArray);
    else if (selectorOrArray instanceof Array) elements = selectorOrArray;
    return {
        find (selector) {
            let array = [];
            for(let i = 0; i < elements.length; i++){
                const elements2 = Array.from(elements[i].querySelectorAll(selector));
                array = array.concat(elements2);
            }
            array.oldApi = this;
            return jQuery(array);
        },
        addClass (className) {
            for(let i = 0; i < elements.length; i++){
                const element = elements[i];
                element.classList.add(className);
            }
            return this;
        }
    };
};
window.$ = window.jQuery;

//# sourceMappingURL=index.f104bf66.js.map
