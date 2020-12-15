// primer ejercicio con three.js
// crear una geometria teniendo en cuenta el orden de los vértices
var camera, scene, renderer;
var cameraControls;
var clock = new THREE.Clock();
var ambientLight, light;


function init() {
	var canvasWidth = window.innerWidth * 0.9;
	var canvasHeight = window.innerHeight * 0.9;

	// CAMERA

	camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 80000 );
	camera.position.set(-1,1,40);
	camera.lookAt(10,10,0);

	// LIGHTS

	light = new THREE.DirectionalLight( 0xFFFFFF, 0.7 );
	light.position.set( -3, 1, 0 );
	light.target.position.set(0, 0, 0);
	light.target.updateMatrixWorld()

	var ambientLight = new THREE.AmbientLight( 0x111111 );

	// RENDERER
	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setSize( canvasWidth, canvasHeight );
	renderer.setClearColor( 0x91EEE5, 1.0 );

	renderer.gammaInput = true;
	renderer.gammaOutput = true;

	// Add to DOM
	var container = document.getElementById('container');
	container.appendChild( renderer.domElement );

	// CONTROLS
	cameraControls = new THREE.OrbitControls( camera, renderer.domElement );
	cameraControls.target.set(0, 0, 0);

	// SCENE
	scene = new THREE.Scene();
	//estructua estrella
	var juntarEstrella=new THREE.Geometry();
	var colorEstrella = new THREE.MeshPhongMaterial( { color: 0xEEF512 } );

	var punta1 = new THREE.CylinderGeometry( 0, 0.5, 3 );
	var est= new THREE.Mesh(punta1);
	est.position.set(0,25,0);
	juntarEstrella.mergeMesh(est);

	var punta2 = new THREE.CylinderGeometry( 0, 0.25, 2 );
	var est= new THREE.Mesh(punta2);
	est.position.set(0,25,-0.7);
	est.rotateX(-1.6);
	juntarEstrella.mergeMesh(est);

	var punta3 = new THREE.CylinderGeometry( 0, 0.25, 2 );
	var est= new THREE.Mesh(punta3);
	est.position.set(0,25,0.7);
	est.rotateX(1.6);
	juntarEstrella.mergeMesh(est);
	
	var punta4 = new THREE.CylinderGeometry( 0, 0.20, 1.7 );
	var est= new THREE.Mesh(punta4);
	est.position.set(0,24.3,0.6);
	est.rotateX(2.5);
	juntarEstrella.mergeMesh(est);
	
	var punta5 = new THREE.CylinderGeometry( 0, 0.20, 1.7 );
	var est= new THREE.Mesh(punta5);
	est.position.set(0,24.3,-0.6);
	est.rotateX(-2.5);
	juntarEstrella.mergeMesh(est);

	var cuerpoEstrella = new THREE.Mesh(juntarEstrella,colorEstrella)
	scene.add(cuerpoEstrella);
	//estructura arbol
	//juntamos tronco
	var juntarTronco=new THREE.Geometry();
	var colorTronco = new THREE.MeshPhongMaterial( { color: 0x4F2F07 } );
	
	//tronco
	var geometry = new THREE.CylinderGeometry(0.5,3,28,5);
	var tr= new THREE.Mesh(geometry);
	tr.position.set(0,9.5,0);
	juntarTronco.mergeMesh(tr);
	
	var cuerpoTronco=new THREE.Mesh(juntarTronco,colorTronco);
	scene.add(cuerpoTronco);

	//Juntamos ramas
	var juntarArbol=new THREE.Geometry();
	var colorRamas = new THREE.MeshPhongMaterial( { color: 0x0C3E11 } );

	//ramas
	var geometry = new THREE.CylinderGeometry(1.7, 8, 3, 32);
    var r1 = new THREE.Mesh(geometry,colorRamas);
	r1.position.set(0, 5.5, 0);
	juntarArbol.mergeMesh(r1);

	var geometry = new THREE.CylinderGeometry(1.7, 7, 3, 32);
    var r1 = new THREE.Mesh(geometry,colorRamas);
	r1.position.set(0, 9, 0);
	juntarArbol.mergeMesh(r1);

	var geometry = new THREE.CylinderGeometry(1.7, 6, 3, 32);
    var r1 = new THREE.Mesh(geometry,colorRamas);
	r1.position.set(0, 12.5, 0);
	juntarArbol.mergeMesh(r1);
	
	var geometry = new THREE.CylinderGeometry(1.7, 5, 3, 32);
    var r1 = new THREE.Mesh(geometry,colorRamas);
	r1.position.set(0, 15.7, 0);
	juntarArbol.mergeMesh(r1);

	var geometry = new THREE.CylinderGeometry(1.7, 4, 3, 32);
    var r1 = new THREE.Mesh(geometry,colorRamas);
	r1.position.set(0, 18.7, 0);
	juntarArbol.mergeMesh(r1);

	var geometry = new THREE.CylinderGeometry(0.6, 3, 3, 30);
    var r1 = new THREE.Mesh(geometry,colorRamas);
	r1.position.set(0, 21.5, 0);
	juntarArbol.mergeMesh(r1);

	var cuerpoArbol=new THREE.Mesh(juntarArbol,colorRamas);
	scene.add(cuerpoArbol);
	
	
	var juntar=new THREE.Geometry();
	var material = new THREE.MeshPhongMaterial( { color: 0x5B5B59 } );
	
	//base
	geometry = new THREE.CylinderGeometry(1.3, 5, 4, 32);
    cili = new THREE.Mesh(geometry);
	cili.position.set(0, -2, 0);
	juntar.mergeMesh(cili);
	var cuerpo=new THREE.Mesh(juntar,material);
	scene.add(cuerpo);
	
	
	//base del escenario
	material = new THREE.MeshPhongMaterial( { color: 0x7CEF36 } );
	geometry = new THREE.BoxGeometry(50, 1, 50);
    cili = new THREE.Mesh(geometry,material);
	cili.position.set(0, -4, 0);
	scene.add(cili);
	
	//esferas decorativas
	var juntaEsf=new THREE.Geometry();
	//cambia de color las esferas
	material = new THREE.MeshPhongMaterial( { color: 0xFF0C00 } );
	//grande1
	geometryE = new THREE.SphereGeometry(1,20, 20);
	e1 = new THREE.Mesh(geometryE);
	e1.position.set(6, 5.6, 0.37);
	juntaEsf.mergeMesh(e1);
	
	//grande2
	geometryE = new THREE.SphereGeometry(1,20, 20);
	e2 = new THREE.Mesh(geometryE);
	e2.position.set(-6, 5.6, 0.37);
	juntaEsf.mergeMesh(e2);
	
	//grande3
	geometryE = new THREE.SphereGeometry(1,20, 20);
	e3 = new THREE.Mesh(geometryE);
	e3.position.set(0, 5.6, 5.5);
	juntaEsf.mergeMesh(e3);
	
	//grande4
	geometryE = new THREE.SphereGeometry(1,20, 20);
	e4 = new THREE.Mesh(geometryE);
	e4.position.set(0, 5.6, -5.5);
	juntaEsf.mergeMesh(e4);
	//grande5
	geometryE = new THREE.SphereGeometry(1,20, 20);
	e5 = new THREE.Mesh(geometryE);
	e5.position.set(-4, 5.6, 4);
	juntaEsf.mergeMesh(e5);
	
	//grande6
	geometryE = new THREE.SphereGeometry(1,20, 20);
	e6 = new THREE.Mesh(geometryE);
	e6.position.set(-4, 5.6, -4);
	juntaEsf.mergeMesh(e6);

	//grande7
	geometryE = new THREE.SphereGeometry(1,20, 20);
	e5 = new THREE.Mesh(geometryE);
	e5.position.set(4, 5.6, -4);
	juntaEsf.mergeMesh(e5);

	//grande8
	geometryE = new THREE.SphereGeometry(1,20, 20);
	e6 = new THREE.Mesh(geometryE);
	e6.position.set(4, 5.6, 4);
	juntaEsf.mergeMesh(e6);
	
	var man=new THREE.Mesh(juntaEsf,material);
	scene.add(man);
	
	//esferas decorativas2
	var juntaEsf2=new THREE.Geometry();
	//cambia de color las esferas
	material2 = new THREE.MeshPhongMaterial( { color: 0xFFF300 } );
	//grande1
	geometryE = new THREE.SphereGeometry(1,20, 20);
	e1 = new THREE.Mesh(geometryE);
	e1.position.set(6, 8.9,0.37);
	juntaEsf2.mergeMesh(e1);
	
	//grande2
	geometryE = new THREE.SphereGeometry(1,20, 20);
	e2 = new THREE.Mesh(geometryE);
	e2.position.set(-6, 8.9, 0.37);
	juntaEsf2.mergeMesh(e2);
	
	//grande3
	geometryE = new THREE.SphereGeometry(1,20, 20);
	e3 = new THREE.Mesh(geometryE);
	e3.position.set(0, 8.9, 5.5);
	juntaEsf2.mergeMesh(e3);
	
	//grande4
	geometryE = new THREE.SphereGeometry(1,20, 20);
	e4 = new THREE.Mesh(geometryE);
	e4.position.set(0, 8.9, -5.5);
	juntaEsf2.mergeMesh(e4);
	//grande5
	geometryE = new THREE.SphereGeometry(1,20, 20);
	e5 = new THREE.Mesh(geometryE);
	e5.position.set(-4, 8.9, 4);
	juntaEsf2.mergeMesh(e5);
	
	//grande6
	geometryE = new THREE.SphereGeometry(1,20, 20);
	e6 = new THREE.Mesh(geometryE);
	e6.position.set(-4, 8.9, -4);
	juntaEsf2.mergeMesh(e6);

	//grande7
	geometryE = new THREE.SphereGeometry(1,20, 20);
	e5 = new THREE.Mesh(geometryE);
	e5.position.set(4, 8.9, -4);
	juntaEsf2.mergeMesh(e5);

	//grande8
	geometryE = new THREE.SphereGeometry(1,20, 20);
	e6 = new THREE.Mesh(geometryE);
	e6.position.set(4, 8.9, 4);
	juntaEsf2.mergeMesh(e6);
	
	var man=new THREE.Mesh(juntaEsf2,material2);
	scene.add(man);

	//esferas decorativas3
	var juntaEsf2=new THREE.Geometry();
	//cambia de color las esferas
	material2 = new THREE.MeshPhongMaterial( { color: 0x38D206 } );
	//grande1
	geometryE = new THREE.SphereGeometry(0.8,20, 20);
	e1 = new THREE.Mesh(geometryE);
	e1.position.set(5, 12.3, 0.37);
	juntaEsf2.mergeMesh(e1);
	
	//grande2
	geometryE = new THREE.SphereGeometry(0.8,20, 20);
	e2 = new THREE.Mesh(geometryE);
	e2.position.set(-5, 12.3, 0.37);
	juntaEsf2.mergeMesh(e2);
	
	//grande3
	geometryE = new THREE.SphereGeometry(0.8,20, 20);
	e3 = new THREE.Mesh(geometryE);
	e3.position.set(0, 12.3, 5);
	juntaEsf2.mergeMesh(e3);
	
	//grande4
	geometryE = new THREE.SphereGeometry(0.8,20, 20);
	e4 = new THREE.Mesh(geometryE);
	e4.position.set(0, 12.3, -5);
	juntaEsf2.mergeMesh(e4);
	//grande5
	geometryE = new THREE.SphereGeometry(0.8,20, 20);
	e5 = new THREE.Mesh(geometryE);
	e5.position.set(-3.5, 12.3, 3.5);
	juntaEsf2.mergeMesh(e5);
	
	//grande6
	geometryE = new THREE.SphereGeometry(0.8,20, 20);
	e6 = new THREE.Mesh(geometryE);
	e6.position.set(-3.5, 12.3, -3.5);
	juntaEsf2.mergeMesh(e6);

	//grande7
	geometryE = new THREE.SphereGeometry(0.8,20, 20);
	e5 = new THREE.Mesh(geometryE);
	e5.position.set(3.5, 12.3, -3.5);
	juntaEsf2.mergeMesh(e5);

	//grande8
	geometryE = new THREE.SphereGeometry(0.8,20, 20);
	e6 = new THREE.Mesh(geometryE);
	e6.position.set(3.5, 12.3, 3.5);
	juntaEsf2.mergeMesh(e6);
	
	var man=new THREE.Mesh(juntaEsf2,material2);
	scene.add(man);

	//esferas decorativas4
	var juntaEsf2=new THREE.Geometry();
	//cambia de color las esferas
	material2 = new THREE.MeshPhongMaterial( { color: 0xFF0C00 } );
	//grande1
	geometryE = new THREE.SphereGeometry(0.7,20, 20);
	e1 = new THREE.Mesh(geometryE);
	e1.position.set(4.1, 15.5, 0.37);
	juntaEsf2.mergeMesh(e1);
	
	//grande2
	geometryE = new THREE.SphereGeometry(0.7,20, 20);
	e2 = new THREE.Mesh(geometryE);
	e2.position.set(-4.1, 15.5, 0.37);
	juntaEsf2.mergeMesh(e2);
	
	//grande3
	geometryE = new THREE.SphereGeometry(0.7,20, 20);
	e3 = new THREE.Mesh(geometryE);
	e3.position.set(0, 15.5, 4.1);
	juntaEsf2.mergeMesh(e3);
	
	//grande4
	geometryE = new THREE.SphereGeometry(0.7,20, 20);
	e4 = new THREE.Mesh(geometryE);
	e4.position.set(0, 15.5, -4.1);
	juntaEsf2.mergeMesh(e4);
	//grande5
	geometryE = new THREE.SphereGeometry(0.7,20, 20);
	e5 = new THREE.Mesh(geometryE);
	e5.position.set(-3, 15.5, 3);
	juntaEsf2.mergeMesh(e5);
	
	//grande6
	geometryE = new THREE.SphereGeometry(0.7,20, 20);
	e6 = new THREE.Mesh(geometryE);
	e6.position.set(-3, 15.5, -3);
	juntaEsf2.mergeMesh(e6);

	//grande7
	geometryE = new THREE.SphereGeometry(0.7,20, 20);
	e5 = new THREE.Mesh(geometryE);
	e5.position.set(3, 15.5, -3);
	juntaEsf2.mergeMesh(e5);

	//grande8
	geometryE = new THREE.SphereGeometry(0.7,20, 20);
	e6 = new THREE.Mesh(geometryE);
	e6.position.set(3, 15.5, 3);
	juntaEsf2.mergeMesh(e6);
	
	var man=new THREE.Mesh(juntaEsf2,material2);
	scene.add(man);

	//esferas decorativas5
	var juntaEsf2=new THREE.Geometry();
	//cambia de color las esferas
	material2 = new THREE.MeshPhongMaterial( { color: 0xFFF300 } );
	//grande1
	geometryE = new THREE.SphereGeometry(0.65,20, 20);
	e1 = new THREE.Mesh(geometryE);
	e1.position.set(3.5, 18.5, 0.37);
	juntaEsf2.mergeMesh(e1);
	
	//grande2
	geometryE = new THREE.SphereGeometry(0.65,20, 20);
	e2 = new THREE.Mesh(geometryE);
	e2.position.set(-3.5, 18.5, 0.37);
	juntaEsf2.mergeMesh(e2);
	
	//grande3
	geometryE = new THREE.SphereGeometry(0.65,20, 20);
	e3 = new THREE.Mesh(geometryE);
	e3.position.set(0, 18.5, 3.5);
	juntaEsf2.mergeMesh(e3);
	
	//grande4
	geometryE = new THREE.SphereGeometry(0.65,20, 20);
	e4 = new THREE.Mesh(geometryE);
	e4.position.set(0, 18.5, -3.5);
	juntaEsf2.mergeMesh(e4);
	//grande5
	geometryE = new THREE.SphereGeometry(0.65,20, 20);
	e5 = new THREE.Mesh(geometryE);
	e5.position.set(-2.5, 18.5, 2.5);
	juntaEsf2.mergeMesh(e5);
	
	//grande6
	geometryE = new THREE.SphereGeometry(0.65,20, 20);
	e6 = new THREE.Mesh(geometryE);
	e6.position.set(-2.5, 18.5, -2.5);
	juntaEsf2.mergeMesh(e6);

	//grande7
	geometryE = new THREE.SphereGeometry(0.65,20, 20);
	e5 = new THREE.Mesh(geometryE);
	e5.position.set(2.5, 18.5, -2.5);
	juntaEsf2.mergeMesh(e5);

	//grande8
	geometryE = new THREE.SphereGeometry(0.65,20, 20);
	e6 = new THREE.Mesh(geometryE);
	e6.position.set(2.5, 18.5, 2.5);
	juntaEsf2.mergeMesh(e6);
	
	var man=new THREE.Mesh(juntaEsf2,material2);
	scene.add(man);

	//esferas decorativas6
	var juntaEsf2=new THREE.Geometry();
	//cambia de color las esferas
	material2 = new THREE.MeshPhongMaterial( { color: 0x001FFF } );
	//grande1
	geometryE = new THREE.SphereGeometry(0.5,20, 20);
	e1 = new THREE.Mesh(geometryE);
	e1.position.set(2.4, 21.3, 0.37);
	juntaEsf2.mergeMesh(e1);
	
	//grande2
	geometryE = new THREE.SphereGeometry(0.5,20, 20);
	e2 = new THREE.Mesh(geometryE);
	e2.position.set(-2.4, 21.3, 0.37);
	juntaEsf2.mergeMesh(e2);
	
	//grande3
	geometryE = new THREE.SphereGeometry(0.5,20, 20);
	e3 = new THREE.Mesh(geometryE);
	e3.position.set(0, 21.3, 2.4);
	juntaEsf2.mergeMesh(e3);
	
	//grande4
	geometryE = new THREE.SphereGeometry(0.5,20, 20);
	e4 = new THREE.Mesh(geometryE);
	e4.position.set(0, 21.3, -2.4);
	juntaEsf2.mergeMesh(e4);
	//grande5
	geometryE = new THREE.SphereGeometry(0.5,20, 20);
	e5 = new THREE.Mesh(geometryE);
	e5.position.set(-1.7, 21.3, 1.7);
	juntaEsf2.mergeMesh(e5);
	
	//grande6
	geometryE = new THREE.SphereGeometry(0.5,20, 20);
	e6 = new THREE.Mesh(geometryE);
	e6.position.set(-1.7, 21.3, -1.7);
	juntaEsf2.mergeMesh(e6);

	//grande7
	geometryE = new THREE.SphereGeometry(0.5,20, 20);
	e5 = new THREE.Mesh(geometryE);
	e5.position.set(1.7, 21.3, -1.7);
	juntaEsf2.mergeMesh(e5);

	//grande8
	geometryE = new THREE.SphereGeometry(0.5,20, 20);
	e6 = new THREE.Mesh(geometryE);
	e6.position.set(1.7, 21.3, 1.7);
	juntaEsf2.mergeMesh(e6);
	
	var man=new THREE.Mesh(juntaEsf2,material2);
	scene.add(man);

	scene.add( light );
	scene.add( ambientLight );

}

function animate() {
	window.requestAnimationFrame( animate );
	render();
}

function render() {
	var delta = clock.getDelta();
	cameraControls.update(delta);
	renderer.render( scene, camera );
}

try {
	init();
	animate();
} catch(e) {
	var errorReport = "Your program encountered an unrecoverable error, can not draw on canvas. Error was:<br/><br/>";
	$('#container').append(errorReport+e);
}
