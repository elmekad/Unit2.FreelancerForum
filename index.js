const freelancers = [
    { name: "Dr. Slice", price: 25, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" },
    { name: "Prof. Possibility", price: 43, occupation: "teacher" },
    { name: "Prof. Prism", price: 81, occupation: "teacher" },
    { name: "Dr. Impulse", price: 43, occupation: "teacher" },
    { name: "Prof. Spark", price: 76, occupation: "programmer" },
    { name: "Dr. Wire", price: 47, occupation: "teacher" },
    { name: "Prof. Goose", price: 72, occupation: "driver" },
  ];

let averageprice = 0;
document.addEventListener('DOMContentLoaded', () => {
function createTableRow(freelancer) {
  const row = document.createElement("tr");

  const name = document.createElement("td");
  name.textContent = freelancer.name;

  const occupation = document.createElement("td");
  occupation.textContent = freelancer.occupation;

  const price = document.createElement("td");
  price.textContent = freelancer.price;

  row.append(name);
  row.append(occupation);
  row.append(price);

  return row;
}

let index = 0 
function setAveragePrice(index){
    let sum = 0
    for (let i = 0; i< index; i++) {
        sum += freelancers[i].price;
    }
    console.log(sum/index);
    return sum / index
}


   let timer = setInterval (() => {
        let nextRow = createTableRow(freelancers[index])
        index += 1
    
        const table = document.querySelector('table')
        table.append(nextRow)
    
        let average = setAveragePrice(index)
    
        const sp = document.querySelector('#avgpricespan')
        if (sp) {
            sp.textContent = average.toFixed(2);
        }

        if (index > freelancers.length - 1){
            clearInterval(timer)
        }
    
    }, 1000);});