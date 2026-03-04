import { createMessageElement, getMockResponse } from '../components/chat.js';
import { addPromptToHistory, clearHistory } from '../components/sidebar.js';

const chatForm = document.getElementById('chat-form');
const promptInput = document.getElementById('prompt-input');
const resultsPanel = document.getElementById('results-panel');
const historyList = document.getElementById('history-list');
const newChatButton = document.getElementById('new-chat-btn');

function autoGrowTextarea() {
  promptInput.style.height = 'auto';
  promptInput.style.height = `${Math.min(promptInput.scrollHeight, 160)}px`;
}

function appendMessage(role, content) {
  const messageEl = createMessageElement(role, content);
  resultsPanel.appendChild(messageEl);
  resultsPanel.scrollTop = resultsPanel.scrollHeight;
}

function simulateAssistantReply(prompt) {
  window.setTimeout(() => {
    appendMessage('assistant', getMockResponse(prompt));
  }, 450);
}

chatForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const prompt = promptInput.value.trim();

  if (!prompt) {
    return;
  }

  appendMessage('user', prompt);
  addPromptToHistory(historyList, prompt);
  simulateAssistantReply(prompt);

  promptInput.value = '';
  autoGrowTextarea();
  promptInput.focus();
});

promptInput.addEventListener('input', autoGrowTextarea);

promptInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' && !event.shiftKey) {
    event.preventDefault();
    chatForm.requestSubmit();
  }
});

newChatButton.addEventListener('click', () => {
  resultsPanel.innerHTML = '';
  clearHistory(historyList);
  appendMessage('assistant', 'New chat started. Ask me anything.');
  promptInput.focus();
});

appendMessage('assistant', 'Welcome! This is a starter AI interface with mock responses.');
autoGrowTextarea();
