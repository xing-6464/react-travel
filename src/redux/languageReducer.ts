import i18next from 'i18next'

export interface LanguageState {
  language: 'en' | 'zh';
  languageList: { name: string, code: string }[];
}

const defaultState: LanguageState = {
  language: 'zh',
  languageList: [
    { name: '中文', code: 'zh' },
    { name: 'English', code: 'en' },
  ]
}

const languageReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'change_language':
      i18next.changeLanguage(action.payload) // 不标准
      return { ...state, language: action.payload }

    case 'add_language':
      return {
        ...state,
        languageList: [...state.languageList, action.payload]
      }

    default:
      return state

  }
}

export default languageReducer
