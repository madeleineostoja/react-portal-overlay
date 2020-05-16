import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@wessberg/rollup-plugin-ts';
import peerDeps from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

const extensions = ['.ts', '.tsx'];

export default [
  {
    input: 'src/index.tsx',
    output: [
      {
        file: pkg.main,
        name: pkg.name,
        format: 'cjs',
        sourcemap: true
      },
      {
        file: pkg.module,
        name: pkg.name,
        format: 'esm',
        sourcemap: true
      }
    ],
    plugins: [
      peerDeps(),
      resolve({ extensions, browser: true }),
      commonjs(),
      typescript({
        transpiler: 'babel'
      }),
      terser()
    ]
  }
];
