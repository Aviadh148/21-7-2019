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
