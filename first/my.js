
var engine = (function(){
    return {
        man : 'India'
    };
})();

var car = (function(eng){
    console.log('Manufacturer - '+eng.man);
})(engine);
