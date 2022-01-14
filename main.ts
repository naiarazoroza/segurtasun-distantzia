radio.onReceivedNumber(function (receivedNumber) {
    if (radio.receivedPacket(RadioPacketProperty.SignalStrength) > -60) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
    if (radio.receivedPacket(RadioPacketProperty.SignalStrength) < -20) {
        basic.showIcon(IconNames.Sad)
    }
})
radio.setGroup(7)
basic.forever(function () {
    radio.sendNumber(0)
    radio.setTransmitPower(7)
})
