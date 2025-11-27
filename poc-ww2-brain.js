// --- NEW: SCHEMA ARCHITECT ---
  suggestSchema: async (context) => {
    const prompt = `
      Act as a Data Architect. 
      I am building a database application about: "${context}".
      
      Generate a list of 6-8 logical sections (categories) for this topic.
      Output strictly a JSON Array of objects.
      Format: [{"key": "camelCaseKey", "title": "Display Title", "type": "list"}]
      
      Example for 'Cooking': 
      [{"key": "ingredients", "title": "Ingredients", "type": "list"}, {"key": "steps", "title": "Instructions", "type": "timeline"}]
      
      Do not include 'summary' or 'meta'. Focus on the body content.
    `;

    const payload = {
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: { response_mime_type: "application/json" }
    };

    try {
      const response = await fetch(`${Brain.API_URL}?key=${Brain.API_KEY}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await response.json();
      return JSON.parse(data.candidates[0].content.parts[0].text);
    } catch (err) {
      console.error("Schema Gen Failure:", err);
      throw err;
    }
  }
