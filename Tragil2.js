console.clear()

function createMoblie(model, size, price, number){
  var result = { }
  result.model= model
  result.size= size
  result.price= price
  result.number= number
  
  return result
}

function Moblie(model, size, price, number){
//  this.model= model
  this.size= size
//  this.price= price
  this.number= number
  
  let _price= 0
  let _model= "No model"
  
  this.setPrice = (newPrice) => {if(price >= _price){
                                _price= price
                                console.log(`price sets to ${_price}`)}
                                }
  this.setPrice(price)
  this.getPrice = () => {return _price}
  
  this.setModel = (newModel) => {if(model.length >= 4){
                                _model= model
                                console.log(`model's name sets to ${_model}`)}
                                }
  this.setModel(model)
  this.getModel = () => {return _model}
}

function print(obj){
  console.log(obj)
}

let phone1 = createMoblie("Xiaomi",6.2, 500, "054-8120013")
print(phone1)
let phone2= new Moblie("iPhone", 5.8, 1200, "054-2311112")
print(phone2)
