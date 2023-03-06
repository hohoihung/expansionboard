TM1650.on()
TM1650.clear()
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    serial.writeValue("Sonar", sonar.ping(
    DigitalPin.P12,
    DigitalPin.P13,
    PingUnit.Centimeters
    ))
    TM1650.showNumber(sonar.ping(
    DigitalPin.P12,
    DigitalPin.P13,
    PingUnit.Centimeters
    ))
})
