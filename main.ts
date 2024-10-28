let Distance = 0
let Time = 0
let Pause_time = 0
let motor_speed = 0
// Left sensor
// Stop
basic.forever(function () {
    Distance = sonar.ping(
    DigitalPin.P11,
    DigitalPin.P10,
    PingUnit.Centimeters
    )
    Time = 435
    Pause_time = 200
    // Set the motor speed
    motor_speed = 80
    // Set pull-up resistors for the sensors
    pins.setPull(DigitalPin.P3, PinPullMode.PullUp)
    // Right sensor
    pins.setPull(DigitalPin.P4, PinPullMode.PullUp)
    // Middle sensor
    pins.setPull(DigitalPin.P5, PinPullMode.PullUp)
})
// Left sensor
// Stop
basic.forever(function () {
    serial.writeLine("" + Distance)
    Distance = Distance * 1.5
    if (Distance <= 10 && Distance != 0) {
        // Move forward
        motorbit.freestyle(motor_speed, 0)
        basic.pause(525)
        // Move forward
        motorbit.freestyle(0, 0)
        basic.pause(Pause_time)
        // Move forward
        motorbit.freestyle(motor_speed, motor_speed)
        basic.pause(Time)
        // Move forward
        motorbit.freestyle(0, 0)
        basic.pause(Pause_time)
        // Move forward
        motorbit.freestyle(0, motor_speed)
        basic.pause(525)
        // Move forward
        motorbit.freestyle(0, 0)
        basic.pause(Pause_time)
        // Move forward
        motorbit.freestyle(motor_speed, motor_speed)
        basic.pause(Time)
        // Move forward
        motorbit.freestyle(0, 0)
        basic.pause(Pause_time)
        // Move forward
        motorbit.freestyle(0, motor_speed)
        basic.pause(525)
        // Move forward
        motorbit.freestyle(0, 0)
        basic.pause(Pause_time)
        // Move forward
        motorbit.freestyle(motor_speed, motor_speed)
        basic.pause(Time)
        // Move forward
        motorbit.freestyle(0, 0)
        basic.pause(Pause_time)
        // Move forward
        motorbit.freestyle(motor_speed, 0)
        basic.pause(525)
        // Move forward
        motorbit.freestyle(0, 0)
        basic.pause(Pause_time)
        // Move forward
        motorbit.freestyle(motor_speed, motor_speed)
    }
})
