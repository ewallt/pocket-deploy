const Brain = {
  // --- CONFIGURATION ---
  // Paste your key here
  API_KEY: 'AIzaSyBjL7zhEjoBgqCaXCxID3hV9KZNaPm5M8A', 

  // TARGET MODEL
  MODEL: 'gemini-2.5-flash', 
  
  get API_URL() {
    return `https://generativelanguage.googleapis.com/v1beta/models/${this.MODEL}:generateContent`;
  },

  // --- SYSTEM INSTRUCTION ---
  SYSTEM_PROMPT: `
    You are a WWII Historian Engine. 
    Role: Generate a strict JSON object for a database application.
    Tone: Objective, encyclopedic, "Navy Blue" style (precise, military context).
    
    Constraints:
    1. Output ONLY valid JSON.
    2. Generate a unique "id" in kebab-case (e.g., "battle-of-midway-1942").
    3. "meta.tags" allowed: "europe", "pacific", "eastern-front", "western-front", "africa", "turning-point".
    4. "meta.blurb": STRICTLY under 15 words. Concise strategic summary only.
    5. Timeline: Strictly limit to 4-8 key events. Focus on the most critical dates.
    
    JSON Schema:
    {
      "id": "string",
      "meta": {
        "title": "String",
        "subtitle": "String",
        "blurb": "String",
        "tags": ["tag"]
      },
      "content": {
        "summary": "HTML String",
        "context": ["String"],
        "forces": ["String"],
        "timeline": [{ "label": "Date", "text": "Event" }],
        "turningPoints": ["String"],
        "outcomes": ["String"],
        "significance": ["String"],
        "sources": ["String"]
      }
    }
  `,

  // --- API EXECUTION ---
  generateBattle: async (topic) => {
    const payload = {
      system_instruction: {
        parts: [{ text: Brain.SYSTEM_PROMPT }]
      },
      contents: [{
        parts: [{ text: `Topic: ${topic}` }]
      }],
      safetySettings: [
        { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_NONE" },
        { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_NONE" },
        { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "BLOCK_NONE" },
        { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_NONE" }
      ],
      generationConfig: {
        response_mime_type: "application/json"
      }
    };

    try {
      const response = await fetch(`${Brain.API_URL}?key=${Brain.API_KEY}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(`API Error ${response.status}: ${errorData.error?.message || response.statusText}`);
      }

      const data = await response.json();
      
      if (!data.candidates || !data.candidates[0].content) {
        throw new Error("AI blocked the content or returned empty.");
      }

      return JSON.parse(data.candidates[0].content.parts[0].text);

    } catch (err) {
      console.error("Brain Failure:", err);
      throw err;
    }
  }
};
