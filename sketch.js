class Jet {
    constructor(image) {
      this.x = random(width);
      this.y = random(height);
      this.image = image;
    }
    
    
    draw() {
      image(this.image, this.x, this.y);
      let blackJet;
let whiteJet;

let blackJetImage;
let whiteJetImage;

function preload() {
  blackJetImage = loadImage("black-jet.png");
  whiteJetImage = loadImage("white-jet.png");
}

function setup() {
  createCanvas(400, 400);
  blackJet = new Jet(blackJetImage);
  whiteJet = new Jet(whiteJetImage);
}

function draw() {
  background(130);
  
  
  blackJet.draw();
  whiteJet.draw();
}
    } }
    class Jet {
        constructor(image) {
          this.x = random(width);
          this.y = random(height);
          this.image = image;
          
          this.angle = 0;
          this.speed = 0.7;
        }
        
        // added an update function
        update() {
          this.goTheWayWereFacing();
          this.constrainToMap();
        }
        
        // make them go forwards!
        goTheWayWereFacing() {
          this.x += this.speed * sin(this.angle);
          this.y += this.speed * cos(this.angle);
        }
        
        // lets keep on the map now you buggers
        constrainToMap() {
          if (this.x < -this.image.width) {
              this.x = width;
          } else if (this.x > width) {
              this.x = 0;
          } 
          
          if (this.y > height) {
              this.y = 0;
          } else if (this.y < -this.image.height) {
              this.y = height;
          }
        }
        
        
        draw() {
          // the push/pop is to prevent the rotation from happening to other stuff!
          push();
          translate(this.x, this.y);
          imageMode(CENTER);
          // the plus HALF_PI bit is because I drew the images upside down, sorry!
          rotate(this.angle + HALF_PI);
          
          image(this.image, 0, 0);
          pop();
        }
      }class Jet {
        constructor(image) {
          this.x = random(width);
          this.y = random(height);
          this.image = image;
          
          this.angle = 0;
          this.speed = 0.7;
          
          // added this new rotate amount variable
          this.rotateAmount = 0;
        }
        
      
        update() {
          this.goTheWayWereFacing();
          this.constrainToMap();
          
          // increment the angle each frame
          this.angle += this.rotateAmount;
        } }
        function keyPressed() {
            if (keyCode === RIGHT_ARROW) {
              blackJet.rotateAmount = ROTATE_AMOUNT;
            } else if (keyCode === LEFT_ARROW) {
              blackJet.rotateAmount = -ROTATE_AMOUNT;
            } else if (keyCode === 68) {
              // d
              whiteJet.rotateAmount = ROTATE_AMOUNT;
            } else if (keyCode === 65) { 
                // a
              whiteJet.rotateAmount = -ROTATE_AMOUNT;
            }
          }
          
          function keyReleased() {
            if (keyCode === RIGHT_ARROW || keyCode === LEFT_ARROW) {
              blackJet.rotateAmount = 0;
            } else if (keyCode === 65 || keyCode === 68) {
              whiteJet.rotateAmount = 0;
            }
          }

        
