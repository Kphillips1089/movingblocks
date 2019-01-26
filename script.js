
var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


var c = canvas.getContext('2d');

/*
var mouse = {
    x: undefined,
    y: undefined,
}


function randomColor() {
    var color = 'rgb(' 
    + (Math.floor(Math.random() * 256)) + ',' 
    + (Math.floor(Math.random() * 256)) + ',' 
    + (Math.floor(Math.random() * 256)) + ')';
    return color;
}

var maxRadius = 60;
var minRadius = 5;

var colorArray = [
    '#er3er5',
    '#fafafa',
    '#fagh34',
    '#ererer',
    '#ff1100',
];
4

window.addEventListener('mousemove', function(event) {
    mouse.x = event.x;
    mouse.y = event.y;
})

window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    init();
})


function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;
    this.color = randomColor();
    this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.strokeStyle = 'black';
        c.stroke();
        c.fillStyle = this.color;
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
        
        if (mouse.x - this.x < 80 && mouse.x - this.x > -80 && mouse.y - this.y < 80 && mouse.y - this.y > -80) {
            if (this.radius < maxRadius) {
                this.radius += 1;
            }
        } else if (this.radius > this.minRadius) {
            this.radius -= 1;
        }
        
        this.draw();
    }
}

var circleArray = [];


function init() {
    
    circleArray = [];
    for (var i = 0; i < 800; i++) {
        var radius = Math.random() * 3 + 1;
        var x = Math.random() * (window.innerWidth - radius * 2) + radius;
        var y = Math.random() * (window.innerHeight - radius * 2) + radius;
        var dx = (Math.random() - 0.5) * 5;
        var dy = (Math.random() - 0.5) * 5;
        circleArray.push(new Circle(x, y, dx, dy, radius));
    }
}

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    
    for (var i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }
}
init();
animate();
*/


var mouse = {
    x: undefined,
    y: undefined,
}

var maxRadius = 60;
var minRadius = 5;

window.addEventListener('mousemove', function(event) {
    mouse.x = event.x;
    mouse.y = event.y;
})

window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
})


function randomColor() {
    var color = 'rgb(' 
    + (Math.floor(Math.random() * 256)) + ',' 
    + (Math.floor(Math.random() * 256)) + ',' 
    + (Math.floor(Math.random() * 256)) + ')';
    return color;
}


function Square(x, y, dx, dy) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.color = randomColor();
    this.draw = function() {
        c.fillStyle = this.color;
        c.fillRect(this.x, this.y, this.dx, this.dx);
    }
    this.update = function() {
        if (this.x + this.dx > innerWidth || this.x + this.dx < 0) {
            this.dx = -this.dx;
        }
        if (this.y + this.dx > innerHeight || this.y < 0) {
            this.dy = -this.dy;
        }
        this.x += this.dx / 20;
        this.y += this.dy / 20;
        
        if (mouse.x - this.x < 80 && mouse.x - this.x > -80 && mouse.y - this.y < 80 && mouse.y - this.y > -80) {
            if (this.radius < maxRadius) {
                this.radius += 1;
            }
        } else if (this.radius > this.minRadius) {
            this.radius -= 1;
        }
        this.draw();
    }
}


function init() {
    squareArray = [];
    for (var i = 0; i < 800; i++) {
        var dx = (Math.random() - 0.5) * 20;
        var dy = (Math.random() - 0.5) * 20;
        var x = Math.random() * (innerWidth - dx);
        var y = Math.random() * (innerHeight - dy);
        squareArray.push(new Square(x, y, dx, dy));
    }
}


function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    
    
    for (var i = 0; i < squareArray.length; i++) {
        squareArray[i].update();
    }
}
init();
animate();