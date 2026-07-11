from pypdf import PdfReader


def read_pdf(file_path):

    reader = PdfReader(file_path)

    text = ""

    for page in reader.pages:
        page_text = page.extract_text()

        if page_text:
            text += page_text + "\n"

    print("\n========== PDF TEXT ==========\n")
    print(text)
    print("\n==============================\n")

    return text


def split_text(text, chunk_size=500, overlap=100):

    chunks = []

    start = 0

    while start < len(text):

        end = start + chunk_size

        chunks.append(text[start:end])

        start += chunk_size - overlap

    print("\n========== CHUNKS ==========\n")

    for i, chunk in enumerate(chunks):
        print(f"Chunk {i+1}")
        print(chunk)
        print("-----------------------------------")

    return chunks