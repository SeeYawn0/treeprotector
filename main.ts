input.onGesture(Gesture.FreeFall, function () {
    while (true) {
        radio.sendString(GPS)
    }
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
let GPS = ""
radio.setGroup(6)
let lat = 52.1818424
let long = 0.1789449
let treefallmsg = "Tree has fallen"
GPS = "" + lat + long + treefallmsg
basic.showString(GPS)
basic.showIcon(IconNames.Yes)
basic.showString("scanning trees...")
