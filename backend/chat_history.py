import uuid

# Store all chats in memory
chat_sessions = {}


def create_chat():
    """
    Create a new chat session.
    """
    chat_id = str(uuid.uuid4())

    chat_sessions[chat_id] = {
        "chat_id": chat_id,
        "title": "",
        "messages": [],
        "uploaded_files": []
    }

    return chat_id


def add_message(chat_id, role, message):
    """
    Add a message to a chat.
    The first user message becomes the chat title.
    """

    if chat_id not in chat_sessions:
        return

    # Set chat title from the first user message
    if role == "user" and chat_sessions[chat_id]["title"] == "":
        chat_sessions[chat_id]["title"] = message[:40]

    chat_sessions[chat_id]["messages"].append({
        "role": role,
        "content": message
    })


def get_chat(chat_id):
    """
    Return one chat.
    """

    return chat_sessions.get(
        chat_id,
        {
            "chat_id": chat_id,
            "title": "",
            "messages": []
        }
    )


def get_all_chats():
    """
    Return all chats for sidebar.
    """

    chats = []

    for chat in chat_sessions.values():
        chats.append({
            "chat_id": chat["chat_id"],
            "title": chat["title"] if chat["title"] else "New Chat"
        })

    return chats
def set_uploaded_files(chat_id, files):
    if chat_id in chat_sessions:
        chat_sessions[chat_id]["uploaded_files"] = files