import google.generativeai as genai

import os

API_KEY = os.getenv("GEMINI_API_KEY")

model = genai.GenerativeModel("gemini-2.5-flash")

response = model.generate_content("Say Hello")

print(response.text)