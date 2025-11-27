const Brain = {
  // PASTE YOUR API KEY HERE
  API_KEY: 'YOUR_KEY_GOES_HERE', 

  MODEL: 'gemini-2.5-flash', 
  
  get API_URL() {
    return `https://generativelanguage.googleapis.com/v1beta/models/${this.MODEL}:generateContent`;
  },

  // --- DYNAMIC PROMPT BUILDER ---
  // This constructs the rules based on your active settings
  buildSystemPrompt: (activeSections) => {
    // 1. Build the dynamic JSON structure based on user config
    let jsonFields = `"summary": "HTML String (< 50 words)",\n`;
    
    activeSections.forEach(sec => {
      // We map the user's custom Title to the instruction
      jsonFields += `        "${sec.key}": "HTML String. Content for section: '${sec.title}'",\n`;
    });

    return `
    You are a WWII Historian Engine. 
    Role: Generate a strict JSON object for a database application.
    Tone: Objective, encyclopedic, "Navy Blue" style (precise, military context).
    
    Constraints:
    1. Output ONLY valid JSON.
    2. Generate a unique "id" in kebab-case.
    3. "meta.tags": ["europe", "pacific", "eastern-front", "western-front", "africa", "turning-point", "1939"-"1945"].
    4. "meta.blurb": STRICTLY under 15 words.
    
    REQUIRED JSON SCHEMA:
    {
      "id": "string",
      "meta": { "title": "String", "subtitle": "String", "blurb": "String", "tags": ["tag"] },
      "content": {
        ${jsonFields}
      }
    }
    `;
  },

  generateBattle: async (topic) => {
    // 1. Get the current active structure (or default)
    let sections = APP_CONFIG.sections;
    const customStruct = localStorage.getItem('poc-ww2-custom-structure');
    if (customStruct) sections = JSON.parse(customStruct);

    // 2. Build Prompt
    const dynamicPrompt = Brain.buildSystemPrompt(sections);

    const payload = {
      system_instruction: { parts: [{ text: dynamicPrompt }] },
      contents: [{ parts: [{ text: `Topic: ${topic}` }] }],
      safetySettings: [
        { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_NONE" },
        { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_NONE" },
        { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "BLOCK_NONE" },
        { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_NONE" }
      ],
      generationConfig: { response_mime_type: "application/json" }
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
      if (!data.candidates || !data.candidates[0].content) throw new Error("AI blocked the content or returned empty.");
      return JSON.parse(data.candidates[0].content.parts[0].text);
    } catch (err) {
      console.error("Brain Failure:", err);
      throw err;
    }
  }
};
