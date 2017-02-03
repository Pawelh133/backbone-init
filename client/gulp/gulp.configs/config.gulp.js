module.exports = {
    basename: 'app',
    basedirectory: './',
    sass: {
        src: './app/**/*.scss'
    },
    typescript: {
        src: [
            './app/**/*.ts'
        ]
    },
    buildLocations: {
        ts: './app/',
        css: './app/'
    }
}