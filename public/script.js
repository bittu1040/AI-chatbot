async function sendMessage() {
    const userInput = document.getElementById('user-input');
    const chatBox = document.getElementById('chat-box');
    const message = userInput.value;
    
    if (!message) return;

    // Append user's message to the chat box
    const userMessage = document.createElement('div');
    userMessage.classList.add('chat-message', 'user');
    userMessage.textContent = `User: ${message}`;
    chatBox.appendChild(userMessage);

    // Scroll to the bottom of the chat box
    chatBox.scrollTop = chatBox.scrollHeight;

    // Clear the input field
    userInput.value = '';

    try {
        const response = await fetch('http://localhost:5001/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message }),
        });

        const data = await response.json();

        // Append AI's response to the chat box
        const aiMessage = document.createElement('div');
        aiMessage.classList.add('chat-message', 'ai');
        aiMessage.textContent = `AI: ${data.response}`;
        chatBox.appendChild(aiMessage);

        // Scroll to the bottom of the chat box
        chatBox.scrollTop = chatBox.scrollHeight;
    } catch (error) {
        console.error('Error:', error);
    }
}


function openGitHub() {
    window.open('https://github.com/bittu1040/AI-chatbot', '_blank');
}