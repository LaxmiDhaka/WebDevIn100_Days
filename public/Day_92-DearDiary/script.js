const startPage = document.getElementById('start-page');
const writingPage = document.getElementById('writing-page');
const startButton = document.getElementById('startButton');
const backButton = document.getElementById('backButton');
const saveButton = document.getElementById('saveButton');
const dateInput = document.getElementById('dateInput');
const diaryInput = document.getElementById('diaryInput');
const entriesContainer = document.getElementById('entries');

const entryModal = document.getElementById('entry-modal');
const closeModalButton = document.getElementById('closeModal');
const modalDate = document.getElementById('modal-date');
const modalContent = document.getElementById('modal-content');

const diaryEntries = [];

function showWritingPage() {
    startPage.classList.add('hidden');
    writingPage.classList.remove('hidden');
}

function showStartPage() {
    writingPage.classList.add('hidden');
    startPage.classList.remove('hidden');
}

function renderEntries() {
    entriesContainer.innerHTML = ''; // Clear existing entries
    for (let i = diaryEntries.length - 1; i >= 0; i--) {
        const entry = diaryEntries[i];
        const entryCard = document.createElement('div');
        entryCard.classList.add('entry-card');
        entryCard.dataset.index = i; // Store the index for easy lookup

        entryCard.innerHTML = `
            <div class="entry-date">${entry.date}</div>
            <div class="entry-content">${entry.text.substring(0, 100)}...</div>
        `;

        entryCard.addEventListener('click', () => showModal(i));
        entriesContainer.appendChild(entryCard);
    }
}

function saveEntry() {
    const entryText = diaryInput.value.trim();
    const entryDate = dateInput.value.trim();

    if (entryText && entryDate) {
        diaryEntries.push({ date: entryDate, text: entryText });

   
        renderEntries();

        
        diaryInput.value = 'Dear Diary,';
        dateInput.value = '';
    } else {
        const messageBox = document.createElement('div');
        messageBox.innerHTML = `
            <div style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); padding: 1.5rem; background-color: #B18A6A; color: white; border-radius: 0.75rem; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); z-index: 1000; text-align: center;">
                <p class="font-bold mb-2">Please add both a date and an entry!</p>
                <button onclick="this.parentNode.remove()" class="bg-white text-gray-800 font-semibold py-1 px-4 rounded-full mt-2">OK</button>
            </div>
        `;
        document.body.appendChild(messageBox);
    }
}

function showModal(index) {
    const entry = diaryEntries[index];
    if (entry) {
        modalDate.textContent = entry.date;
        modalContent.textContent = entry.text;
        entryModal.classList.add('visible');
    }
}

function hideModal() {
    entryModal.classList.remove('visible');
}


startButton.addEventListener('click', showWritingPage);
backButton.addEventListener('click', showStartPage);
saveButton.addEventListener('click', saveEntry);
closeModalButton.addEventListener('click', hideModal);

document.addEventListener('DOMContentLoaded', () => {
    diaryInput.value = 'Dear Diary,';
});