class Rectangle{
    constructor(width,height){
        this.width = width;
        this.height = height;
    }
    set width(newWidth){
        if(newWidth>0)
            this._width = newWidth;
        else
            console.error("Width must be positive integer");
    }
    set height(newHeight){
        if(newHeight>0)
            this._height = newHeight;
        else
            console.error("Height must be positive integer");
    }

    get width(){
        return this._width.toFixed(1);
    }
    get height(){
        return this._height.toFixed(1);
    }
    get area(){
        return (this._width * this._height);
    }

}

const rectangle = new Rectangle(13 , 44);
console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);    // Although not a property but still can be called like one bcz of the getter.