// what A is pressed the counter changes by +1, adding a poisitive value to the counter
input.onButtonPressed(Button.A, function () {
    counter += 1
})
// Displays the value that was registered to the counter at the time of pressing A+B
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(counter)
})
// what B is pressed the counter changes by -1, adding a negative value to the counter
input.onButtonPressed(Button.B, function () {
    counter += -1
})
// created by: Adam De Rango
// On spetmeber 27 2022
// This program counts in intervals of one and the displays it
let counter = 0
counter = 0
