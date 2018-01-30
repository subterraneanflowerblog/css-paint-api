// 自分でクラスを作成する
class CirclePainter {
    // static get inputPropertiesゲッターを定義する。
    // ここで配列として返したプロパティを取得できる。
    static get inputProperties() {
        return [
            '--circle-color'
        ];
    }

    // context: コンテキスト（canvasのcontextとほぼ同じ！）
    // geometry: 描画領域の情報(width, heightsのみ)
    // propeties: CSSプロパティ
    paint(context, geometry, properties) {
        // propertiesのgetメソッドを使って値を取得する
        // CSSStyleValueが返ってくるのでtoStringで文字列にしてやる
        const color = properties.get('--circle-color').toString();
        context.fillStyle = color;

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