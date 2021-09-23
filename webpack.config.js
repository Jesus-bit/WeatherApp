const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
/** @type {import('webpack').Configuration} */

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },
    resolve: {
        extensions: ['.js']
    },
    module: {
        rules: [
            {
                // Test declara que extensión de archivos aplicara el loader
                test: /\.js$/,
                // Exclude permite omitir archivos o carpetas especificas
                exclude: /node_modules/,
                // Use es un arreglo u objeto donde dices que loader aplicaras
                use: {
                    loader: "babel-loader"
                },
            },
            {
                test: /\.(css|styl)$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                ]
            },
            {
                test: /\.(png|svg|jpg)/,
                type: "asset/resource"
            },
            {
                test: /\.(woff|woff2)$/,
                use: {
                    loader: "url-loader",
                    options: {
                        // limit => limite de tamaño
                        limit: 10000,
                        // Mimetype => tipo de dato
                        mimetype: "application/font-woff",
                        // name => nombre de salida
                        name: "[name].[ext]",
                        // outputPath => donde se va a guardar en la carpeta final
                        outputPath: "./assets/fonts/",
                        publicPath: "./assets/fonts/",
                        esModule: false,
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            // CONFIGURACIÓN DEL PLUGIN
            inject: true, // INYECTA EL BUNDLE AL TEMPLATE HTML
            template: './index.html', // LA RUTA AL TEMPLATE HTML
            filename: './index.html' // NOMBRE FINAL DEL ARCHIVO
        }),
        new MiniCssExtractPlugin({
            filename: 'assets/[name].css'
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "assets"),
                    to: "assets"
                }
            ]
        })
    ],
    optimization:{
        minimize: true,
        minimizer: [
            //Instanciamos las dependencias que estamos importando
            new CssMinimizerPlugin(),
            new TerserPlugin(),
        ]
    }
}