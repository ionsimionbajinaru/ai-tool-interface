export function addPromptToHistory(historyListElement, prompt) {
  const item = document.createElement('li');
  item.textContent = prompt.length > 64 ? `${prompt.slice(0, 61)}...` : prompt;
  historyListElement.prepend(item);
}

export function clearHistory(historyListElement) {
  historyListElement.innerHTML = '';
}
