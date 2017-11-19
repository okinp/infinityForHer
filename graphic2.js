function infinity(numSegments, width)
{
  this.width = width;
  this.numSegments = numSegments;
  this.infinityPath = new Path();
  this.infinityPath.pivot = new Point(0,0);
  //this.infinityPath.position = new Point(0,0);
  this.infinityPath.strokeColor = "black";
  this.infinityPath.strokeWidth = 3;

  this.infinityPath.remove();
  this.group = new Group();
  this.group.pivot = new Point(0,0);
  this.group.addChild(this.infinityPath);

  this.getPointAtAngle = function(theta)
  {
    var x = this.width*Math.cos(theta)/(1+Math.sin(theta)*Math.sin(theta));
    var y = this.width*Math.cos(theta)*Math.sin(theta)/(1+Math.sin(theta)*Math.sin(theta));
    return new Point(x,y);
  }

  for ( var i=0; i<this.numSegments; i++ )
  {
    var p = this.getPointAtAngle(i*2*Math.PI/(this.numSegments-1));
    this.infinityPath.add(p);
  }
  this.arcCenter = this.getPointAtAngle(Math.PI/2);

  this.addArcPath = function(thetaStart, thetaEnd, dist, thickness)
  {
    thetaStart *= 2*Math.PI;
    thetaEnd *= 2*Math.PI;
    //thetaStart = thetaStart%(2*Math.PI);
    //thetaEnd = thetaEnd%(2*Math.PI);
    var arcPath = new Path();
    arcPath.fillColor = {
      hue: (Math.random()*0.4)*360,
      saturation: 1,
      brightness: 1
    }


    arcPath.strokeWidth = 1;
    arcPath.strokeColor = arcPath.fillColor;
    //arcPath.pivot = this.arcCenter;
    arcPath.position = new Point(0,0);
    var thetaDiff = thetaEnd-thetaStart;
    var percTheta = Math.abs(thetaDiff)/(2*Math.PI);
    var neededSegments = this.numSegments*percTheta;
    var thetaStep = thetaDiff/(this.numSegments-1);
    var previousPoint = this.getPointAtAngle(thetaStart-thetaStep);
    for (var i=0; i<this.numSegments; i++ )
    {
      var currentAngle = thetaStart+i*thetaStep;
      var currentPoint = this.getPointAtAngle(currentAngle);
      var diff = currentPoint - previousPoint;
      diff.length = 1;
      if ( (currentAngle%(2*Math.PI) < Math.PI/4) || (currentAngle%(2*Math.PI) > 3*Math.PI/4)  )
      {
        diff.angle -=90;
      } else if ((currentAngle%(2*Math.PI) === Math.PI/2) || (currentAngle%(2*Math.PI) === 3*Math.PI/2))
      {
        diff.length=0;
        diff.angle = 0;
      }
      else {
        //diff.length=0;
        diff.angle +=90;
      }
      var midPoint = currentPoint + diff*dist;
      var topPoint = midPoint + diff*0.5*thickness;
      var bottomPoint = midPoint - diff*0.5*thickness;
      arcPath.add(topPoint);
      arcPath.insert(0,bottomPoint);
      previousPoint = currentPoint;
    }
    arcPath.closed = true;
    this.group.addChild(arcPath);
  }
}
var inf = new infinity(300, 200);
inf.addArcPath(0.000, 1, 140, 90);
// inf.addArcPath(-0.02, 0, 90, 30);
// inf.addArcPath(-0.04, -0.02, 190, 30);
// for (var i=0; i<50; i++ )
// {
//   inf.addArcPath(Math.random(), Math.random(), 100*Math.random(), 20*Math.random());
// }
console.log(inf.getPointAtAngle(0));


function onResize(event) {
	inf.group.position = view.center;
}
