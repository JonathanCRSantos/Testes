const mongoose  = require("mongoose")

const conn = async () => {
    try {
        mongoose.set('strictQuery', false)

        // Usar quando não tiver internet
        await mongoose.connect(`mongodb://localhost:27017`)

        // ===================================================

        // Usar quando tiver internet
        // await mongoose.connect(`mongodb+srv://LuKas:lukas0987654321@cluster0.qerkped.mongodb.net/?retryWrites=true&w=majority`)

        console.log("BANCO OPERANDO")
    } catch (error) {
        console.log(`Erro: ${error}`)
    }
}

module.exports = conn
