var canvas = document.querySelector('canvas');

// canvas.width = window.innerWidth;
canvas.width = 500;
// canvas.height = window.innerHeight;
canvas.height = 300;

var c = canvas.getContext('2d');

document.body.style.background = 'url(' + canvas.toDataURL() + ')';



function Circle(x, y, dx, dy, radius) {
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;

	this.draw = function() {
		c.beginPath();
		c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		c.strokeStyle = 'blue';
		c.stroke();
	}

	this.update = function() {
		if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
			this.dx = -this.dx;
		}

		if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
			this.dy = -this.dy;
		}

		this.x += this.dx;
		this.y += this.dy;

		this.draw();
	}

}


var circleArray = [];

for (var i = 0; i < 100; i++) {
	var x = Math.random() * innerWidth;
	var y = Math.random() * innerHeight;
	var dy = (Math.random() - 0.5) * 2;
	var dx = (Math.random() - 0.5) * 2;
	var radius = Math.random() * 20;
	circleArray.push(new Circle(x, y, dx, dy, radius));
}

var circle = new Circle(200, 200, 3, 3, 30);

function animate() {
	requestAnimationFrame(animate);
	c.clearRect(0, 0, innerWidth, innerHeight);
	circle.update();

	for (var i = 0; i < circleArray.length; i++) {
		circleArray[i].update();
	}
}

animate();