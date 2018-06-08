var Level2 = {
    wall_2: null,
    water: null,
    water_x: [0, 0, 0, 0, 0],
    water_y: [1000, 1000, 1000, 1000, 1000],
    wall_1: null,
    table_x: [550, 0],
    table_y: [1300, 0],
    water_x: [0, 180, 533, 715],
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
        game.load.image("text_table", "img/text_table.png");
        game.load.image("chest", "img/chest.png");
        game.load.image("board", "img/board.png");
        game.load.image("text1", "img/text1.png");
        game.load.image("text2", "img/text2.png");
        game.load.image("text3", "img/text3.png");
        game.load.image("text4", "img/text4.png");
        game.load.image("text5", "img/text5.png");
        game.load.image("text6", "img/text6.png");
        game.load.image("flower", "img/flower.png");
        game.load.image("cover", "img/cover.png");
        game.load.image("fence2", "img/fence2.png")
        game.load.image("list", "img/list.png")
        game.load.image("text7", "img/text7.png")
        game.load.image("text8", "img/text8.png")
        game.load.image("button0", "img/0.png")
        game.load.image("button1", "img/1.png");
        game.load.image("button2", "img/2.png");
        game.load.image("button3", "img/3.png");
        game.load.image("button4", "img/4.png");
        game.load.image("button5", "img/5.png");
        game.load.image("button6", "img/6.png");
        game.load.image("button7", "img/7.png");
        game.load.image("button8", "img/8.png");
        game.load.image("cancel", "img/cancel.png");
        game.load.image("text9", "img/text9.png");
        game.load.image("text10", "img/text10.png");
        game.load.image("text11", "img/text11.png")
        game.load.image("text12", "img/text12.png")
    },
    create: function () {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.refresh();
        game.world.setBounds(0, 0, 1185, 1500)
        game.stage.backgroundColor = "#c6b9b9";

        this.wall_2 = game.add.group();
        for (var i = 0; i < 7; i++) {
            var b = this.wall_2.create(i * 180, 800, "wall_2");
            b.scale.setTo(2.8, 2.5);
        }

        this.water = game.add.group();
        this.water.enableBody = true;
        for (var i = 0; i < 4; i++) {
            var a = this.water.create(this.water_x[i], 1215, "water");
            a.body.immovable = true;
            a.scale.setTo(2, 2);
        }




        this.wall_2 = game.add.group();
        for (var i = 0; i < 7; i++) {
            var b = this.wall_2.create(i * 180, 1345, "wall_2");
            b.scale.setTo(2.8, 2.5);
        }
        this.wall_2 = game.add.group();
        for (var i = 0; i < 7; i++) {
            var b = this.wall_2.create(i * 180, 925, "wall_2");
            b.scale.setTo(2.8, 2.5);
        }


        this.wall_1 = game.add.group();
        this.wall_1.enableBody = true;
        for (var i = 0; i < 5; i++) {
            var c = this.wall_1.create(i * 180, 1085, "wall_1");
            c.body.immovable = true;
            c.scale.setTo(2, 2);
        }
        for (var i = 0; i < 6; i++) {
            var c = this.wall_1.create(i * 190, 675, "wall_1");
            c.body.immovable = true;
            c.scale.setTo(2.5, 2);
        }
        for (var i = 0; i < 6; i++) {
            var c = this.wall_1.create(i * 190, 575, "wall_1");
            c.body.immovable = true;
            c.scale.setTo(2.5, 2);
        }
        for (var i = 0; i < 6; i++) {
            var c = this.wall_1.create(i * 190, 475, "wall_1");
            c.body.immovable = true;
            c.scale.setTo(2.5, 2);
        }
        for (var i = 0; i < 6; i++) {
            var c = this.wall_1.create(i * 190, 375, "wall_1");
            c.body.immovable = true;
            c.scale.setTo(2.5, 2);
        }
        this.cover = game.add.sprite(80, 810, "cover");
        this.cover.scale.setTo(6, 2.2)

        this.floor_chest = game.add.sprite(370, 1215, "wall_2");
        this.floor_chest.scale.setTo(2.5, 2.1);

        this.chest = game.add.sprite(415, 1240, "chest");
        this.chest.scale.setTo(4.3, 4.3);
        game.physics.arcade.enable(this.chest);
        this.chest.body.immovable = true;
        this.chest.info = "chest";

        this.lead = game.add.sprite(870, 1075, "lead");
        this.lead.scale.setTo(8.5, 5.4);

        this.board = game.add.sprite(100, 730, "board");
        this.board.scale.setTo(1.5, 1.2);
        game.physics.arcade.enable(this.board);
        this.board.body.immovable = true;
        this.board.info = "board";

        this.table = game.add.sprite(550, 1300, "text_table");
        game.physics.arcade.enable(this.table);
        this.table.info = "start_table";
        this.table.scale.setTo(5, 5);
        this.table.body.immovable = true;

        this.flower = game.add.sprite(10, 730, "flower");
        game.physics.arcade.enable(this.flower);
        this.flower.body.immovable = true;
        this.flower.scale.setTo(1.5, 1.5)

        this.door = game.add.sprite(400, 630, "door");
        this.door.scale.setTo(1, 0.8);
        game.physics.arcade.enable(this.door);
        this.door.body.immovable = true;
        this.door.info = "door";

        this.king = game.add.sprite(0, game.world.height - 210, "king");


        this.king.animations.add('left', [0, 1, 2], 10, true);
        this.king.animations.add('right', [3, 4, 5], 10, true);

        //this.plat.enableBody = true;
        //36k
        this.king.scale.setTo(6, 6);
        //this.door.scale.setTo(0.6, 0.6);


        game.physics.arcade.enable(this.king);

        this.king.body.collideWorldBounds = true;

        this.fence = game.add.group();
        for (var i = 0; i < 15; i++) {
            var e = this.fence.create(i * 60, 1000, "fence2")
            e.scale.setTo(1, 1.3)
        }

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



    },

    uppelsin: function () {
        Level2.king.body.velocity.x = 0;
        Level2.king.body.velocity.y = 0;
        Level2.king.animations.stop();
        Level2.king.frame = 0;
    },
    uppelsin_2: function () {
        Level2.king.body.velocity.x = 0;
        Level2.king.body.velocity.y = 0;
        Level2.king.animations.stop();
        Level2.king.frame = 4;
    },
    func: function (a, b) {
        if (a.click == "left") {
            Level2.king.body.velocity.x = -300;
            Level2.king.animations.play('left');
        } else {
            if (a.click == "right") {
                Level2.king.body.velocity.x = 300;
                Level2.king.animations.play('right');
            } else {
                if (a.click == "down") {
                    Level2.king.body.velocity.y = 300;
                }
            }
        }
        if (a.click == "up") {
            Level2.king.body.velocity.y = -350;
        }
    },






    count: 0,
    key: false,
    score_true: [1, 0, 7, 8, 2, 4],
    score: [],
    list: null,
    text: null,
    text2: null,
    action: false,
    action2: false,
    cancel: null,
    button0: null,
    button1: null,
    button2: null,
    button3: null,
    button4: null,
    button5: null,
    button6: null,
    button7: null,
    button8: null,
    complete: false,
    time_text: function () {
        Level2.text.kill();
    },
    time_double_kill: function () {
        Level2.text2.kill();
    },
    time_text3: function () {
        Level2.text.kill();
        Level2.text2 = game.add.sprite(250, 630, "text5")
        Level2.text2.scale.setTo(0.5, 0.5);
        setTimeout(Level2.time_double_kill, 3500);
    },
    add_list: function () {
        Level2.text.kill();
        Level2.list = game.add.sprite(380, 700, "list");
        setTimeout(Level2.kill_list, 3500);
    },
    kill_list: function () {
        Level2.action = true;
        Level2.action2 = true;
        Level2.list.kill();
        Level2.text = game.add.sprite(50, 700, "text7")
        Level2.text.scale.setTo(0.5, 0.5);
        setTimeout(Level2.time_text, 3500);
    },
    time_text4: function () {
        Level2.text.kill();
        Level2.text2 = game.add.sprite(215, 1200, "text4");
        Level2.text2.scale.setTo(0.5, 0.5);
        setTimeout(Level2.time_double_kill, 2000);
    },
    time_text5:function(){
        game.state.start("final2");
    },
    funcBtn0: function () {
        Level2.count++
            Level2.score.push(Level2.button0.id)
    },
    funcBtn1: function () {
        Level2.count++
            Level2.score.push(Level2.button1.id)
    },
    funcBtn2: function () {
        Level2.count++
            Level2.score.push(Level2.button2.id)
    },
    funcBtn3: function () {
        Level2.count++
            Level2.score.push(Level2.button3.id)
    },
    funcBtn4: function () {
        Level2.count++
            Level2.score.push(Level2.button4.id)
    },
    funcBtn5: function () {
        Level2.count++
            Level2.score.push(Level2.button5.id)
    },
    funcBtn6: function () {
        Level2.count++
            Level2.score.push(Level2.button6.id)
    },
    funcBtn7: function () {
        Level2.count++
            Level2.score.push(Level2.button7.id)
    },
    funcBtn8: function () {
        Level2.count++
            Level2.score.push(Level2.button8.id)
    },
    cancelFunc: function (a) {
        if (a.click == "cancel") {
            Level2.button0.kill();
            Level2.button1.kill();
            Level2.button2.kill();
            Level2.button3.kill();
            Level2.button4.kill();
            Level2.button5.kill();
            Level2.button6.kill();
            Level2.button7.kill();
            Level2.button8.kill();
            Level2.cancel.kill()
        }
    },
    buble: function (a, b) {
        console.log(a, b);
        if (b.info == "board") {
            if (Level2.action2 === false) {
                Level2.text = game.add.sprite(0, 700, "text1")
                Level2.text.scale.setTo(0.5, 0.5);
                setTimeout(Level2.add_list, 4500)
            }
            if (Level2.action2 === true) {
                Level2.text = game.add.sprite(0, 700, "text8")
                Level2.text.scale.setTo(0.5, 0.5);
                setTimeout(Level2.time_text, 2500)
            }

        }
        if (b.info == "start_table") {
            Level2.text = game.add.sprite(350, 1200, "text2")
            Level2.text.scale.setTo(0.5, 0.5);
            setTimeout(Level2.time_text, 4500);
        }
        if (b.info == "door") {
            if(Level2.key===true){
                Level2.text = game.add.sprite(180, 630, "text12")
                Level2.text.scale.setTo(0.5, 0.5);
                setTimeout(Level2.time_text5, 2500);
                
            } else{
                Level2.text = game.add.sprite(400, 630, "text6")
                Level2.text.scale.setTo(0.5, 0.5);
                setTimeout(Level2.time_text3, 2500);
            }
        }
        if (b.info == "chest") {
            if (Level2.action === true && Level2.complete === false) {
                Level2.text = game.add.sprite(15, 1180, "text3");
                Level2.text.scale.setTo(0.5, 0.5);
                setTimeout(Level2.time_text4, 3500);
            } else if (Level2.action === false && Level2.complete === false) {
                Level2.button0 = game.add.sprite(150, 720, "button0");
                Level2.button1 = game.add.sprite(450, 720, "button1");
                Level2.button2 = game.add.sprite(750, 720, "button2");
                Level2.button3 = game.add.sprite(150, 980, "button3");
                Level2.button4 = game.add.sprite(450, 980, "button4");
                Level2.button5 = game.add.sprite(750, 980, "button5");
                Level2.button6 = game.add.sprite(150, 1240, "button6");
                Level2.button7 = game.add.sprite(450, 1240, "button7");
                Level2.button8 = game.add.sprite(750, 1240, "button8");

                Level2.button0.id = 0
                Level2.button1.id = 1
                Level2.button2.id = 2
                Level2.button3.id = 3
                Level2.button4.id = 4
                Level2.button5.id = 5
                Level2.button6.id = 6
                Level2.button7.id = 7
                Level2.button8.id = 8


                //Level2.button1.info = "1";
                // Level2.button0.info = "2";
                //Level2.button7.info = "3";
                //Level2.button8.info = "4";
                //Level2.button2.info = "5";
                //Level2.button4.info = "6";
                Level2.cancel = game.add.sprite(20, 720, "cancel");
                Level2.cancel.click = "cancel";
                Level2.button0.click = "b0";
                Level2.button1.click = "b1";
                Level2.button2.click = "b2";
                Level2.button3.click = "b3";
                Level2.button4.click = "b4";
                Level2.button5.click = "b5";
                Level2.button6.click = "b6";
                Level2.button7.click = "b7";
                Level2.button8.click = "b8";
                Level2.cancel.inputEnabled = true;
                Level2.button0.inputEnabled = true;
                Level2.button1.inputEnabled = true;
                Level2.button2.inputEnabled = true;
                Level2.button3.inputEnabled = true;
                Level2.button4.inputEnabled = true;
                Level2.button5.inputEnabled = true;
                Level2.button6.inputEnabled = true;
                Level2.button7.inputEnabled = true;
                Level2.button8.inputEnabled = true;
                Level2.cancel.events.onInputDown.add(Level2.cancelFunc, this);
                Level2.button8.events.onInputDown.add(Level2.funcBtn8, this);
                Level2.button0.events.onInputDown.add(Level2.funcBtn0, this);
                Level2.button1.events.onInputDown.add(Level2.funcBtn1, this);
                Level2.button2.events.onInputDown.add(Level2.funcBtn2, this);
                Level2.button3.events.onInputDown.add(Level2.funcBtn3, this);
                Level2.button4.events.onInputDown.add(Level2.funcBtn4, this);
                Level2.button5.events.onInputDown.add(Level2.funcBtn5, this);
                Level2.button6.events.onInputDown.add(Level2.funcBtn6, this);
                Level2.button7.events.onInputDown.add(Level2.funcBtn7, this);
            }
            if (Level2.complete === true) {
                Level2.text = game.add.sprite(30, 1180, "text11")
                Level2.text.scale.setTo(0.5, 0.5)
                setTimeout(Level2.time_text, 3500);
            }

        }
    
    },
    update: function () {
        game.physics.arcade.collide(this.king, this.wall_1);
        game.physics.arcade.collide(this.king, this.water)
        game.physics.arcade.collide(this.king, this.board, this.buble);
        game.physics.arcade.collide(this.king, this.table, this.buble);
        game.physics.arcade.collide(this.king, this.door, this.buble);
        game.physics.arcade.collide(this.king, this.chest, this.buble);

        if (Level2.count == 6) {
            for (var i = 0; i < Level2.score.length; i++) {
                if (Level2.score_true[0] == Level2.score[0] && Level2.score_true[1]==Level2.score[1] && Level2.score_true[2]==Level2.score[2] && Level2.score_true[3]==Level2.score[3] && Level2.score_true[4]==Level2.score[4] && Level2.score_true[5]==Level2.score[5]) {
                    console.log("ok");
                    Level2.count = 0;
                    Level2.score = [];
                    Level2.button0.kill();
                    Level2.button1.kill();
                    Level2.button2.kill();
                    Level2.button3.kill();
                    Level2.button4.kill();
                    Level2.button5.kill();
                    Level2.button6.kill();
                    Level2.button7.kill();
                    Level2.button8.kill();
                    Level2.cancel.kill();
                    Level2.complete = true;
                } else {
                    console.log("false")
                    Level2.button0.kill();
                    Level2.button1.kill();
                    Level2.button2.kill();
                    Level2.button3.kill();
                    Level2.button4.kill();
                    Level2.button5.kill();
                    Level2.button6.kill();
                    Level2.button7.kill();
                    Level2.button8.kill();
                    Level2.cancel.kill()
                    Level2.complete = false;
                    Level2.count = 0;
                    Level2.score = [];
                }
                if (Level2.complete === true) {
                    Level2.text = game.add.sprite(30, 1180, "text9")
                    Level2.text.scale.setTo(0.5, 0.5)
                    Level2.key = true;
                    
                    setTimeout(Level2.time_text, 3500);
                } else if (Level2.complete === false) {
                    Level2.text = game.add.sprite(280, 1180, "text10")
                    Level2.text.scale.setTo(0.5, 0.5);
                    
                    Level2.key = false;
                    setTimeout(Level2.time_text, 2500);
                }
            }
        }

    },

}
