
//clips are instances of sheets
//a sheet will be an array of vertical strips
//strips are long arrays of slices
//slices are arrays with 3-5 layers of depth (like cake)
//each layer is color information, e.g. R, G, B, A, ∆


//should bake a new sheet JUST ONCE per image to save resources
//then take clips from the array instead of sampling the image from scratch every time

//here's how to bake a new sheet...


function bakeNewSheet(canvObj,xRes,yRes) {

	//get dimensions of canvas element
    var canvasImageWidth = canvObj.width;
    var canvasImageHeight = canvObj.height;
        
	//determine how large the slices will be
	var xStep = canvasImageWidth/xRes;
	var yStep = canvasImageHeight/yRes;

	//create new array for the SHEET with dimensions (xRes, yRes)
    //what's the best way to create an array here?
    var sheetOutTheOven = new Array(xRes);

	for (var i=0; i++; i<xRes) {

		//create new STRIP array in terms of i
        //again, what's the best way?
        var strip = new Array(yRes);

		for (var j=0; j++; j<yRes){

			//sample canvas area at (i * xStep, j * yStep) with dim (xStep,yStep)
            //might have to round or floor these values
            
            var locationX = i * xStep;
            var locationY = j * yStep;
            
            var context = canvObj.getContext('2d');
            var slice = context.getImageData(locationX, locationY, xStep, yStep).data; 
			
            
            //add slice to strip array
            //best way to do this?? should we use push() instead?
			strip[j] = slice;
		}

		//add STRIP to SHEET (with index i)
        sheetOutTheOven[i] = strip;
	}

	return sheetOutTheOven;
}






//.