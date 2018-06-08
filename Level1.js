var Level1 = {
	king: null,
	plat: null,
	num: 0,
	left: null,
	up: null,
	down: null,
	right: null,
	door: null,
	wall_1: null,
	wall_2: null,
	water: null,
	water_line: null,
	fence: null,
	tree: null,
	lead: null,
	lead_y: [1050, 0, 0],
	lead_x: [200, 0, 0],
	wall_1_y: [1050, 1050, 1050, 1050, 1050, 0, 0, 0, 0, 0],
	wall_1_x: [0, 351, 568, 750, 965, 0, 0, 0, 0, 0],
	//water_y: [1050, 1050, 1050, 1050, 1050, 0, 0, 0, 0, 0],
	//water_x: [0, 351,568, 750, 965, 0, 0, 0, 0, 0],
	door_x: [0,800,500,1100,1000,0,0,0,0,0],
	door_y: [800,600,300,800,0,0,0,0,0,0],
	text:null,
	preload: function () {
		game.load.image("up", "img/arrowUp.png");
		game.load.image("left", "img/arrowLeft.png");
		game.load.image("right", "img/arrowRight.png");
		game.load.spritesheet("king", "king.png", 20, 16);
		game.load.image("down", "img/arrowDown.png");
		game.load.image("door", "img/door.png");
		game.load.image("tree", "img/tree.png");
		game.load.image("wall_1", "img/wall_1.png", 20, 16);
		game.load.image("wall_2", "img/wall_2.png");
		game.load.image("water", "img/water.png");
		game.load.image("water_line", "img/water_line.png");
		game.load.image("fence", "img/fence.png");
		game.load.image("lead", "img/lead.png")

	},
	create: function () {
		game.physics.startSystem(Phaser.Physics.ARCADE);
		game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
		game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		game.scale.refresh();
		game.world.setBounds(0, 0, 1185, 1500)
		game.stage.backgroundColor = "#c6b9b9";
		 this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		
		this.wall_1 = game.add.group();
		this.wall_1.enableBody = true;
		for (var i = 0; i < 5; i++) {
			var a = this.wall_1.create(this.wall_1_x[i], this.wall_1_y[i], "wall_1");
			a.scale.setTo(2.3, 3);
			a.body.immovable = true;
		}
		this.lead = game.add.group();
		for (var i = 0; i < 1; i++) {
			var a = this.lead.create(this.lead_x[i], this.lead_y[i], "lead");
			a.scale.setTo(4, 4);
		}

		this.wall_2 = game.add.group();
		for (var i = 0; i < 10; i++) {
			var a = this.wall_2.create(i * 192, game.world.height, "wall_2");
			a.anchor.setTo(0, 1);
			a.scale.setTo(4, 4);
		}
		for(var i=0;i<10;i++){
			var b = this.wall_2.create(i*192,1056,"wall_2");
			b.anchor.setTo(0, 1);
			b.scale.setTo(4, 4);
		}
		for(var i=0;i<10;i++){
			var b = this.wall_2.create(i*192,801,"wall_2");
			b.anchor.setTo(0, 1);
			b.scale.setTo(4, 4);
		}
		for(var i=0;i<10;i++){
			var b = this.wall_2.create(i*192,545,"wall_2");
			b.anchor.setTo(0, 1);
			b.scale.setTo(4, 4);
		}
		for(var i=0;i<10;i++){
			var b = this.wall_2.create(i*192,300,"wall_2");
			b.anchor.setTo(0, 1);
			b.scale.setTo(4, 4.6);
		}
		this.door = game.add.group();
		this.door.enableBody=true;
		for (var i = 0; i < 5; i++) {
			var a = this.door.create(this.door_x[i], this.door_y[i], "door");
			a.body.immovable=true;
			a.info = "name"+i;
		}
		this.tree=game.add.sprite(0,0,"tree")
		this.tree.scale.setTo(3,3)
		game.physics.arcade.enable(this.tree);
		this.tree.body.immovable = true;
		
		this.king = game.add.sprite(0, game.world.height - 210, "king");


		this.king.animations.add('left', [0, 1, 2], 10, true);
		this.king.animations.add('right', [3, 4, 5], 10, true);

		//this.plat.enableBody = true;
		//36k
		this.king.scale.setTo(6, 6);
		//this.door.scale.setTo(0.6, 0.6);


		game.physics.arcade.enable(this.king);


		this.text=game.add.text(50,50,"Задача этого уровня - найти выход. Но это будет непросто")


		this.king.body.collideWorldBounds = true;

		
		
		this.left = game.add.sprite(50, 600, "left");
		this.right = game.add.sprite(200, 600, "right");
		this.up = game.add.sprite(900, 550, "up");
		this.down = game.add.sprite(900, 680, "down")

		this.up.scale.setTo(1.5, 1.5);
		this.left.scale.setTo(1.5, 1.5);
		this.right.scale.setTo(1.5, 1.5);
		this.down.scale.setTo(1.5, 1.5);

		this.left.inputEnabled = true;
		this.right.inputEnabled = true;
		this.up.inputEnabled = true;
		this.down.inputEnabled = true;

		this.left.events.onInputDown.add(this.func, this);
		this.right.events.onInputDown.add(this.func, this);
		this.up.events.onInputDown.add(this.func, this);
		this.down.events.onInputDown.add(this.func, this)

		this.left.events.onInputUp.add(this.uppelsin, this);
		this.right.events.onInputUp.add(this.uppelsin_2, this);
		this.up.events.onInputUp.add(this.uppelsin, this);
		this.down.events.onInputUp.add(this.uppelsin, this);


		this.down.click = "down";
		this.left.click = "left";
		this.right.click = "right";
		this.up.click = "up";

		game.camera.follow(this.king);
		this.left.fixedToCamera = true;
		this.right.fixedToCamera = true;
		this.up.fixedToCamera = true;
		this.down.fixedToCamera = true;
		this.text.fixedToCamera=true;
	},
	uppelsin: function () {
		Level1.king.body.velocity.x = 0;
		Level1.king.body.velocity.y = 0;
		Level1.king.animations.stop();
		Level1.king.frame = 0;
	},
	uppelsin_2: function () {
		Level1.king.body.velocity.x = 0;
		Level1.king.body.velocity.y = 0;
		Level1.king.animations.stop();
		Level1.king.frame = 4;
	},
	func: function (a) {
		if (a.click == "left") {
			Level1.king.body.velocity.x = -300;
			Level1.king.animations.play('left');
		} else {
			if (a.click == "right") {
				Level1.king.body.velocity.x = 300;
				Level1.king.animations.play('right');
			} else {
				if (a.click == "down") {
					Level1.king.body.velocity.y = 300;
				}
			}
		}
		if (a.click == "up") {
			Level1.king.body.velocity.y = -350;
		}

	},
	update: function () {
		game.physics.arcade.collide(this.king, this.wall_1);
		game.physics.arcade.collide(this.king, this.door, this.move);
		game.physics.arcade.collide(this.king, this.tree);
	
	},
	c:null,
	move:function(a,b){
		console.log(a,b)
		
		if(b.info=="name0"){
			console.log(Level1.c)
			if(Level1.c==false){	
				
				game.state.start("final");
			}
			Level1.king.x=980;
			Level1.king.y=1450;
		} else if(b.info=="name1"){
			Level1.king.x=0;
			Level1.king.y=100;
		} else if(b.info=="name2"){
			Level1.king.x=800;
			Level1.king.y=950;
		} else if(b.info=="name3"){
			var a = Level1.door.create(100, 1300, "door");
			Level1.c=false;
			console.log(this.c)
			a.body.immovable=true;
			a.info="name"+5;
			Level1.king.x=980;
			Level1.king.y=1450;
		}  else if(b.info=="name5"){
			Level1.c=true;
			Level1.king.x=100;
			Level1.king.y=500;
		}
	}
		//} else if(b.info=="name4"){
			//Level1.king.x=980;
			//Level1.king.y=1450;
		
}
