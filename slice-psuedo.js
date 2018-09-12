
//clips are instances of sheets
//a sheet will be an array of vertical strips
//strips are long arrays of slices
//slices are arrays with 3-5 layers of depth (like cake)
//each layer is color information, e.g. R, G, B, A, ∆


//should bake a new sheet JUST ONCE per image to save resources
//then take clips from the array instead of sampling the image from scratch every time

//here's how to bake a new sheet...


function bakeNewSheet(path,xRes,yRes) {

	//find the right canvas element
	//use "path" argument

	//get dimensions of canvas element

	//determine how large the slices will be
	var xStep = canvasImageWidth/xRes;
	var yStep = canvasImageHeight/yRes;

	//create new array for the SHEET with dimensions (xRes, yRes)
    var sheetOutTheOven = new Array(xRes);

	for (var i=0; i++; i<xRes) {

		//create new STRIP array in terms of i

		for (var j=0; j++; j<yRes){

			//sample canvas area at (i * xStep, j * yStep) with dim (xStep,yStep)

			//might have to round or floor those values ^

			//average the sampled data if canvas doesn't do it for you

			//create new SLICE array with sampled data..
			//may need another for() loop

			//add SLICE to STRIP (with index j)
		}

		//add STRIP to SHEET (with index i)
	}

	return sheetOutTheOven;
}











//.