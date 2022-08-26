/* eslint-disable import/no-extraneous-dependencies */
import react from '@vitejs/plugin-react'
import pxtorem from 'postcss-px2rem'
import { defineConfig } from '@midwayjs/hooks-kit'

import { resolver } from './vite_config'

export default defineConfig({
  vite: {
    css: {
      postcss: {
        plugins: [
          pxtorem({
            remUnit: 37.5, // 设计稿宽度/100，即分成多少份
            unitPrecision: 5, // 小数精度
            // propList: ['font', 'font-size', 'line-height', 'letter-spacing', 'width', 'height'],
            exclude: /node_modules/i
          })
        ]
      },
      preprocessorOptions: {
        scss: {
          additionalData: '@import "src/style/variable/index.scss";'
        },
        less: {
          // https://ant-design.gitee.io/docs/spec/colors-cn 色彩
          modifyVars: {
            'primary-color': '#eb2f96',
            'link-color': '#eb2f96',
            'border-radius-base': '2px'
          },
          javascriptEnabled: true
        }
      }
    },
    resolve: resolver,
    esbuild: {
      jsxFactory: 'h',
      jsxFragment: 'Fragment'
    },
    plugins: [react()]
  }
})
