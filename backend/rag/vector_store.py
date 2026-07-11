import chromadb
import uuid

# Create ChromaDB client
client = chromadb.PersistentClient(path="chroma_db")

collection = client.get_or_create_collection(
    name="legal_documents"
)


# ---------------------------------
# Clear database
# ---------------------------------
def clear_database():
    """
    Remove all previous embeddings.
    """
    global collection

    try:
        client.delete_collection("legal_documents")
    except:
        pass

    collection = client.get_or_create_collection(
        name="legal_documents"
    )


# ---------------------------------
# Store embeddings
# ---------------------------------
def store_embeddings(chunks, embeddings, filename):

    ids = []
    documents = []
    metadatas = []

    for i in range(len(chunks)):
        ids.append(str(uuid.uuid4()))
        documents.append(chunks[i])

        metadatas.append({
            "source": filename,
            "chunk": i
        })

    collection.add(
        ids=ids,
        documents=documents,
        embeddings=embeddings.tolist(),
        metadatas=metadatas
    )

    print(f"\nStored {len(chunks)} chunks from {filename}\n")


# ---------------------------------
# Search
# ---------------------------------
def search(query_embedding, uploaded_files, top_k=20):

    results = collection.query(
        query_embeddings=[query_embedding.tolist()],
        n_results=top_k,
        where={
            "source": {
                "$in": uploaded_files
            }
        },
        include=["documents", "metadatas", "distances"]
    )

    print("\n========== SEARCH RESULTS ==========")
    print(results)
    print("====================================")

    documents = []
    sources = []

    # DO NOT FILTER BY DISTANCE FOR NOW
    if len(results["documents"]) > 0:

        for doc, meta, distance in zip(
            results["documents"][0],
            results["metadatas"][0],
            results["distances"][0]
        ):

            print(f"Distance : {distance}")
            print(f"Source   : {meta['source']}")
            print(f"Chunk    : {meta['chunk']}")

            print("Document:")
            print(doc)

            print("----------------------------------")

            documents.append(doc)
            sources.append(meta)

    return {
        "documents": documents,
        "sources": sources
    }