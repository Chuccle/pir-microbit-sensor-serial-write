serial.redirect(
SerialPin.USB_TX,
SerialPin.USB_RX,
BaudRate.BaudRate115200
)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        serial.writeLine("DAT: 1")
    }
    basic.pause(100)
})
