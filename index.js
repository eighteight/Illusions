(function(window) {
    var $allSketches = $(".all-sketches");

    function initializeSketchAndNav(sketchName) {
        var sketch = getSketch(sketchName);
        if(typeof sketch === 'undefined'){
            return;
        } 
        var $sketchElement = initializeSketch(sketch, $allSketches);

    }

    initializeSketchAndNav("line");
    initializeSketchAndNav("dots");
    initializeSketchAndNav("waves");
})(window);
