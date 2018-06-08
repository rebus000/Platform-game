var Final={
	text:null,
	preload:function(){
		game.load.image("button","img/start.png")
	},
	create:function(){
		this.text=game.add.text(350,200,"Congratulations! Level 1  is passed");
		this.button = game.add.sprite(480, 300, "button");
		this.button.width=200;
		this.button.height=200;
		this.button.inputEnabled = true;
		this.button.events.onInputDown.add(this.start);
	},
	start:function(){
		game.state.add("lev2",Level2);
		game.state.start("lev2");
		},
	update:function(){
		
	}
}