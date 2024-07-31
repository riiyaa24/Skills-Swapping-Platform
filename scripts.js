document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.getElementById('submit-skill');
    const skillList = document.getElementById('skill-list');

    submitButton.addEventListener('click', () => {
        const skillName = document.getElementById('skill-name').value;
        const skillLearn = document.getElementById('skill-learn').value;

        if (skillName && skillLearn) {
            const listItem = document.createElement('li');
            listItem.textContent = `Teach: ${skillName}, Learn: ${skillLearn}`;
            skillList.appendChild(listItem);

            document.getElementById('skill-name').value = '';
            document.getElementById('skill-learn').value = '';
        } else {
            alert('Please enter both skills.');
        }
    });
});
