
var Menu = {
	
	king: null,
	preload: function () {
		game.load.spritesheet("king", "king.png", 20, 16);
		game.load.image("door", "img/door.png");
		game.load.image("wall_1", "img/wall_1.png", 20, 16);
		game.load.image("wall_2", "img/wall_2.png");
		game.load.image("button", "img/start.png");
        game.load.image("grass","img/grass.png");
        game.load.image("penyk","img/penyk.png")
        game.load.image("tree","img/big_tree.png")
        game.load.image("grass2","img/clear_grass.png")
	},
	create: function () {
		game.physics.startSystem(Phaser.Physics.ARCADE);
		game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
		game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		game.scale.refresh();
		game.world.setBounds(0, 0, 1185, 1500);
		game.stage.backgroundColor = "#c6b9b9";
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		game.world.setBounds(0, 0, 1185, 800);

		this.grass3=game.add.group()
        for(var i=0;i<6;i++){
            var g2=this.grass3.create(i*200,0,"grass2")
            g2.scale.setTo(4,4)
        }
        this.grass3=game.add.group()
        for(var i=0;i<6;i++){
            var g2=this.grass3.create(i*200,250,"grass2")
            g2.scale.setTo(4,4)
        }
        
        this.tree=game.add.sprite(100,70,"tree")
        this.tree.scale.setTo(1.5,1.5)
        
        this.penyk=game.add.sprite(800,120,"penyk")
        
        this.wall_1 = game.add.group();
		this.wall_1.enableBody = true;
		for (var i = 0; i < 10; i++) {
			var a = this.wall_1.create(i * 150, 700, "wall_1");
			a.scale.setTo(1.6, 1.5);
		}
		for (var i = 0; i < 10; i++) {
			var a = this.wall_1.create(i * 150, 500, "wall_1");
			a.scale.setTo(1.6, 1.5);
		}
		this.wall_2 = game.add.group();
		this.wall_2.enableBody = true;
		for (var i = 0; i < 10; i++) {
			var a = this.wall_2.create(i * 150, 600, "wall_2");
			a.scale.setTo(2.5, 1.5);
		}
		this.king = game.add.sprite(550, 560, "king");
		this.king.scale.setTo(5.4);
		game.physics.arcade.enable(this.king);
		
		this.king.enableBody=true;
		this.king.checkWorldBounds = true;
		this.king.events.onOutOfBounds.add(this.start, this);
		
		this.king.animations.add('left', [0, 1, 2], 10, true);
        
        
        
		this.button = game.add.sprite(480, 200, "button");
		this.button.width=200;
		this.button.height=200;
		this.button.inputEnabled = true;
		this.button.events.onInputDown.add(this.func);
        
        
	},
	func:function(){
			Menu.king.body.velocity.x = -300;
			Menu.king.animations.play('left');
		},
	start:function(){
		game.state.start("lev1");
		},
	update: function () {
	}
};
