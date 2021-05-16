def pause2():
    basic.pause(100)
def Herzschlag():
    basic.show_icon(IconNames.HEART)
    basic.pause(100)
    basic.show_icon(IconNames.SMALL_HEART)
    basic.pause(100)
Herzschlag()
if input.button_is_pressed(Button.A):
    basic.show_number(0)
if input.button_is_pressed(Button.B):
    basic.show_number(1)
else:
    basic.show_number(2)
for index in range(4):
    basic.show_number(3)
for index2 in range(5):
    basic.show_number(4)
while input.button_is_pressed(Button.A):
    basic.show_number(5)
while input.button_is_pressed(Button.A):
    basic.show_number(6)
    if input.button_is_pressed(Button.B):
        break
for index3 in range(4):
    Herzschlag()
while True:
    pause2()