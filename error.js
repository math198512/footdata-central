setTimeout(() => {
    throw new Error('Oops')
}, 3000)

process.on('uncaughtException', () => {

})

process.on('unhandledRejection', () => {
    
})