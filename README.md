# Sassの変数を環境変数で切り替える

スクラップ - Zenn
[https://zenn.dev/rabbit/scraps/9449140a9398e5](https://zenn.dev/rabbit/scraps/9449140a9398e5)

:::message
前提として、既にSassが導入されていること。
:::

# 環境変数の追加
環境別環境変数ファイルの作成

```scss:src/styles/var.development.scss
$env: development;
```

```scss:src/styles/var.production.scss
$env: production;
```

`next.config.js`のsassOptionsに`prependData`を記述

```diff js:next.config.js
  const path = require('path')

  /** @type {import('next').NextConfig} */
  const nextConfig = {
    reactStrictMode: true,
    sassOptions: {
      includePaths: [path.join(__dirname, 'src/styles')],
+     additionalData: `@use "var.${process.env.NODE_ENV}.scss" as environment;`,
    },
  }

  module.exports = nextConfig
```

他ファイルで変数を利用

```scss:src/styles/globals.scss
html {
  --env: #{environment.$env};
}
```
`--env: development;` or `--env: production;`
