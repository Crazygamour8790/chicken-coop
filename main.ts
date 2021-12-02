basic.forever(function () {
    if (input.lightLevel() > 50) {
        basic.showIcon(IconNames.Yes)
        Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo1, 0)
    }
    if (input.lightLevel() < 50) {
        basic.showIcon(IconNames.No)
        Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo1, 180)
    }
})
