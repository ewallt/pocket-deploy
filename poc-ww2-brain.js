const Brain = {
  // --- CONFIGURATION ---
  // PASTE YOUR KEY HERE. 
  // Ensure you have "Website Restrictions" set in Google Cloud Console.
  API_KEY: 'AIzaSyBjL7zhEjoBgqCaXCxID3hV9KZNaPm5M8A', 

  MODEL: 'gemini-2.5-flash', 
  API_URL: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent',

  // --- PROMPT ENGINEERING ---
  generatePrompt: (topic) => `
    You are a WWII Historian Engine. 
    Role: Generate a strict JSON object for a database application. 
    Topic: "${topic}"
    
    Constraints:
    1. Output ONLY valid JSON. No markdown formatting. No backticks.
    2. Tone: Objective, encyclopedic, "Navy Blue" style (precise, military context).
    3. Generate a unique "id" in kebab-case (e.g., "battle-of-midway-1942").
    4. "meta.tags" allowed values: "europe", "pacific", "eastern-front", "western-front", "africa", "turning-point".
    
    Required JSON Schema:
    {
      "id": "string",
      "meta": {
        "title": "Battle Name (Year)",
        "subtitle": "Short strategic context",
        "blurb": "2-sentence summary for the card view.",
        "tags": ["tag1", "tag2"]
      },
      "content": {
        "summary": "Full narrative (~200 words). Use HTML <strong> for emphasis.",
        "context": ["Bullet point 1", "Bullet point 2"],
        "forces": ["<strong>Allies:</strong> Details", "<strong>Axis:</strong> Details"],
        "timeline": [
          { "label": "Date", "text": "Event description" }
        ],
        "turningPoints": ["Point 1", "Point 2"],
        "outcomes": ["Outcome 1", "Outcome 2"],
        "significance": ["Why this matters historically"],
        "sources": ["Citation 1", "Citation 2"]
      }
    }
  `,

  // --- API EXECUTION ---
  generateBattle: async (topic) => {
    const payload = {
      contents: [{
        parts: [{ text: Brain.generatePrompt(topic) }]
      }]
    };

    try {
      const response = await fetch(`${Brain.API_URL}?key=${Brain.API_KEY}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!response.ok) throw new Error(`API Error: ${response.status} - ${response.statusText}`);

      const data = await response.json();
      
      // Safety check for empty response
      if (!data.candidates || data.candidates.length === 0) {
        throw new Error("AI returned no content.");
      }

      const rawText = data.candidates[0].content.parts[0].text;
      
      // Sanitization: Remove Markdown code blocks if the AI adds them
      const cleanJson = rawText.replace(/```json/g, '').replace(/```/g, '').trim();
      
      return JSON.parse(cleanJson);

    } catch (err) {
      console.error("Brain Failure:", err);
      throw err;
    }
  }
};
