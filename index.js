//Prompt user to input order using commas.
const flavors = window.prompt('Enter your order.  Separate order using "," - no spaces!', 'vanilla,vanilla,vanilla,strawberry,coffee,coffee')

//Assign flavors to array
const flavorsArr = flavors.split(',')

//orderAmounts function counts the amount of each flavor
function orderAmounts(flavorsInOrder) {
    const order = {}
    for(let i=0; i<flavorsInOrder.length; i++) {
        const type=flavorsInOrder[i]
        if(order[type]===undefined) {
            order[type] = 0
        }
        order[type]++
    }
    return order;
}

//display function displays the amount of each flavor
function display(orderAsObj) {
    console.log(`You ordered:`)
    for(const key in orderAsObj) {
        console.log(`${orderAsObj[key]} ${(key)}`)
    }
}

//Creates an object to hold the count of each flavor
const orderObj = orderAmounts(flavorsArr)

//Calls the function to create the display of the order
display(orderObj)