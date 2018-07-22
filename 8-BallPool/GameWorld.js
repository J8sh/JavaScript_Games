function Gameworld(){
    this.stick = new Stick();

}

Gameworld.prototype.update = function(){

    this.stick.update();
}

Gameworld.prototype.draw = function(){

    Canvas.drawImage(sprites.background, {x:0, y:0});

    this.stick.draw();
}