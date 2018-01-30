// 自分でクラスを作成する
class CirclePainter {
    // context: コンテキスト（canvasのcontextとほぼ同じ！）
    // geometry: 描画領域の情報(width, heightsのみ)
    // propeties: CSSプロパティ
    paint(context, geometry, properties) {
        context.fillStyle = 'red';

        const centerX = geometry.width / 2;
        const centerY = geometry.height / 2;
        const radius = 50;

        // 普通のcanvasのように使える
        context.arc(centerX, centerY, radius, 0, Math.PI * 2);
        context.fill();
    }
}

// paint(circle)として登録する
registerPaint('circle', CirclePainter);