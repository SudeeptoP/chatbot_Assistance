document.addEventListener('DOMContentLoaded', () => {
    const chatbotToggle = document.getElementById('chatbot-toggle');
    const chatbot = document.getElementById('chatbot');
    const closeBtn = document.querySelector('.chatbot-close-btn');
    const inputForm = document.getElementById('chatbot-input-form');
    const inputField = document.getElementById('chatbot-input');
    const messagesContainer = document.getElementById('chatbot-messages');

    // Toggle chatbot visibility
    chatbotToggle.addEventListener('click', () => {
        chatbot.classList.toggle('open');
    });

    // Close chatbot
    closeBtn.addEventListener('click', () => {
        chatbot.classList.remove('open');
    });

    // Handle form submission
    inputForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const userInput = inputField.value.trim();

        if (userInput) {
            // Add user message to the chat
            addMessage(userInput, 'user-message');
            inputField.value = '';

            // Generate and add bot response
            setTimeout(() => {
                const botResponse = getBotResponse(userInput);
                addMessage(botResponse, 'bot-message');
            }, 500); // Simulate bot thinking
        }
    });

    // Function to add a new message to the chat window
    function addMessage(text, className) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('chatbot-message', className);
        messageElement.textContent = text;
        messagesContainer.appendChild(messageElement);

        // Scroll to the latest message
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    // Function to generate a bot response
    function getBotResponse(userInput) {
        const lowerCaseInput = userInput.toLowerCase();

        // Simple keyword-based responses
        if (lowerCaseInput.includes('hello') || lowerCaseInput.includes('hi')) {
            return 'Hello there! How can I assist you today?';
        } else if (lowerCaseInput.includes('pricing')) {
            return 'You can find our pricing details on the pricing page. Would you like a link?';
        } else if (lowerCaseInput.includes('help') || lowerCaseInput.includes('support')) {
            return 'Sure, I can help. What do you need assistance with?';
        } else if (lowerCaseInput.includes('contact')) {
            return 'You can contact our support team at support@example.com.';
        } else if (lowerCaseInput.includes('bye') || lowerCaseInput.includes('goodbye')) {
            return 'Goodbye! Have a great day!';
        } else {
            return "I'm sorry, I don't understand that. Can you please rephrase? You can ask about pricing, help, or contact information.";
        }
    }
});