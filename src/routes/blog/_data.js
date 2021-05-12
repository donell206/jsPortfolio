import {LoremIpsum} from 'lorem-ipsum'

const lorem = new LoremIpsum();

export let jobs =[

    {id:'1',title:"c# Developper",salary:15000,details:lorem.generateParagraphs(3)},
    {id:'2',title:"Java Developper",salary:18000,details:lorem.generateParagraphs(3)},
    {id:'3',title:"Full Stack Developper",salary:21000,details:lorem.generateParagraphs(3)},


];