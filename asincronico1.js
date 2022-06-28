const fs = require('fs')
fs.writeFile('shooping.js', '1)Manjarate\n2)Donuts\n3)Lays', 'utf-8', () => {
console.log("se creo con exito")

})

fs.readFile('shooping.js', 'utf8', (err,data) => {

    fs.writeFile('shooping.js', data + '\n4)Detergente', 'utf8', () => {
      setTimeout(() => {
 fs.rename('shooping.js', 'shooping2.js', () => {
            console.log("Archivo renombrado")
        })
    },2000)
    setTimeout(() => {
         fs.unlink('shooping2.js', () => {
             console.log("El archivo a sido eliminado")
         })
        },2000)
    })
    

})

