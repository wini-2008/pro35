class Food {
    constructor() {
        var foodStock;
        var lastfed;
    }

    dog3= loadImage("Milk.png")
  
  feedsog() {
        dog.addImage(dog3);
        foodObj.updateFoodStock(foodObj.getFoodStock()-1);
        database.ref('/').update({
          food : foodObj.getFoodStock(),
          FeedTime :hour()
        });
      }

 addFoods() {
        foods++;
        database.ref('/').update({
            food : foods
        })
      }
      
      display(){
        fill();
        textSize();
        if(lastfed>=12){
          text("LAST FED: "+ lastfed%12+"PM",350,30);
        }
        else if(lastfed === 0){
          text("LAST FED: 12 AM",350,30);
        }
        else{text("LAST FED: "+ lastfed + "AM",350,30);}
      }
    }

  