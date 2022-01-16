
let carsArr = [];
let globalLine = 6;
let movingInt,lives=5;

function carSample(id0,y0){
            this.src = "images/avto"+(1+Math.floor(Math.random()*5))+".png";
        
            this.id = id0;
            this.y =y0;
            this.x =1200+Math.floor(Math.random()*700);
            this.speed =3+Math.floor(Math.random()*3);
            this.show = function(){
                document.getElementById("container").innerHTML+="<img id='"+this.id+"' src='"+this.src+"' class='cars'>"
            
            }
            this.locate = function(){
                document.getElementById(this.id).style.top = this.y+"px";
                document.getElementById(this.id).style.left = this.x+"px";
            }
            this.move = function(){
                moveFunc(this);
            }
            this.stop = function(){
                this.x=-141;
            }
            this.genSpeed = function(){
                this.speed =3+Math.floor(Math.random()*3);
            }
            this.genCar = function(){
                this.src ="images/avto"+(1+Math.floor(Math.random()*5))+".png";
            document.getElementById(this.id).src = this.src;
            }
}

let myLine = 6;

function myAvtoSample(id0,src0,y0,x0){
            this.id = id0;
            this.src = src0;
            this.y = y0;
            this.x = x0;
            this.show = function(){
                document.getElementById("container").innerHTML+="<img id='"+this.id+"' src='"+this.src+"' class='cars'>"
            }
            this.locate = function(){
                document.getElementById(this.id).style.top = this.y+"px";
                document.getElementById(this.id).style.left = this.x+"px";
            }
            this.keys = function(){
                document.addEventListener("keydown",(e)=>{
                   
                    if(e.key=="ArrowDown"){
                      
                       myLine++;
                       if(myLine==7) myLine=1;
                    }
                    if(e.key=="ArrowUp"){
                        myLine--;
                       if(myLine==0) myLine=6;
                     }
                    myCarLine(this,myLine);

                    if(e.key=="ArrowRight"){
                        if(this.x<=1030)this.x+=7;
                       this.locate();
                     }
                     if(e.key=="ArrowLeft"){
                        if(this.x>=0)this.x-=7;
                       this.locate();
                     }


                })
                
            }
            let left =0;
            document.getElementById("lives").innerHTML ="Chances: "+lives;

            this.dtp = function(){
               
                left = document.getElementById("car"+globalLine).style.left;
               
                left = left.slice(0,-2);    
              
                    if((this.x+130>=(+left)&&this.x-140<=left)&&lives>0){
                            carsArr[globalLine-1].stop();
                            lives--;
                            document.getElementById("lives").innerHTML ="Chances: "+lives;
                            if(lives==0){
                                document.getElementById("myCar").style.display = "none";
                                clearInterval(timer);

                                
                                document.getElementById("yourTime").innerHTML="Your Time: "+timing+" sec";
                                document.getElementById("cover").style.display = "flex";
                            }
                    }

                
            }
}



carsArr.push(new carSample("car1",50));
carsArr.push(new carSample("car2",130));
carsArr.push(new carSample("car3",280));
carsArr.push(new carSample("car4",350));
carsArr.push(new carSample("car5",500));
carsArr.push(new carSample("car6",580));
carsArr.push(new myAvtoSample("myCar","images/avto.png",580,50));

// let myAvto = new myAvtoSample("myCar");


for(let i=0;i<carsArr.length;i++){
    carsArr[i].show();
    carsArr[i].locate();
    if(i!=6)carsArr[i].move();

}
carsArr[6].keys();
// carsArr[1].show();
// carsArr[1].locate();

//     carsArr[1].move();

        function moveFunc(elem){
           
          setInterval(function(){
                elem.x-=elem.speed;
               
                if(elem.x<=-141){
                elem.x =1200+Math.floor(Math.random()*700);
                elem.genSpeed();
                elem.genCar();
                }
                document.getElementById(elem.id).style.left = elem.x+"px";
                
            },10)
            
        }


        function myCarLine(elem,line){
            
            if(line==1)elem.y=50;
            if(line==2)elem.y=130;
            if(line==3)elem.y=280;
            if(line==4)elem.y=350;
            if(line==5)elem.y=500;
            if(line==6)elem.y=580;
            globalLine = line;
            elem.locate();
           
        }
        
        setInterval(function(){
            carsArr[6].dtp();
            
        },10)

        let dateStart = new Date();
        let dateNow, timing,minute = 0;;

        let timer = setInterval(function(){
            dateNow = new Date();
            timing = Math.floor((dateNow-dateStart)/1000);
          
            document.getElementById("time").innerHTML =timing+" sec";
        },1000)