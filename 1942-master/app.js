var hero = {
    x: 300,
    y: 400
}

var enemies = [{x: 50, y:50}, {x:250, y:50}, {x:450, y:250}, {x:550, y:150}, {x:650, y:150}, {x:750, y:150}, {x:850, y:150}];

var bullets = [];

var score = 0;

function displayHero() {
    document.getElementById("hero").style.top = hero.y + "px";
    document.getElementById("hero").style.left = hero.x + "px";
}

function displayEnemies(){
    var output = "";
    for(var i = 0; i < enemies.length; i++){
        if(i % 2 === 0){
            output += "<div class='enemy1' style='top:" + enemies[i].y + "px; left:"  + enemies[i].x + "px;'></div>";
        }
        else{
            output += "<div class='enemy2' style='top:" + enemies[i].y + "px; left:"  + enemies[i].x + "px;'></div>";

        }
        }
        document.getElementById("enemies").innerHTML = output;
        // console.log(output)
    }
    


function moveEnemies(){
    for(var i = 0; i < enemies.length; i++){
        enemies[i].y += 5;
        if(enemies[i].y > 540){
            enemies[i].y = 0;
            enemies[i].x = Math.random()* 500;
        }
    }}

function moveBullets(){
    for(var i = 0; i < bullets.length; i++){
        bullets[i].y -= 10;
        if(bullets[i].y < 5){
            bullets[i] = bullets[bullets.length - 1];
            // bullets.reverse();
            bullets.pop();
            console.log(bullets); 
        }
    }}

    function displayBullets(){
        var output = "";
        for(var i = 0; i < bullets.length; i++){
            output += "<div class='bullet' style='top:" + bullets[i].y + "px; left:"  + bullets[i].x + "px;'></div>"
            document.getElementById("bullets").innerHTML = output;
    }
}


function detectCollision(){
    for(var i = 0; i < bullets.length; i++){
        for(var j = 0; j < enemies.length; j++){
            if(Math.abs(bullets[i].x - enemies[j].x) < 10 && Math.abs(
                bullets[i].y - enemies[j].y) < 10){
                    console.log("bullet", i, " and enemy",j, " collided");
                    score += 10;
                    document.getElementById("score").innerText = score;
                    var audio = new Audio('explode.mp3');
                    audio.play(); 
                    
                }       
        }
    }
}

var x =document.firstElementChild.lastElementChild.firstElementChild.firstElementChild.style.backgroundPosition = "-30px -400px";
console.log(x)


setInterval(gameLoop, 40);

function gameLoop(){
    displayHero();
    moveEnemies();
    displayEnemies();
    moveBullets();
    displayBullets();
    detectCollision();
    // detectHeroCollision()
    
}
document.onkeydown = function(a) {
    if(a.key == "ArrowLeft"){
        hero.x -= 10;
    }
    else if (a.key == "ArrowRight"){
        hero.x += 10;
    }
    else if (a.key == "ArrowUp"){
        hero.y -= 10;
    }
    else if (a.key == "ArrowDown"){
        hero.y += 10;
    }
    else if (a.key ===" "){
        bullets.push({x: hero.x + 6, y: hero.y - 12});
        displayBullets();
    }
    
    // console.log(hero)
}
displayHero();
displayEnemies();
