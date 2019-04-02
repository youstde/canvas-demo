// function draw(id) {
//     var ctx = document.getElementById(id).getContext('2d');
//     for (var i=0;i<6;i++){
//       for (var j=0;j<6;j++){
//         ctx.fillStyle = 'rgb(' + Math.floor(255-42.5*i) + ',' + 
//                          Math.floor(255-42.5*j) + ',0)';
//         ctx.fillRect(j*25,i*25,25,25);
//       }
//     }
//   }

function draw(id) {
    var ctx = document.getElementById(id).getContext('2d');
    for (var i=0;i<6;i++){
      for (var j=0;j<6;j++){
        ctx.strokeStyle = 'rgb(0,' + Math.floor(255-42.5*i) + ',' + 
                         Math.floor(255-42.5*j) + ')';
        ctx.beginPath();
        ctx.arc(12.5+j*25,12.5+i*25,10,0,Math.PI*2,true);
        ctx.stroke();
      }
    }
  }


//   function draw(id) {
//     var ctx = document.getElementById(id).getContext('2d');
//     // 画背景
//     ctx.fillStyle = '#FD0';
//     ctx.fillRect(0,0,75,75);
//     ctx.fillStyle = '#6C0';
//     ctx.fillRect(75,0,75,75);
//     ctx.fillStyle = '#09F';
//     ctx.fillRect(0,75,75,75);
//     ctx.fillStyle = '#F30';
//     ctx.fillRect(75,75,75,75);
//     ctx.fillStyle = '#FFF';
  
//     // 设置透明度值
//     ctx.globalAlpha = 0.2;
  
//     // 画半透明圆
//     for (var i=0;i<7;i++){
//         ctx.beginPath();
//         ctx.arc(75,75,10+10*i,0,Math.PI*2,true);
//         ctx.fill();
//     }
//   }