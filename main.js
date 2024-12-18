import { TrainingModel } from './model.js';
import { TrainingView } from './view.js';
import { TrainingPresenter } from './presenter.js';

document.addEventListener('DOMContentLoaded', () => {
    new TrainingPresenter(new TrainingModel(), new TrainingView());
});
