(function(){

  var gameOptions = {
    height: 600,
    width: 1000,
    nEnemies: 50,
    padding: 20
  };

  var gameStats = {
    score: 0,
    bestScore: 0,
  };

  // lookup what the heck this means
  // namespace:tagname
  var axes = {
    x: d3.scale.linear().domain([0, 100]).range([0, gameOptions.width]),
    y: d3.scale.linear().domain([0, 100]).range([0, gameOptions.height])
  };
  // if no container does not work add container div
  // what is svg:svg
  var gameBoard = d3.select('.container').append('svg:svg')
                      .attr('width', gameOptions.width)
                      .attr('height', gameOptions.height);




  //write function updateScore
  //write function updateBestScore


  //write class  Player



  var createEnemies = function() {
    return _.range(0, gameOptions.nEnemies).map(function(i) {
      return {
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100
      };
    });
  };

  var render = function(enemy_data){
    var enemies = gameBoard.selectAll('circle.enemy')
              .data(enemy_data, function(d) { return d.id; });

    enemies.enter()
      .append('svg:circle')
        .attr('class', 'enemy')
        .attr('cx', function(enemy){ return axes.x(enemy.x);})
        .attr('cy', function(enemy){ return axes.y(enemy.y);})
        .attr('r', 20);

    enemies.exit().remove();


  };

  var play = function(){
    var gameTurn = function(){
      var newEnemyPostions = createEnemies();
      render(newEnemyPostions);
    };
    gameTurn();
  };

  play();


}).call(this);
