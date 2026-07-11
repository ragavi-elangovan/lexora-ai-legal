import google.generativeai as genai

# Configure Gemini API
import os

genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

# Load Gemini model
model = genai.GenerativeModel("gemini-2.5-flash")


def generate_answer(context, question):
    """
    Generate answer from retrieved context using Gemini.
    """

    prompt = f"""
You are an AI Legal Research Assistant.

Your job is to answer ONLY using the information given in the Context.

Rules:
1. Read the Context carefully.
2. If the answer is present in the Context, answer directly.
3. Never say the answer is missing if it clearly exists in the Context.
4. Do not use outside knowledge.
5. Give short and accurate answers.

Context:
{context}

Question:
{question}

Answer:
"""

    # Print context for debugging
    print("\n================ CONTEXT SENT TO GEMINI ================\n")
    print(context)
    print("\n========================================================\n")

    try:
        response = model.generate_content(prompt)

        # Print Gemini response
        print("\n================ GEMINI RESPONSE =======================\n")
        print(response.text)
        print("\n========================================================\n")

        return response.text.strip()

    except Exception as e:
        print("Gemini Error:", e)

        # If Gemini quota is exceeded, return the retrieved context
        if "429" in str(e):
            return (
                "Gemini API quota exceeded.\n\n"
                "Retrieved Context:\n\n"
                f"{context}"
            )

        return f"Gemini Error: {str(e)}"