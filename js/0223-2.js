AFRAME.registerComponent('registerevents',{
    init: function(){
        var marker = this.el;
        // 以下、マーカーを検出時のイベント
        marker.addEventListner('markerFound', function(){
            var markerId = island.id;
            // a-obj-model要素を生成する
            let parkingIns = document.createElement("a-obj-model");
            parkingIns.id = "parkingIns";
            let scene = document.getElementById("scene");
            // a-obj-modelをa-sceneに追加する
            scene.appendChild(parkingIns);
            // objふぁいるとmtlファイルをa-obj-model要素に追加する
            parkingIns.setAttribute("src", "#parkingObj");
            parkingIns.setAttribute("mtl", "#parkingMtl");
            // position, scale, positionの設定
            parkingIns.setAttribute("position", "0 0 -0.07");
             parkingIns.setAttribute("scale", "0.01 0.01 0.01");
             parkingIns.setAttribute("rotation", "0 270 -20");

        })
    }
})