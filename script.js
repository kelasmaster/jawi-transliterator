// script.js

// Basic Jawi to Rumi mapping
const jawiToRumiMap = {
    'ا': 'a', 'ب': 'b', 'ت': 't', 'ث': 'th', 'ج': 'j', 'چ': 'ch',
    'ح': 'h', 'خ': 'kh', 'د': 'd', 'ذ': 'z', 'ر': 'r', 'ز': 'z',
    'س': 's', 'ش': 'sh', 'ص': 's', 'ض': 'd', 'ط': 't', 'ظ': 'z',
    'ع': 'a', 'غ': 'gh', 'ف': 'f', 'ق': 'q', 'ک': 'k', 'گ': 'g',
    'ل': 'l', 'م': 'm', 'ن': 'n', 'و': 'o', 'ه': 'h', 'ي': 'i',
    // Add more mappings as needed
};

document.getElementById('transliterate-btn').addEventListener('click', () => {
    const jawiInput = document.getElementById('jawi-input').value;
    const rumiOutput = transliterateJawiToRumi(jawiInput);
    document.getElementById('rumi-output').value = rumiOutput;
});

function transliterateJawiToRumi(jawiText) {
    let rumiText = '';
    for (let char of jawiText) {
        rumiText += jawiToRumiMap[char] || char; // Use the mapping or keep the original character
    }
    return rumiText;
}

// Copy to clipboard functionality
document.getElementById('copy-btn').addEventListener('click', () => {
    const rumiOutput = document.getElementById('rumi-output');
    rumiOutput.select();
    document.execCommand('copy');
    alert('Text copied to clipboard!');
});
