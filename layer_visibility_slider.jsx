(function() {
  // Get the active composition
  var comp = app.project.activeItem;

  // Check if the active item is a composition
  if (!comp || !(comp instanceof CompItem)) {
    alert("Please select a composition.");
    return;
  }

  // Get the tracking data null
  var trackingDataNull = comp.layer("trackingData");

  // Check if the null exists
  if (!trackingDataNull) {
    alert("No layer named 'trackingData' found in the active composition.");
    return;
  }

  // Create a slider control effect
  var frameRateSlider = trackingDataNull.Effects.addProperty("ADBE Slider Control");

  // Rename the slider control to "Frame Rate"
  frameRateSlider.name = "Frame Rate";
})();

(function() {
  // Get the active composition
  var comp = app.project.activeItem;

  // Check if the active item is a composition
  if (!comp || !(comp instanceof CompItem)) {
    alert("Please select a composition.");
    return;
  }

  // Get the tracking data null
  var trackingDataNull = comp.layer("trackingData");

  // Check if the null exists
  if (!trackingDataNull) {
    alert("No layer named 'trackingData' found in the active composition.");
    return;
  }

  // Initialize a counter for the stagger
  var stagger = 0;

  // Loop through each layer in the composition
  for (var i = 1; i <= comp.numLayers; i++) {
    var layer = comp.layer(i);

    // Skip the trackingData layer
    if (layer === trackingDataNull) {
      continue;
    }

    // Check if the layer is a PNG
    if (layer.source && layer.source.file && layer.source.file.name.match(/\.png$/i)) {
      // Parent the layer to the trackingData layer
      layer.parent = trackingDataNull;

      // Create an expression for the opacity
      layer.opacity.expression = "var f = thisComp.layer('trackingData').effect('Frame Rate')('Slider'); var i = index; if(i%f==0){ 100; } else{ 0; }";
    }

    // Stagger the layer so it starts n frames after the previous layer
    layer.startTime = stagger / comp.frameRate;

    // Increment the stagger counter
    stagger++;
  }
})();