import { Component, inject, OnInit, signal } from '@angular/core';
import { ContainerComponent } from "../../components/container/container.component";
import { DevotionalsService } from '../../services/devotionals.service';
import bible from '../../../data/bible.json'

@Component({
  selector: 'app-devotional',
  imports: [ContainerComponent],
  templateUrl: './devotional.component.html',
  styleUrl: './devotional.component.css'
})
export class DevotionalComponent implements OnInit {

  devotionalService = inject(DevotionalsService)
  scripture = signal<{verse: string, reading: string}>({verse: '', reading: ''})
  ngOnInit(): void {
    this.getRandomVerse()
    this.devotionalService.getDevotionals(this.getRandomVerse()).subscribe({
      next: (devotional) => {
        this.scripture.set({verse: devotional.reference, reading: devotional.text})
        console.log({devotional})
      },
      error: (err) => {
        console.log({err})
      }
    })
  }

  getRandomVerse () {
    const book = bible[Math.floor(Math.random() * bible.length)]
    const chapter = Math.floor(Math.random() * book.chapters)
    const verse = Math.ceil(Math.random() * book.verses[chapter]) 
    console.log(book.book, chapter, verse)
    return `${book.book}${chapter}:${verse}`
  }
}
