var gameOption = {
  width: 700,
  height: 700,
  numberOfEnemy: 50
};

var enemies = [];
for (var i = 0; i < gameOption.numberOfEnemy; i++){
  enemies.push({
    'cx': Math.random() * (gameOption.width ),
    'cy': Math.random() * (gameOption.height ),
    'r': 15
  });
}

var gameBoard = d3.select('body')
                  .append('svg')
                  .attr('width', gameOption.width)
                  .attr('height', gameOption.height)



var circleGroup = gameBoard.append('g')
                           // .attr('width', gameOption.width - 100)
                           // .attr('height', gameOption.height - 100);

var circles = circleGroup.selectAll('circle')
                      .data(enemies)
                      .enter()
                        .append('circle')
                        .attr('cx', function(d){return d.cx;})
                        .attr('cy', function(d){return d.cy;})
                        .attr('r', function(d){return d.r;})
                        .attr('id', function(d, i){ return i;})
                        .style('fill', 'black');


var updateEnemies = function (enemies){
  for (var i = 0; i < enemies.length; i++){
    enemies[i]['cx'] =  Math.random() * (gameOption.width );
    enemies[i]['cy'] =  Math.random() * (gameOption.height);
  }
  return enemies
};


console.log(updateEnemies(enemies));



var tween = function(eCircles){
  eCircles.data(updateEnemies(enemies))
          .transition()
            .duration(1000)
              .attr('cx', function(d){return d.cx;})
              .attr('cy', function(d){return d.cy;});
};

setInterval (function(){
   tween(circles);

}, 2000);








