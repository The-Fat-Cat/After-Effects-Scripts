# After Effects Layer Staggering and Opacity Script

This script is designed to be used in Adobe After Effects. It staggers the start times of all layers in the active composition, except for a specified null layer, so they are 1 frame apart. It also parents each PNG layer to the null layer and applies an opacity expression that makes the layer visible every nth frame (where n is the value of a "Frame Rate" slider on the null layer) and invisible otherwise.
Taken inspo from this video https://www.youtube.com/watch?v=uJor5NsSohk&t=382s
## Usage

1. Open your project in Adobe After Effects.
2. Select the composition you want to apply the script to.
3. Save the script as a .jsx file on your computer. You can do this by opening a text editor (like Notepad or TextEdit), pasting the script into the editor, and then saving the file with a .jsx extension.
4. In After Effects, go to `File > Scripts > Run Script File...`.
5. In the dialog box that opens, navigate to the .jsx file you saved, select it, and click `Open`.
6. The script will now run on the active composition.

Please note that you may need to enable scripts to write files and access the network in After Effects' script preferences for the script to work correctly. You can do this by going to `Edit > Preferences > Scripting & Expressions...` and checking the `Allow Scripts to Write Files and Access Network` option.

## Requirements

- The composition must contain a null layer named "trackingData".
- The composition must contain one or more layers that are PNG files.

## What the script does

1. The script first checks if the active item is a composition. If not, it alerts the user and exits.
2. It then tries to find a null layer named "trackingData" in the composition. If it can't find it, it alerts the user and exits.
3. It loops through each layer in the composition.
4. If the layer is the "trackingData" null, it skips it.
5. If the layer is a PNG, it does the following:
   - Parents the layer to the "trackingData" null.
   - Applies an opacity expression that makes the layer visible every nth frame (where n is the value of the "Frame Rate" slider on the "trackingData" null) and invisible otherwise.
6. It staggers the layer so it starts n frames after the previous layer (where n is the number of layers processed so far, excluding the "trackingData" null).
7. It increments a counter used for the staggering.

## Notes

- The script only affects PNG layers. Other types of layers will be staggered but will not be parented to the "trackingData" null or have the opacity expression applied.
- The script does not affect the "trackingData" null layer. It will not be staggered, parented, or have the opacity expression applied.
- The staggering is done in the order the layers are in the composition, from top to bottom. The topmost layer (excluding the "trackingData" null) will start first, and each subsequent layer will start 1 frame later.
- Initially, if the "Frame Rate" slider on the "trackingData" null is set to zero, it may appear as if the PNG layers are not visible. To see the PNG layers, you need to set the "Frame Rate" slider to a non-zero value and scrub through the timeline.
