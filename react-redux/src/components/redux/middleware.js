import { CREATE_POST } from './types'

const forbidden = ['fuck', 'php', 'spam']

export const forbiddenWordsMiddleware = ({dispatch}) => {
  return function (next) {
    return function (action) {
      if (action.type === CREATE_POST) {
        const found = forbidden.filter(word => action.payload.title.includes(word))
        if (found.length){
          alert('Вы спаммер')
          return
        }
      }
      return next(action)
    }
  }
}