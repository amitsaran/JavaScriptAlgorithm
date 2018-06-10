var reverseWords = function(str) {
    var strArray = str.split(' ');
    var filteredArray = strArray.filter(function(currentValue){
        return (currentValue !== '');
    });
    return filteredArray.reduce(function(acumulator, currentValue, currentIndex, theArray){
        var space = (acumulator === '')?'':' ';
        return currentValue + space + acumulator;
    }, '');
};

module.exports = reverseWords;
