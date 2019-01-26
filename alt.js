function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.strokeStyle = 'black';
        c.stroke();
        c.fillStyle = 'blue';
        c.fill();
    }
    
    this.update = function() {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx
        }
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy
        }
        this.x += this.dx;
        this.y += this.dy
        this.draw();
    }
}

var circleArray = [];

for (var i = 0; i < 40; i++) {
    var radius = 30;
    var x = Math.random() * (window.innerWidth - radius * 2) + radius;
    var y = Math.random() * (window.innerHeight - radius * 2) + radius;
    var dx = (Math.random() - 0.5) * 10;
    var dy = (Math.random() - 0.5) * 10;
    circleArray.push(new Circle(x, y, dx, dy, radius));
}

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    
    for (var i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }
}
animate();






var x = 80;
var y = 100;
var dx = 5;
var dy = 5;
var direction = 0;
var height = 0;

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth, innerHeight);
    c.fillStyle = 'blue';
    c.fillRect(dx, dy, x, y);
    
    if (direction == 0) {
        dx += 5;
    } else {
        dx = dx - 5;
    }
    
    if (height == 0) {
        dy += 5;
    } else {
        dy = dy - 5;
    }
    
    if (dx + 80 > innerWidth) {
        direction = 1;
    } if (dx == 0) {
        direction = 0;
    }
    
    if (dy + 100 > innerHeight) {
        height = 1;
    } if (dy == 0) {
        height = 0;
    }
    console.log(dy);
}
animate();






/*
for (var i = 0; i < 20; i++) {
    var x = xCoords();
    var y = yCoords();
    c.fillStyle = randomColor();
    c.fillRect(x, y, 80, 80);
}

for (var i = 0; i < 20; i++) {
    var x = xCoords();
    var y = yCoords();
    c.beginPath();
    c.arc(x, y, 30, 0, Math.PI * 2, false);
    c.strokeStyle = randomColor();
    c.stroke();
}

function xCoords() {
    var x = Math.random() * window.innerWidth;
    return x;
}

function yCoords() {
    var y = Math.random() * window.innerWidth;
    return y;
}

function randomColor() {
    var color = 'rgb(' 
    + (Math.floor(Math.random() * 256)) + ',' 
    + (Math.floor(Math.random() * 256)) + ',' 
    + (Math.floor(Math.random() * 256)) + ')';
    return color;
}
*/





function Square(dx, dy, x, y) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.direction = 0;
    this.height= 0;
    this.draw = function() {
        c.fillStyle = 'blue';
        c.fillRect(this.dx, this.dy, this.x, this.y);
    }

    this.update = function() {
        if (this.direction == 0) {
        this.dx += 5;
        } else {
            this.dx = this.dx - 5;
        }

        if (this.height == 0) {
            this.dy += 5;
        } else {
            this.dy = this.dy - 10;
        }

        if (this.dx + this.x > window.innerWidth) {
            this.direction = 1;
        } if (this.dx < 0) {
            this.direction = 0;
        }

        if (this.dy + this.y > window.innerHeight) {
            this.height = 1;
        } if (this.dy < 0) {
            this.height = 0;
        }
        this.draw();
        
    }
}

var squareArray = [];

for (var i = 0; i < 20; i++) {
    var x = (Math.random() + 0.5) / 2 * 100;
    var y = x;
    var dx = Math.random() * (innerWidth - x);
    var dy = Math.random() * (innerHeight - y);
    squareArray.push(new Square(dx, dy, x, y));
}

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    
    for (var i = 0; i < squareArray.length; i++) {
        squareArray[i].update();
    }
}
animate();


$('.btns').click(function() {
    $(this).toggleClass('red');
});


