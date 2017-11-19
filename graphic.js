var myGroup = new Group();
// myGroup.pivot = new Point(0,0);
// var rect = new Rectangle(new Point(0, 50), new Point(500, 100));
var pat = new Path.Rectangle(new Point(0,0), view.size);
pat.fillColor = '#e9e9ee';
// var rectangle = new Rectangle(new Point(0, 50), new Point(500, 100));
var path = new Path.Rectangle(new Point(10,10), view.size - new Point(20,20));
path.center = new Point(0,0);
path.fillColor = '#e9e9ff';
myGroup.addChild(pat);
myGroup.addChild(path);
myGroup.pivot = new Point(0,0);
//path.center = new Point(0,0);
// myGroup.position = new Point(40,40);
//path.selected = true;
//myGroup.addChild(rect);
//myGroup.pivot(view.center);
// var center = new Path.Circle(view.center, 3);
// center.fillColor = 'red';
// var myCircle = new Path.Circle(new Point(0, 0), 50);
//myCircle.pivot = new Point(-50,-50);
//myCircle.position = new Point(0,0);
//myCircle.fillColor = 'black';
//myGroup.addChild(myCircle);
//myGroup.pivot = new Point(0,0);
//myGroup.position = view.center;

// myCircle.position([100,100]);
// myCircle.pivot = new Point(0,0);
// myGroup.addChild(myCircle);
// console.log(myGroup.pivot);
// console.log(myGroup.position);
// //myCircle.position = myGroup.position;
// myCircle.fillColor = 'black';
//
function onResize(event) {
	myGroup.position = view.center;
  // rectangle.width = view.size.width;
  // view.update();
  // console.log(rectangle.width);
  //center.position = view.center;
}
