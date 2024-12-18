import { TrainingModel } from './model.js';
import { TrainingView } from './view.js';

export class TrainingPresenter {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.view.bindAddTraining(this.handleAddTraining);
        this.view.bindDeleteTraining(this.handleDeleteTraining);
        this.view.bindFilterTrainings(this.handleFilterTrainings);
        this.updateView();
    }

    handleAddTraining = training => {
        this.model.addTraining(training);
        this.updateView();
    };

    handleDeleteTraining = index => {
        this.model.deleteTraining(index);
        this.updateView();
    };

    handleFilterTrainings = filter => {
        const filteredTrainings = this.model.filterTrainings(filter);
        this.view.renderTrainings(filteredTrainings);
    };

    updateView() {
        const trainings = this.model.trainings;
        this.view.updateStatistics(trainings.length);
        this.view.renderTrainings(trainings);
    }
}
