import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyAUwlcWiuEl9V8hPczxYyIjS62_3BfcSrI");
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

async function generateContent(params) {
    console.log("first")
  const result = await model.generateContent(params);
  console.log(result, "result"); // Using 'params' instead of missing 'prompt'
  return result?.response?.text();
}

export default generateContent;
