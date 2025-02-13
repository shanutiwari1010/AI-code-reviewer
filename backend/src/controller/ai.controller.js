import generateContent from "../services/ai.service.js";

const getResponse = async (req, res) => {
  const prompt = req.query.prompt;
  console.log(req.query, 10);
  console.log(prompt, "prompt");

  if (!prompt) {
    return res.status(400).send("Prompt is required");
  }

  try {
    const response = await generateContent(prompt);
    console.log(response, 20);
    res.send(response);
  } catch (error) {
    res.status(500).send("Error generating response");
  }
};

export default getResponse;
