export class TrainingView {
    constructor() {
        this.statisticsElement = document.getElementById('statistics');
        this.addTrainingForm = document.getElementById('add-training-form');
        this.trainingList = document.getElementById('training-list');
        this.filtersForm = document.getElementById('filters');
    }

    updateStatistics(count) {
        this.statisticsElement.querySelector('p').textContent = `Всего тренировок: ${count}`;
    }

    renderTrainings(trainings) {
        this.trainingList.innerHTML = '';
        trainings.forEach((training, index) => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <div>
                    <strong>Вид спорта:</strong> ${training.sport}<br>
                    <strong>Длительность:</strong> ${training.duration} мин<br>
                    <strong>Интенсивность:</strong> ${training.intensity}<br>
                    <strong>Дата:</strong> ${training.date}
                </div>
            `;
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Удалить';
            deleteButton.dataset.index = index;
            listItem.appendChild(deleteButton);
            this.trainingList.appendChild(listItem);
        });
    }

    bindAddTraining(handler) {
        this.addTrainingForm.addEventListener('submit', event => {
            event.preventDefault();
            const sport = document.getElementById('sport').value;
            const duration = parseInt(document.getElementById('duration').value, 10);
            const intensity = document.getElementById('intensity').value;
            const date = document.getElementById('date').value;

            if (!sport || !duration || !intensity || !date) {
                alert('Все поля должны быть заполнены!');
                return;
            }

            if (duration <= 0) {
                alert('Длительность тренировки должна быть больше нуля!');
                return;
            }

            handler({ sport, duration, intensity, date });
        });
    }

    bindDeleteTraining(handler) {
        this.trainingList.addEventListener('click', event => {
            if (event.target.tagName === 'BUTTON') {
                const index = parseInt(event.target.dataset.index, 10);
                handler(index);
            }
        });
    }

    bindFilterTrainings(handler) {
        this.filtersForm.addEventListener('submit', event => {
            event.preventDefault();
            const sport = document.getElementById('filter-sport').value;
            const date = document.getElementById('filter-date').value;

            handler({ sport, date });
        });
    }
}
