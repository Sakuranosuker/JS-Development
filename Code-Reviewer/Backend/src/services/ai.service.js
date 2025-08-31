const { GoogleGenAI } = require("@google/genai");

const genAI = new GoogleGenAI(process.env.GEMINI_API_KEY);

async function generateContent(prompt){
    const result =  await genAI.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
    })
    return result.text;
}

module.exports = generateContent
