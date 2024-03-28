import { title } from 'process';
import image from './assets/images/image3.jpg'
import {TitleBlock, ImageBlock, ColumnsBlock, TextBlock} from './classes/blocks'

const text = `На данном сайте, вы можете добавлять новые блоки и стили к ним, с помощью панели Sidebar. Для того, что бы добавить новый блок Text, в поле value укажите содержание этого блока, а в поле styles, укажите стили, которые вы бы хотели применить к данному блоку! Идентично работает и блок Title!`;

export const model = [

  new TitleBlock ('Конструктор на чистом JavaScript!', {
    tag: 'h2',
    styles: {
      background: 'linear-gradient(to left, #0055ffbb, #8672ae)',
      color: '#fff',
      'text-align': 'center',
      padding: '1.5rem'
    }
  }),
  new ImageBlock (image, {
    styles: {
      padding: '2rem 0',
      display: 'flex',
      'justify-content': 'center'
    },
    imageStyles: {
      width: '650px',
      height: 'auto'
    }
  }),
  new ColumnsBlock ([
    'Приложение на чистом JavaScript, без использования сторонних библиотек',
    'С минимальным использованием <br>HTML-разметки!',
    'С разделением JavaScript кода на модули.'
  ], {
    styles: {
      background: 'linear-gradient(to right, #0055ffbb, #8672ae)',
      padding: '2rem',
      color: '#fff',
      'font-weight': 'bold',
      'text-align': 'center',
    }
  }),
  new TextBlock(text, {
    styles: {
      background: 'linear-gradient(to bottom, #4af290, #a1d7b5)',
      padding: '1rem',
      'font-weight': 'bold',
      color: '#fff',
      'text-align': 'center'
    }
  }),
]

