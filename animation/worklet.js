class CirclePainter {
    static get inputProperties() {
        return ['--circle-radius'];
    }

    paint(context, geometry, properties) {
        context.fillStyle = 'red';

        const centerX = geometry.width / 2;
        const centerY = geometry.height / 2;

        // --cirlce-raidus変数を変化させアニメーションする
        const radius = parseFloat(properties.get('--circle-radius').toString());

        context.arc(centerX, centerY, radius, 0, Math.PI * 2);
        context.fill();
    }
}

// paint(circle)として登録する
registerPaint('circle', CirclePainter);