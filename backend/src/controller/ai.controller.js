import generateContent from "../services/ai.service.js";

const getReview = async (req, res) => {
  const code = req.body.code;

  if (!code) {
    return res.status(400).send("Prompt is required");
  }

  try {
    const response = await generateContent(code);
    console.log(response, 20);
    res.send(response);
  } catch (error) {
    res.status(500).send("Error generating response");
  }
};

export default getReview;
