class Ground{
    constructor(x,y,width,height){
    var options={
     isStatic:true
}
this.body=Bodies.rect(x,y,width,height,options)
this.height=height
this.width=width
World.add(world,this.body)
    }
display(){
rectMode(CENTER)
fill(255)
rect(this.body.position.x,this.body.position.y,this.width,this.height)



}


}