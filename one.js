function draw() {
    var canvas = document.getElementById('tutorial');
    if(canvas.getContext) {
        var ctx = canvas.getContext('2d');
        for(var i= 0; i< 4; i++) {
            for(var j= 0; j< 3; j++) {
                // 圆心坐标
                var x = 50 * j + 50;
                var y = 50 * i + 50;
                var radius = 20;
                ctx.beginPath();
                ctx.moveTo(x + radius, y);
                ctx.arc(x, y, radius, 0, (Math.PI * 2)/ (i + 1 + j), true);
                ctx.fill();
    
            }
        }
    } else {
        console.log('不支持canvas');
    }
}