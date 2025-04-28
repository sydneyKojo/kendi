import { Component, OnInit } from '@angular/core';
import { ContainerComponent } from "../../components/container/container.component";
import topics from '../../../conversation_packs/demo.json'
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-conversation-starters',
  imports: [RouterLink, ContainerComponent, NgIf],
  templateUrl: './conversation-starters.component.html',
  styleUrl: './conversation-starters.component.css'
})
export class ConversationStartersComponent implements OnInit {
  topics: any[] = []
  tags: string[] = []
  filtered_topic: string = ''
  filtered_tag: string = ''
  
  ngOnInit(): void {
    this.topics = topics
    const tags = topics.flatMap(topic => topic.tags).sort()
    this.tags = tags.filter((item, index) => index + 1 <= tags.length && item !== tags[index + 1])
  }

  filterTopic (topic: string) {
    this.filtered_topic = topic
  }

  filterTag (tag: string) {
    this.filtered_tag = tag
  }
}
