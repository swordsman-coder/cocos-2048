import color from "color";

cc.Class({
    extends: cc.Component,

    properties: {
        numberLabel: cc.Label
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },
    setNumber(number) {
        if(number === 0) {
            this.numberLabel.node.active = false;
        }
        if(number in color){
            this.numberLabel.string = number;
            this.node.color = color[number];
        }
    }
});
