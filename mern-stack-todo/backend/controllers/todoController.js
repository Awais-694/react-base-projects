const Todo = require('../models/Todo');
const Groq = require("groq-sdk");

const fallbackSuggestions = [
  "Read Quran for fifteen minutes",
  "Practice cricket batting drills",
  "Play badminton footwork practice",
  "Complete one coding challenge",
  "Review today frontend task",
  "Take a focused morning walk",
  "Drink water and stretch",
];

const getFallbackSuggestion = () => {
  const index = Math.floor(Math.random() * fallbackSuggestions.length);
  return fallbackSuggestions[index];
};

// 1. AI Suggestion Function (Using Groq)
exports.getAISuggestion = async (req, res) => {
  console.log("--- AI Suggestion Request Received ---");
  
  try {
    // Check if API Key exists
    if (!process.env.GROQ_API_KEY) {
      console.error("ERROR: GROQ_API_KEY is missing in .env file!");
      return res.json({ 
        suggestion: getFallbackSuggestion(), 
        source: "fallback",
        error: "Missing API Key"
      });
    }

    // AI Call
    const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: "Suggest one professional daily todo task title. Mix topics across Quran reading, coding practice, cricket training, badminton practice, fitness, learning, and productivity. Keep it practical, positive, and specific. Give only one short task title in 4-8 words. Avoid repeating common todo app feature ideas.",
        },
      ],
      model: "llama-3.1-8b-instant", // Sab se fast aur stable model
    });

    const aiResponse = chatCompletion.choices[0]?.message?.content;

    if (aiResponse) {
      console.log("AI Success: ", aiResponse);
      return res.json({ suggestion: aiResponse.trim(), source: "groq" });
    } else {
      throw new Error("Empty response from Groq");
    }

  } catch (err) {
    // Ye line terminal mein check karein agar fallback aa raha hai
    console.error("ASLI ERROR YE HAI:", err.message);

    res.json({
      suggestion: getFallbackSuggestion(),
      source: "fallback",
      details: err.message
    });
  }
};

// 2. getTodos
exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (err) { res.status(500).json(err); }
};

// 3. addTodo
exports.addTodo = async (req, res) => {
  try {
    const newTodo = new Todo({ task: req.body.task });
    const savedTodo = await newTodo.save();
    res.status(201).json(savedTodo);
  } catch (err) { res.status(400).json(err); }
};

// 4. deleteTodo
exports.deleteTodo = async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Deleted" });
  } catch (err) { res.status(500).json(err); }
};
