export class TrainingModel {
    constructor() {
        this.trainings = [];
    }

    addTraining(training) {
        this.trainings.push(training);
    }

    deleteTraining(index) {
        this.trainings.splice(index, 1);
    }

    filterTrainings(filter) {
        return this.trainings.filter(training => {
            const sportMatch = filter.sport ? training.sport === filter.sport : true;
            const dateMatch = filter.date ? training.date === filter.date : true;
            return sportMatch && dateMatch;
        });
    }
}
