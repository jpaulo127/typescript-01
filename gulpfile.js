const gulp = require('gulp')
const concat = require('gulp-concat')
const cssmin = require('gulp-cssmin')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')
const image = require('gulp-imagemin')
const stripCss = require('gulp-strip-css-comments')


function tarefasCSS(cb) {

   return gulp.src([
            './node_modules/bootstrap/dist/css/bootstrap.css',
            './src/css/style.css'
        ])
        .pipe(stripCss())                   // remove comentários css   
        .pipe(concat('styles.css'))         // mescla arquivos
        .pipe(cssmin())                     // minifica css
        .pipe(rename({ suffix: '.min'}))    // styles.min.css
        .pipe(gulp.dest('./dist/css'))      // cria arquivo em novo diretório

    

}

function tarefasJS(){

   return gulp.src([
            
            './node_modules/bootstrap/dist/js/bootstrap.js'
        ])  
        .pipe(concat('scripts.js'))         // mescla arquivos
        .pipe(uglify())                     // minifica js
        .pipe(rename({ suffix: '.min'}))    // scripts.min.js
        .pipe(gulp.dest('./dist/js'))       // cria arquivo em novo diretório

    

}

function tarefasImagem(){
    
    return gulp.src('./src/image/*')
        .pipe(image({
            pngquant: true,
            optipng: false,
            zopflipng: true,
            jpegRecompress: false,
            mozjpeg: true,
            gifsicle: true,
            svgo: true,
            concurrent: 10,
            quiet: true
        }))
        .pipe(gulp.dest('./dist/images'))
}



exports.styles = tarefasCSS
exports.scripts = tarefasJS
exports.images = tarefasImagem