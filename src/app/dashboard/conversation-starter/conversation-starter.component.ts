import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import topics from '../../../data/conversation_packs.json'
import { iCTopic } from '../../interfaces/iCTopic';
import { ContainerComponent } from "../../components/container/container.component";

@Component({
  selector: 'app-conversation-starter',
  imports: [ContainerComponent],
  templateUrl: './conversation-starter.component.html',
  styleUrl: './conversation-starter.component.css'
})
export class ConversationStarterComponent implements OnInit {

  route = inject(ActivatedRoute)
  topic: iCTopic = {} as iCTopic
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    topics.filter((topic: iCTopic) => {
      if(topic.id === parseInt(id!)) {
        this.topic = topic
      }
    })
    console.log(this.topic)
  }
  
}
