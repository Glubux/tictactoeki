let x = 2;
let y = 2;

basic.forever(function () {
    let x_acceleration = input.acceleration(Dimension.X);
    let y_acceleration = input.acceleration(Dimension.Y);
    let x_move = 0;
    let y_move = 0;

    if (x_acceleration > 400) {
        x_move = 1;
    } else if (x_acceleration < -400) {
        x_move = -1;
    }

    if (y_acceleration > 400) {
        y_move = 1;
    } else if (y_acceleration < -400) {
        y_move = -1;
    }

    if (x_move != 0 || y_move != 0) {
        x = Math.max(1, Math.min(3, x + x_move));
        y = Math.max(1, Math.min(3, y + y_move));
        basic.clearScreen();
        led.plotBrightness(x, y, 100);
        basic.pause(500);
    }
});
