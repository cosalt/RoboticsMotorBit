Distance = 0
Time = 0
Pause_time = 0
motor_speed = 0
# Left sensor
# Stop

def on_forever():
    global Distance, Time, Pause_time, motor_speed
    Distance = sonar.ping(DigitalPin.P11, DigitalPin.P10, PingUnit.CENTIMETERS)
    Time = 435
    Pause_time = 200
    # Set the motor speed
    motor_speed = 80
    # Set pull-up resistors for the sensors
    pins.set_pull(DigitalPin.P3, PinPullMode.PULL_UP)
    # Right sensor
    pins.set_pull(DigitalPin.P4, PinPullMode.PULL_UP)
    # Middle sensor
    pins.set_pull(DigitalPin.P5, PinPullMode.PULL_UP)
basic.forever(on_forever)

# Left sensor
# Stop

def on_forever2():
    global Distance
    serial.write_line("" + str(Distance))
    Distance = Distance * 1.5
    if Distance <= 10 and Distance != 0:
        # Move forward
        motorbit.freestyle(motor_speed, 0)
        basic.pause(Time)
        # Move forward
        motorbit.freestyle(0, 0)
        basic.pause(Pause_time)
        # Move forward
        motorbit.freestyle(motor_speed, motor_speed)
        basic.pause(Time)
        # Move forward
        motorbit.freestyle(0, 0)
        basic.pause(Pause_time)
        # Move forward
        motorbit.freestyle(0, motor_speed)
        basic.pause(Time)
        # Move forward
        motorbit.freestyle(0, 0)
        basic.pause(Pause_time)
        # Move forward
        motorbit.freestyle(motor_speed, motor_speed)
        basic.pause(Time)
        # Move forward
        motorbit.freestyle(0, 0)
        basic.pause(Pause_time)
        # Move forward
        motorbit.freestyle(0, motor_speed)
        basic.pause(Time)
        # Move forward
        motorbit.freestyle(0, 0)
        basic.pause(Pause_time)
        # Move forward
        motorbit.freestyle(motor_speed, motor_speed)
basic.forever(on_forever2)
