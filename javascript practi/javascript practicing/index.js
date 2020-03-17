
// var calculation = document.getElementById('calc')

function calculate (){
    var totalBill = document.getElementById('ba').value
    var noOfPeople = document.getElementById('shr').value
    var opinion = document.getElementById('service').value
    document.getElementById('result').innerHTML = 'Bill you shared is ' + totalBill / noOfPeople + '$' + ' &' + ' ' + 'RATINGS = ' + opinion;
}
// onPress()
