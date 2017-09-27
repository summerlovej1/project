
var cx = [];
var cy = [];
var N, i;

function setup() {
    var canvas = createCanvas(400, 300);
    canvas.parent("sketch");
    initCircles();
}

function draw() {
	background(224,224,224);
    drawCircles();	
}
// initialize circle positions
function initCircles() {
    N = 100;
    for (i = 0; i < N; i++) {
        cx[i] = random(0, width);
        cy[i] = random(0, height);
    }
}
// draw circles with a given color
function drawCircles() {
	var size = random(10,20);
    fill(255,255,255);
    noStroke();

    for (i = 0; i < N; i++) {
        cx[i] = cx[i];
        cy[i] = cy[i] + 1;
        ellipse(cx[i], cy[i], size, size);

        if(cy[i] > height){
        	cy[i] = 0;
        }
    }
    
}





