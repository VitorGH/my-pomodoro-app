import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule]
})
export class AppComponent {
  title = 'Pomodoro Timer';
  timeLeft: number = 0.1 * 60;
  breakTime: number = 5 * 60;
  interval: any;
  isRunning: boolean = false;
  breakActive: boolean = false;

  startTimer() {
    if (!this.isRunning) {
      this.isRunning = true;
      this.interval = setInterval(() => {
        if (this.timeLeft > 0) {
          this.timeLeft--;
        } else {
          this.pauseTimer();
          alert('Tempo acabou! Faça uma pausa.');
        }
      }, 1000);
    }
  }

  pauseTimer() {
    this.isRunning = false;
    clearInterval(this.interval);
  }

  resetTimer() {
    this.pauseTimer();
    this.timeLeft = this.breakActive ? 5 * 60: 25 * 60;
  }

  toogleBreak(){
    this.breakActive = !this.breakActive;
    this.timeLeft = this.breakActive ? 5 * 60: 25 * 60;
  }

  // Método para formatar o tempo em MM:SS
  formatTime(): string {
    const minutes = Math.floor(this.timeLeft / 60);
    const seconds = this.timeLeft % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }
}
