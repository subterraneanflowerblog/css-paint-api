// 自分でクラスを作成する
class CirclePainter {
    // static get inputPropertiesを定義する。
    // ここで配列として返したプロパティを取得できる。
    // 配列には型情報（文字列）を入れる。
    //
    // 型の一覧は以下のURLを参照：
    // https://www.w3.org/TR/css-properties-values-api-1/#supported-syntax-strings
    static get inputArguments() {
        return [
            '<color>'
        ];
    }

    // arguments: CSSから渡された引数
    paint(context, geometry, properties, arguments) {
        // argumentsは引数の配列になっている
        const color = arguments[0].toString();
        context.fillStyle = color;

        const centerX = geometry.width / 2;
        const centerY = geometry.height / 2;
        const radius = 50;

        context.arc(centerX, centerY, radius, 0, Math.PI * 2);
        context.fill();
    }
}

// paint(circle)として登録する
registerPaint('circle', CirclePainter);