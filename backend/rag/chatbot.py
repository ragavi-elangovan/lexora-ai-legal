from sentence_transformers import SentenceTransformer

from rag.vector_store import search
from rag.llm import generate_answer

# Load embedding model
model = SentenceTransformer("all-MiniLM-L6-v2")


def ask_question(question, uploaded_files):
    """
    Answer questions using only the currently uploaded documents.
    """

    # Create embedding for the user's question
    query_embedding = model.encode(question)

    # Search only within the uploaded files
    results = search(
        query_embedding=query_embedding,
        uploaded_files=uploaded_files,
        top_k=10
    )

    # If no relevant chunks are found
    if len(results["documents"]) == 0:
        return "I couldn't find the answer in the uploaded documents."

    # Combine retrieved chunks into context
    context = "\n\n".join(results["documents"])

    # Generate answer using Gemini
    answer = generate_answer(context, question)

    return answer