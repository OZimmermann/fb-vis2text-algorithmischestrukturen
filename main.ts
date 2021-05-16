function pause2 () {
    basic.pause(100)
}
function Herzschlag () {
    basic.showIcon(IconNames.Heart)
    basic.pause(100)
    basic.showIcon(IconNames.SmallHeart)
    basic.pause(100)
}
Herzschlag()
if (input.buttonIsPressed(Button.A)) {
    basic.showNumber(0)
}
if (input.buttonIsPressed(Button.B)) {
    basic.showNumber(1)
} else {
    basic.showNumber(2)
}
for (let index = 0; index < 4; index++) {
    basic.showNumber(3)
}
for (let index = 0; index < 5; index++) {
    basic.showNumber(4)
}
while (input.buttonIsPressed(Button.A)) {
    basic.showNumber(5)
}
while (input.buttonIsPressed(Button.A)) {
    basic.showNumber(6)
    if (input.buttonIsPressed(Button.B)) {
        break;
    }
}
for (let index = 0; index < 4; index++) {
    Herzschlag()
}
while (true) {
    pause2()
}
