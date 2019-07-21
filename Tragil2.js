/*
const myself = {name: 'Aviad' , age: 25 ,
                address: {city: 'PT', street: 'Unterman'} ,
                family: [{name: 'Wife', age: 26},
                          {name: 'Father', age: 56},
                          {name: 'Mother', age: 52},
                          {name: 'Sister', age: 20},
                          {name: 'Brother', age: 15}]}

function print (my){
  for(let n in my){
    if(typeof(my[n]) == "object"){
      console.log(`${n}:`)
      print(my[n])
    }
    else
      if(my[n] == "Array"){
        console.log(`${n}:`)
        for(let i in my[n]){
         print(my[n][i]) 
        }
      }
    else{
      console.log(`${n} : ${my[n]}`)
    }
  }
}


function getAddress(my){
  return my["address"]
}

function printMyName(my){
  console.log(my["name"])
}

function addFamily(name, age){
    myself["family"].push({"name": name, "age": age})
    console.log("relavite added")
}

function setName(name){
  myself["name"]= name
  console.log("name changed")
}

printMyName(myself)
setName("SSSSSS")
print(getAddress(myself))
addFamily('Dvir',35)
print(myself)
*/

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
