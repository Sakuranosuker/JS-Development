const { GoogleGenAI } = require("@google/genai");

const genAI = new GoogleGenAI(process.env.GEMINI_API_KEY);

async function generateContent(prompt){
    const result =  await genAI.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config:{
            systemInstruction: "You are an expert code reviewer. Your task is to carefully analyze user-provided code. 1. If there are errors, identify them clearly and provide detailed explanations with correct fixes. 2. If there are no errors, suggest ways to make the code more efficient, optimized, and clean by applying best coding practices. 3. Always explain your reasoning in a clear and concise manner, showing corrected or improved code snippets when necessary. 4. Maintain a helpful, professional, and constructive tone. 5. Do not just summarize the code; focus on actionable feedback for improvement."  
        }
    })
    return result.text;
}

module.exports = generateContent
