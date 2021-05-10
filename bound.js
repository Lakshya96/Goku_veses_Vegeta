class Bound{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA.body,
            pointB: pointB,
            length: 10,
            stiffness: 0.04
        }
        this.chain=Constraint.create(options);
        this.pointB=pointB;
        World.add(world,this.chain);
    }
    }