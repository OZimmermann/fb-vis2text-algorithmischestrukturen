function pause2() {
    basic.pause(100)
}

function Herzschlag() {
    basic.showIcon(IconNames.Heart)
    basic.pause(100)
    basic.showIcon(IconNames.SmallHeart)
    basic.pause(100)
}

Herzschlag()
Herzschlag()
for (let zaehle = 0; zaehle < 4; zaehle++) {
    Herzschlag()
}
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
for (let index2 = 0; index2 < 5; index2++) {
    basic.showNumber(4)
}
while (input.buttonIsPressed(Button.A)) {
    basic.showNumber(5)
}
for (let index3 = 0; index3 < 4; index3++) {
    Herzschlag()
}
while (true) {
    pause2()
}
while (input.buttonIsPressed(Button.A)) {
    basic.showNumber(6)
    if (input.buttonIsPressed(Button.B)) {
        break
    }
    
}
