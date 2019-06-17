cc.Class({
    extends: cc.Component,

    properties: {
        scoreLabel: cc.Label,
        score: 0,
        blackPrefab: cc.Prefab,
        gap: 20,
        bg:cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        this.drawBlock()
        console.log('cc',cc);
        
    },

    drawBlock(){
        console.log(this);
        this.blockSize = ( cc.winSize.width - this.gap * 5 ) / 4;
        let x = this.gap + this.blockSize / 2;
        let y = this.blockSize;
        let length = 4;
        let positions = [];
        for (let i = 0; i < length; i++) {
            positions.push([0, 0, 0, 0]);
            for (let j = 0; j < length; j++) {
                positions[i][j] = cc.v2(x+j*this.blockSize + this.gap*j, y+i*this.blockSize + this.gap*i)
                this.draw(x+j*this.blockSize + this.gap*j, y+i*this.blockSize + this.gap*i, 0)
            }
            
        }
        cc.log(positions)
        
    },
    draw(x, y, number) {
        let block = cc.instantiate(this.blackPrefab);
        block.width = this.blockSize;
        block.height = this.blockSize;
        this.bg.addChild(block);
        block.setPosition(cc.v2(x, y));
        block.getComponent('block').setNumber(number);
    }
    // update (dt) {},
});
